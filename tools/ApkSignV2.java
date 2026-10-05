import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.file.Files;
import java.security.KeyStore;
import java.security.MessageDigest;
import java.security.PrivateKey;
import java.security.Signature;
import java.security.cert.Certificate;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.List;

/**
 * Firma un APK con l'APK Signature Scheme v2 (Android 7.0+), usando solo API pubbliche del JDK.
 * Specifica: https://source.android.com/docs/security/features/apksigning/v2
 *
 * uso: ApkSignV2 <in.apk> <out.apk> <keystore.p12> <storepass> <alias> <keypass>
 */
public class ApkSignV2 {

    private static final int CHUNK = 1024 * 1024;
    private static final int ALG_RSA_PKCS1_SHA256 = 0x0103;
    private static final int ID_V2 = 0x7109871a;

    public static void main(String[] a) throws Exception {
        if (a.length < 6) {
            System.err.println("uso: ApkSignV2 <in.apk> <out.apk> <keystore> <storepass> <alias> <keypass>");
            System.exit(2);
        }
        byte[] apk = Files.readAllBytes(new File(a[0]).toPath());

        KeyStore ks = KeyStore.getInstance("PKCS12");
        FileInputStream fis = new FileInputStream(a[2]);
        ks.load(fis, a[3].toCharArray());
        fis.close();
        PrivateKey key = (PrivateKey) ks.getKey(a[4], a[5].toCharArray());
        Certificate[] chain = ks.getCertificateChain(a[4]);
        X509Certificate cert = (X509Certificate) chain[0];

        // --- individua EOCD e directory centrale
        int eocd = -1;
        for (int i = apk.length - 22; i >= Math.max(0, apk.length - 22 - 65535); i--) {
            if (le32(apk, i) == 0x06054b50) { eocd = i; break; }
        }
        if (eocd < 0) throw new IllegalStateException("EOCD non trovato");
        int cdSize = le32(apk, eocd + 12);
        int cdOffset = le32(apk, eocd + 16);
        if (cdOffset + cdSize != eocd) throw new IllegalStateException("struttura ZIP inattesa (APK gia' firmato?)");

        byte[] contents = slice(apk, 0, cdOffset);
        byte[] cd = slice(apk, cdOffset, cdOffset + cdSize);
        byte[] eocdBytes = slice(apk, eocd, apk.length);

        // --- digest a blocchi da 1 MB sulle sezioni 1 (contenuti), 3 (CD), 4 (EOCD)
        List<byte[]> chunkDigests = new ArrayList<byte[]>();
        chunk(contents, chunkDigests);
        chunk(cd, chunkDigests);
        chunk(eocdBytes, chunkDigests);
        MessageDigest top = MessageDigest.getInstance("SHA-256");
        top.update((byte) 0x5a);
        top.update(le32b(chunkDigests.size()));
        for (byte[] d : chunkDigests) top.update(d);
        byte[] digest = top.digest();

        // --- signed data
        byte[] digestEntry = lp(cat(le32b(ALG_RSA_PKCS1_SHA256), lp(digest)));
        byte[] digests = lp(digestEntry);
        byte[] certs = lp(lp(cert.getEncoded()));
        byte[] attrs = lp(new byte[0]);
        byte[] signedData = cat(digests, certs, attrs);

        Signature sig = Signature.getInstance("SHA256withRSA");
        sig.initSign(key);
        sig.update(signedData);
        byte[] signature = sig.sign();

        byte[] signatures = lp(lp(cat(le32b(ALG_RSA_PKCS1_SHA256), lp(signature))));
        byte[] publicKey = lp(cert.getPublicKey().getEncoded());
        byte[] signer = cat(lp(signedData), signatures, publicKey);
        byte[] v2value = lp(lp(signer));

        // --- APK Signing Block
        byte[] pair = cat(le64b(4 + v2value.length), le32b(ID_V2), v2value);
        long blockSize = pair.length + 24; // 8 (size finale) + 16 (magic)
        ByteArrayOutputStream block = new ByteArrayOutputStream();
        block.write(le64b(blockSize));
        block.write(pair);
        block.write(le64b(blockSize));
        block.write("APK Sig Block 42".getBytes("US-ASCII"));
        byte[] blockBytes = block.toByteArray();

        // --- EOCD con offset aggiornato
        byte[] newEocd = eocdBytes.clone();
        ByteBuffer.wrap(newEocd).order(ByteOrder.LITTLE_ENDIAN).putInt(16, cdOffset + blockBytes.length);

        ByteArrayOutputStream out = new ByteArrayOutputStream(apk.length + blockBytes.length);
        out.write(contents);
        out.write(blockBytes);
        out.write(cd);
        out.write(newEocd);
        Files.write(new File(a[1]).toPath(), out.toByteArray());
        System.out.println("firmato (v2): " + a[1] + "  SHA-256 cert: " + hex(MessageDigest.getInstance("SHA-256").digest(cert.getEncoded())));
    }

    private static void chunk(byte[] data, List<byte[]> out) throws Exception {
        for (int off = 0; off < data.length; off += CHUNK) {
            int len = Math.min(CHUNK, data.length - off);
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update((byte) 0xa5);
            md.update(le32b(len));
            md.update(data, off, len);
            out.add(md.digest());
        }
    }

    private static byte[] lp(byte[] b) { return cat(le32b(b.length), b); }

    private static byte[] cat(byte[]... parts) {
        int n = 0;
        for (byte[] p : parts) n += p.length;
        byte[] r = new byte[n];
        int o = 0;
        for (byte[] p : parts) { System.arraycopy(p, 0, r, o, p.length); o += p.length; }
        return r;
    }

    private static byte[] slice(byte[] b, int from, int to) {
        byte[] r = new byte[to - from];
        System.arraycopy(b, from, r, 0, r.length);
        return r;
    }

    private static int le32(byte[] b, int o) {
        return (b[o] & 0xff) | (b[o + 1] & 0xff) << 8 | (b[o + 2] & 0xff) << 16 | (b[o + 3] & 0xff) << 24;
    }

    private static byte[] le32b(int v) {
        return ByteBuffer.allocate(4).order(ByteOrder.LITTLE_ENDIAN).putInt(v).array();
    }

    private static byte[] le64b(long v) {
        return ByteBuffer.allocate(8).order(ByteOrder.LITTLE_ENDIAN).putLong(v).array();
    }

    private static String hex(byte[] b) {
        StringBuilder sb = new StringBuilder();
        for (byte x : b) sb.append(String.format("%02x", x));
        return sb.toString();
    }
}
