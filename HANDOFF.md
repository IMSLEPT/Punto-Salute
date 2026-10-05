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

## FATTO (aggiornato 2026-10-05, chat 2)
- Toolchain APK senza SDK + progetto **Gradle** (`android/settings|build.gradle.kts`, `app/build.gradle.kts`; wrapper jar assente: la CI usa `gradle/actions/setup-gradle` 8.7) + workflow `.github/workflows/build-apk.yml` (job Gradle e job SDK-less). Versione unica in `VERSION`.
- APK `dist/PuntoSalute-1.0.0.apk` (3,5 MB, firma v2 verificata con apksigtool, minSdk 24/targetSdk 34, versionCode 10000). `dist/` è in .gitignore.
- Anatomia 3D: BodyParts3D 4.0 (CC BY 4.0) + organi/vasi/nervi/cute procedurali adattati (`anatomy/fit.js`).
- **Contenuti (555 schede, 0 link orfani, 0 errori di validazione)**: 110 anatomia, 17 fisiologia, 51 patologie (`pathologies.js`, `pathologies2.js`, `pathologies3.js`), 27 procedure (`procedures.js`, `procedures2.js`), 12 dispositivi, 9 provette, 27 esami, 23 farmaci (`drugs.js`, senza posologie), 17 scale (`scales.js`, `scales2.js`: + 4AT, PAINAD, RASS, Lawton, Apgar, Morse, Tinetti), 10 calcolatori, 34 diagnosi infermieristiche (titoli indicativi), 7 schede assistenza (incl. Gordon e Henderson), 6 emergenze (incl. SCA), 16 specialistiche, 174 termini/segni (`terms.js`, `glossary.js`, parte di `extras.js`). `data/figmap.js` associa le figure SVG alle schede.
- **UI**: assistenza + costruttore di piano (`ui/assistenza.js`: accertamento, Gordon, diagnosi dall'elenco con suggerimenti, obiettivi, interventi, rivalutazione, condivisione testo, salvataggio locale), modalità studio (`ui/studio.js`: 59 quiz scritti a mano in `data/quizbank.js` + ~330 generati dalle schede, flashcard con Leitner, 6 casi clinici in `data/cases.js`, simulazione d'esame 20 domande/20 min), glossario A–Z, pagina specialità, Fonti e licenze (`ui/more.js`), figure SVG (`viz/devices.js`: Foley, drenaggio toracico 3 camere, PICC/CVC/port, elettrodi ECG, misura SNG; `viz/tubes.js`).
- Bug corretto: i listener registrati sul contenitore `#view` si accumulavano tra una rotta e l'altra (reset in `main.js`).
- Strumenti: `web/tools/validate.mjs` (ID duplicati/orfani, fonti, quiz, casi, entità 3D), `web/tests/e2e.mjs` (apre tutte le 555 schede e le rotte, prova ricerca, piano, quiz, esame, flashcard, caso, termine, calcolatore: tutto verde in Chromium headless).

## NON TESTATO
- La shell Java (`MainActivity`) e l'APK NON sono mai stati eseguiti su dispositivo/emulatore (nessuno disponibile qui). Il progetto Gradle non è stato compilato (SDK non scaricabile qui): verificare con la CI.
- Prestazioni 3D su telefoni reali; rendering in dark mode di nuove pagine/figure solo parzialmente controllato.
- Contenuti clinici scritti in modo didattico e rivisti per coerenza, **non** validati da un revisore clinico: da far rivedere prima di un uso reale.

## DA FARE (priorità)
1. Provare l'APK su un telefono e correggere ciò che emerge (installazione, back, barre di sistema, 3D, ricerca).
2. Scala **Conley** (richiesta dall'utente): non inclusa perché gli item non sono verificabili a memoria; aggiungere solo da fonte ufficiale/licenza. Altre scale da valutare: Glasgow pediatrico, Ramsay, Waterlow (licenza).
3. Contenuti da ampliare: altre patologie (ICA come patologia è ok; mancano es. anemia falciforme, tumori comuni, ustioni, epistassi, pneumotorace iperteso come emergenza, depressione, trauma cranico), altri farmaci (antiaritmici, digossina, antipsicotici, antiepilettici, vaccini), altre procedure (clisma, lavanda gastrica, ossigeno ad alti flussi, ventilazione NIV, sutura/rimozione punti, lavaggio vescicale, urostomia/stomie dettaglio), più quiz/casi.
4. Figure SVG mancanti: Redon/JP, stomie, siti di iniezione IM, PICC dettaglio, catetere ad ago di Huber.
5. Rifiniture 3D (sterno un po' pesante, rapporto semplificazione obliqui, etichette) e dark mode delle nuove pagine.
6. Chiave di firma di produzione (non committarla) e pubblicazione.

## Comandi
```
cd web && npm ci && node tools/validate.mjs && node build.mjs && node tests/e2e.mjs
cd .. && python3 tools/build_apk.py --out dist/PuntoSalute-1.0.0.apk && python3 -m apksigtool verify dist/PuntoSalute-1.0.0.apk
node web/tests/shot.mjs /tmp/shots /rotta ...     # screenshot Chromium headless
```

## Regole di contenuto (importanti)
Italiano; nessuna posologia nelle schede farmaci (solo classe/precauzioni/monitoraggio; dosi = prescrizione + RCP AIFA);
ogni scheda con fonti, versione, data revisione e avviso "verifica protocollo locale"; algoritmi emergenza = didattici;
non riprodurre testi protetti (NANDA-I/NIC/NOC, scale con copyright: parafrasare e segnalare licenza); mai dati reali di pazienti.
