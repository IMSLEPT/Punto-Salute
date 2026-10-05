#!/usr/bin/env python3
"""
Build dell'APK "Punto Salute" SENZA Android SDK / Gradle.

Utile in ambienti dove l'SDK non e' installabile (CI minimali, container, sandbox).
Usa solo artefatti pubblici di Maven Central e PyPI:
  - android-all (Robolectric)  -> android.jar + risorse di framework per aapt2
  - aapt2 (pacchetto PyPI)     -> compilazione e link delle risorse
  - dalvik-dx (repackaged)     -> conversione .class -> classes.dex
  - firma APK Signature Scheme v2 (tools/ApkSignV2.java, solo API JDK) per Android 7.0+

Il percorso "ufficiale" resta Gradle (android/): vedi README.md.

Uso:
  python3 tools/build_apk.py [--out dist/PuntoSalute.apk] [--tools-dir DIR]
                             [--keystore keystore/puntosalute.p12]
"""
import argparse, glob, os, shutil, struct, subprocess, sys, tempfile, time, urllib.request, zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MAVEN = "https://repo.maven.apache.org/maven2/"
DEPS = {
    "android-all-14.jar": MAVEN + "org/robolectric/android-all/14-robolectric-10818077/android-all-14-robolectric-10818077.jar",
    "dalvik-dx-16.0.1.jar": MAVEN + "com/jakewharton/android/repackaged/dalvik-dx/16.0.1/dalvik-dx-16.0.1.jar",
}
AAPT2_WHEEL = "aapt2-0.2.1-py3-none-any.whl"


def run(cmd, **kw):
    print("  $", " ".join(cmd) if isinstance(cmd, list) else cmd)
    r = subprocess.run(cmd, **kw)
    if r.returncode != 0:
        sys.exit("ERRORE: comando fallito (%d)" % r.returncode)


def download(url, dest):
    for attempt in range(1, 6):
        try:
            with urllib.request.urlopen(url, timeout=120) as r, open(dest + ".part", "wb") as f:
                shutil.copyfileobj(r, f)
            if os.path.getsize(dest + ".part") > 10000:
                os.replace(dest + ".part", dest)
                return
        except Exception as e:  # rete / rate limit (HTTP 429 di Maven Central)
            print("  tentativo %d fallito: %s" % (attempt, e))
        time.sleep(attempt * 10)
    sys.exit("download impossibile: " + url)


def ensure_tools(tools):
    os.makedirs(tools, exist_ok=True)
    for name, url in DEPS.items():
        p = os.path.join(tools, name)
        if not os.path.exists(p):
            print("scarico", name)
            download(url, p)
    aapt2 = os.path.join(tools, "aapt2")
    if not os.path.exists(aapt2):
        print("scarico aapt2 (PyPI)")
        run([sys.executable, "-m", "pip", "download", "aapt2==0.2.1", "--no-deps", "-q", "-d", tools])
        with zipfile.ZipFile(os.path.join(tools, AAPT2_WHEEL)) as z:
            with z.open("aapt2/bin/Linux/aapt2") as src, open(aapt2, "wb") as dst:
                shutil.copyfileobj(src, dst)
        os.chmod(aapt2, 0o755)
    return aapt2


def align_and_repack(src_apk, dst_apk, extra):
    """Ricompone l'APK: voci non compresse allineate a 4 byte (come zipalign) e resources.arsc STORED."""
    with zipfile.ZipFile(src_apk) as zin, zipfile.ZipFile(dst_apk, "w") as zout:
        entries = []
        for zi in zin.infolist():
            entries.append((zi.filename, zin.read(zi.filename), zi.compress_type))
        for name, data in extra:
            entries.append((name, data, zipfile.ZIP_DEFLATED))
        # AndroidManifest.xml per primo, come fanno gli strumenti ufficiali
        entries.sort(key=lambda e: (0 if e[0] == "AndroidManifest.xml" else 1))
        for name, data, ctype in entries:
            if name.endswith("/"):
                continue
            if name == "resources.arsc":
                ctype = zipfile.ZIP_STORED
            zi = zipfile.ZipInfo(name, date_time=(2026, 1, 1, 0, 0, 0))
            zi.compress_type = ctype
            zi.external_attr = 0o644 << 16
            if ctype == zipfile.ZIP_STORED:
                offset = zout.fp.tell() + 30 + len(name.encode("utf-8"))
                pad = (4 - offset % 4) % 4
                if pad:
                    # campo extra di riempimento (stesso schema usato da zipalign)
                    pad = pad + 4 if pad < 4 else pad
                    zi.extra = struct.pack("<HH", 0xD935, pad - 4) + b"\0" * (pad - 4)
                    if (offset + len(zi.extra)) % 4:
                        zi.extra += b"\0" * (4 - (offset + len(zi.extra)) % 4)
            zout.writestr(zi, data)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default=os.path.join(ROOT, "dist", "PuntoSalute.apk"))
    ap.add_argument("--tools-dir", default=os.environ.get("PS_TOOLS", os.path.expanduser("~/.cache/punto-salute-tools")))
    ap.add_argument("--keystore", default=os.path.join(ROOT, "keystore", "puntosalute.p12"))
    ap.add_argument("--storepass", default=os.environ.get("PS_STOREPASS", "puntosalute"))
    ap.add_argument("--alias", default="puntosalute")
    ap.add_argument("--version-name", default=None)
    ap.add_argument("--version-code", default="1")
    a = ap.parse_args()

    main_dir = os.path.join(ROOT, "android", "app", "src", "main")
    tools = os.path.abspath(a.tools_dir)
    aapt2 = ensure_tools(tools)
    android_jar = os.path.join(tools, "android-all-14.jar")
    dx = os.path.join(tools, "dalvik-dx-16.0.1.jar")

    version_name = a.version_name
    if not version_name:
        with open(os.path.join(ROOT, "VERSION")) as f:
            version_name = f.read().strip()

    work = tempfile.mkdtemp(prefix="ps-build-")
    try:
        classes, dexdir, resz = (os.path.join(work, x) for x in ("classes", "dex", "res.zip"))
        os.makedirs(classes)
        os.makedirs(dexdir)

        print("[1/6] javac")
        srcs = glob.glob(os.path.join(main_dir, "java", "**", "*.java"), recursive=True)
        run(["javac", "-nowarn", "--release", "8", "-cp", android_jar, "-d", classes] + srcs)

        print("[2/6] dex")
        run(["java", "-cp", dx, "com.android.dx.command.Main", "--dex", "--min-sdk-version=24",
             "--output=" + os.path.join(dexdir, "classes.dex"), classes])

        print("[3/6] aapt2 compile")
        res_dir = os.path.join(main_dir, "res")
        run([aapt2, "compile", "--dir", res_dir, "-o", resz])

        print("[4/6] aapt2 link (+ assets)")
        base = os.path.join(work, "base.apk")
        # Con Gradle il package arriva da `namespace`; qui lo iniettiamo nel manifest temporaneo.
        with open(os.path.join(main_dir, "AndroidManifest.xml"), encoding="utf-8") as f:
            manifest_txt = f.read().replace("<manifest ", '<manifest package="it.puntosalute.app" ', 1)
        manifest_path = os.path.join(work, "AndroidManifest.xml")
        with open(manifest_path, "w", encoding="utf-8") as f:
            f.write(manifest_txt)
        run([aapt2, "link", "-I", android_jar, "--manifest", manifest_path,
             "--min-sdk-version", "24", "--target-sdk-version", "34",
             "--version-code", str(a.version_code), "--version-name", version_name,
             "-A", os.path.join(main_dir, "assets"), "--auto-add-overlay", "-o", base, resz])

        print("[5/6] allineamento e composizione")
        with open(os.path.join(dexdir, "classes.dex"), "rb") as f:
            dex_bytes = f.read()
        aligned = os.path.join(work, "aligned.apk")
        align_and_repack(base, aligned, [("classes.dex", dex_bytes)])

        print("[6/6] firma (APK Signature Scheme v2)")
        signer_dir = os.path.join(work, "signer")
        os.makedirs(signer_dir)
        run(["javac", "-nowarn", "-d", signer_dir, os.path.join(ROOT, "tools", "ApkSignV2.java")])
        os.makedirs(os.path.dirname(os.path.abspath(a.out)), exist_ok=True)
        run(["java", "-cp", signer_dir, "ApkSignV2", aligned, a.out, a.keystore, a.storepass, a.alias, a.storepass])
    finally:
        shutil.rmtree(work, ignore_errors=True)

    print("\nAPK pronto: %s (%.1f MB)" % (a.out, os.path.getsize(a.out) / 1048576))
    run([aapt2, "dump", "badging", a.out], stdout=subprocess.DEVNULL)


if __name__ == "__main__":
    main()
