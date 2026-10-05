# HANDOFF – Punto Salute (stato del lavoro)

Documento per riprendere il lavoro in una nuova chat. Aggiornato: 2026-10-05. Branch: `ccr-fbfcd40c-7lsjut`.

## Cos'è
App Android **offline** (nessun permesso INTERNET) = guscio nativo Java con `WebView` + web app (vanilla JS, esbuild, Three.js)
inclusa negli asset. Manuale infermieristico interattivo: ricerca universale, schede collegate tra loro, anatomia 3D,
procedure, provette, dispositivi, patologie, farmaci, calcolatore, scale, glossario, studio.

**Grafica**: da tavola di riferimento dell'utente (`branding/reference-board-final.png`, la n. 2 dell'utente: "Dalla conoscenza alla cura").
Logo/icona = pixel originali ritagliati (`branding/make_assets.py`, `reference-board.png`). Palette: #0EA5E9 sky, #0B7285 petrolio,
#0F172A navy, #E2F6F9 azzurro chiaro; font Inter. L'utente vuole la Home **identica** al mockup (header, saluto, ricerca,
card Anatomia/Patologie/Procedure/Scale, "Farmaci e calcoli" larga, "Continua a studiare" con progresso, barra
Home/Cerca/Preferiti/Note/Profilo). Stato: implementata, da rifinire a confronto col mockup.

## Come si costruisce
```
cd web && npm ci && node build.mjs          # genera android/app/src/main/assets/www
python3 tools/build_apk.py --out dist/PuntoSalute.apk   # APK firmato SENZA Android SDK (scarica aapt2/dx/android.jar da Maven/PyPI)
```
- `dl.google.com` è bloccato in questo ambiente → niente SDK/AGP. `tools/build_apk.py` aggira con artefatti Maven Central/PyPI
  (android-all Robolectric come android.jar, aapt2 da PyPI, dalvik-dx), firma APK v2 con `tools/ApkSignV2.java` (verifica indipendente: `pip install apksigtool; python3 -m apksigtool verify X.apk`).
- Chiave di firma di sviluppo: `keystore/puntosalute.p12` (pw `puntosalute`). Va mantenuta per poter aggiornare l'app senza disinstallare.
- Progetto Gradle "ufficiale" in `android/` (NON ancora creato: mancano settings.gradle.kts, build.gradle.kts, wrapper; sorgenti già pronti) + workflow CI da scrivere.
- Test grafici: `web/tests/lib.mjs` (Chromium headless), `tests/shot.mjs <outdir> <rotta...>`, `tests/scroll.mjs`, `tests/anat.mjs`.
  ATTENZIONE: gradienti con alpha su pagine lunghe causano artefatti di raster in Chromium software → usare tinte piatte.
- Nessun emulatore Android disponibile: la shell Java (`MainActivity.java`) è revisionata ma NON eseguita su dispositivo.

## Architettura web (`web/src`)
- `core/`: router (hash + gestione tasto indietro Android `window.__psBack`), store (localStorage `ps:`), ui (sheet/modale/toast),
  data (registro entità + grafo collegamenti), text (markup `**b**`, `[[id|label]]`, termini glossario cliccabili), search (indice+refusi+sinonimi), schemas (sezioni per tipo), types (colori/icone), icons-color (icone home).
- `ui/`: home, entity (scheda generica: mappa collegamenti, sezioni, note locali, fonti/versione/revisione, avviso "verifica protocollo locale"), search, lists, notes, profile, anatomy (3D, lazy).
- `data/*.js`: contenuti. Ogni scheda: `{id,type,title,aliases,cat,spec,summary,sections:{...},rel:[ids],sources:[chiavi],rev,v}`.
  Tipi: anat, physio, patho, sign, term, exam, proc, tube, dev, drug, care, ndx, scale, calc, emerg, spec. Layout sezioni in `core/schemas.js`.
  Formato contenuti: stringa | array (bullet) | `{ol:[]}` `{ul:[]}` `{p}` `{note|warn|danger|ok}` `{table:{head,rows}}` `{kv}` `{svg:'figId'}`.
- `anatomy/`: scena Three.js procedurale (geo, shape, body-*.js, scene.js). Ogni mesh ha `ent` = id scheda anatomica; livelli: cute, scheletro, muscoli, cardiovascolare, vasi, nervoso, respiratorio, digerente, urinario, riproduttivo, endocrino, linfatico, organi.

## FATTO (aggiornato 2026-10-05, chat 2 – v1.1.0)
- Toolchain APK senza SDK + progetto Gradle + CI (`.github/workflows/build-apk.yml`, `feed.yml`). APK `dist/PuntoSalute-1.2.1.apk` (firma v2 verificata; **permesso INTERNET aggiunto solo per l'aggiornamento facoltativo delle fonti**).
- **Contenuti: 663 schede**, 0 link orfani, 0 errori di validazione: 110 anatomia, 17 fisiologia, 68 patologie (`pathologies.js`…`pathologies4.js`), 43 procedure (`procedures.js`…`procedures3.js`), 54 esami (`exams.js`, `exams2.js`), 38 farmaci (`drugs.js`, `drugs2.js`, senza posologie), 33 **schemi** (`schemi.js`), 17 scale, 10 calcolatori, 34 diagnosi infermieristiche, 7 assistenza, 12 dispositivi, 9 provette, 6 emergenze, 16 specialistiche, 174 termini.
- **Fonti aggiornate al 5/10/2026** (verificate sul web): ERC 2025, Surviving Sepsis Campaign 2026, AHA/ASA ictus 2026, GOLD 2026, GINA 2026, ADA 2026, ESC AF/HTN 2024 (HF 2021+2023, ACS 2023, EP 2019), CLSI PRE02 (ex GP41), NPIAP 4ª ed., NANDA-I 13ª ed. 2024–2026, INS 2024, UKKA iperkaliemia (rev. 2026), KDIGO AKI 2026 in bozza. Schede corrette di conseguenza (FA: CHA₂DS₂-VA; asma: ICS-formoterolo al bisogno; iperkaliemia: leganti moderni; sepsi; ictus; diabete CGM/AID; BLS 2025).
- **Sezione Schemi** (`/schemi`): flussi, mnemonici, cicli, mappe e tabelle (`viz/schemi.js`, `data/schemi.js`), collegati alle schede e alla ricerca.
- **Aggiornamento automatico di fonti E TESTO delle schede (v1.2.1)**: l'app (Profilo → "Aggiornamento automatico dei contenuti", attivo di default, solo lettura) scarica ogni giorno `feed.json` da `https://raw.githubusercontent.com/IMSLEPT/punto-salute-feed/main/feed.json` tramite il ponte nativo `fetchFeed` (solo https, host GitHub, max 2 MB). Il feed contiene fonti, novità, avvisi e **patch di testo** per le schede (`core/patches.js`: solo sezioni previste per il tipo, niente HTML, niente posologie nei farmaci, link solo a schede esistenti, fonte e URL obbligatori). Le patch si applicano all'avvio, la scheda mostra "Scheda aggiornata il… motivo, fonte, non rivisto da un clinico"; ripristino dal Profilo; kill switch (`disabled`) e `revoked`. Le patch si scrivono in `web/feed/patches/*.json`; `node tools/build-feed.mjs` le valida e genera `web/feed/feed.json`. **La routine mensile** (`trig_01TqktEsnKdLgcsXsdeGWSri`, il 1° alle 06:07 Europe/Rome) riverifica le fonti sul web, scrive patch/avvisi, esegue i test, fa commit e pubblica nel repo feed. **Manca**: creare il repo pubblico `IMSLEPT/punto-salute-feed` (l'integrazione GitHub non può creare repository: 403) e darvi accesso al Claude GitHub App; poi pubblicare `web/feed/feed.json` come `feed.json` su `main`. Finché non esiste il repo, l'app non trova nulla da scaricare.
- **Bug "Pagina non trovata" (v1.2.1)**: le schede del pannello anatomia (Posizione, Rapporti…) usavano `data-tab`, lo stesso attributo della barra in basso → il tocco navigava a `#undefined`. Corretto (`data-sec`, gestore limitato a `#tabbar`, `navigate()` ignora percorsi non validi). Test: `tests/anat-dock.mjs`, `tests/monkey.mjs`, `tests/links.mjs`.
- **Debug**: tasto Calcolatore della Home inattivo (stopPropagation) corretto; rotte sconosciute mostrano "Pagina non trovata" invece di tornare alla Home; errori JS non gestiti → avviso senza uscire; `onRenderProcessGone` (se la WebView muore l'app riparte invece di chiudersi); `[hidden]` globale (il selettore ♀/♂ era sempre visibile); chip dei livelli 3D e tabelle senza overflow. Crawler `web/tests/crawl.mjs` (clic su ogni elemento + overflow) e `anat-stress.mjs`.

## NON TESTATO
- Nessuna prova su dispositivo reale (nessun emulatore qui): installazione, tasto indietro, barre di sistema, fluidità 3D, fetch del feed dal ponte nativo (testato con ponte simulato).
- Il crash "torna alla Home" segnalato dall'utente non è stato riprodotto con certezza: cause trovate e corrette (rotta non registrata → Home, renderer WebView terminato). Se riaccade, annotare quale tasto.
- Contenuti clinici scritti in modo didattico e verificati dove possibile sul web, **non validati da un revisore clinico**.

## DA FARE (priorità)
1. Provare l'APK su telefono e segnalare i tasti problematici.
2. Abilitare GitHub Pages (o creare un repo pubblico per il feed) e verificare che l'URL del feed risponda.
3. Contenuti ancora da ampliare (richiesta "tutto sull'infermieristica"): più patologie (oncologia, pediatria, ostetricia, salute mentale: schizofrenia, bipolare…), farmaci (antibiotici per classe, antivirali, ormoni), assistenza specialistica (pediatrica, oncologica, palliativa, fine vita, terapia intensiva, salute mentale), temi legali/deontologici (Codice deontologico, L. 219/2017, L. 24/2017: verificare le versioni vigenti), più schemi, più quiz/casi, glossario. Scala Conley (non verificabile a memoria).
4. Rifiniture 3D, dark mode di nuove pagine, figure SVG mancanti (siti IM, Redon, stomie).
5. Chiave di firma di produzione (non committarla).

## Comandi
```
cd web && npm ci && node tools/validate.mjs && node build.mjs && node tests/e2e.mjs && node tests/feed.mjs
node tests/crawl.mjs [--noclick] [--all] [--w=360] [--fs=1.25]    # debug: clic su ogni elemento / overflow
node tests/anat-stress.mjs && node tests/anat-dock.mjs   # anatomia: stress e schede del pannello
node tests/links.mjs && node tests/tools-all.mjs && node tests/misc.mjs   # link interni, scale/calcolatori, ricerca/preferiti/note/provette/tema
node tests/monkey.mjs --steps=500 --seed=1   # percorsi casuali (rotte non valide, errori, 'Pagina non trovata')
node tools/build-feed.mjs                                           # rigenera web/feed/sources.json
cd .. && python3 tools/build_apk.py --out dist/PuntoSalute-1.1.0.apk && python3 -m apksigtool verify dist/PuntoSalute-1.1.0.apk
```

## Regole di contenuto (importanti)
Italiano; nessuna posologia nelle schede farmaci (solo classe/precauzioni/monitoraggio; dosi = prescrizione + RCP AIFA);
ogni scheda con fonti, versione, data revisione e avviso "verifica protocollo locale"; algoritmi emergenza = didattici;
non riprodurre testi protetti (NANDA-I/NIC/NOC, scale con copyright: parafrasare e segnalare licenza); mai dati reali di pazienti.
