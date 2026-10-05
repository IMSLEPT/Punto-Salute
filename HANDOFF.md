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

## FATTO (aggiornato 2026-10-05, fine contesto chat 1)
- Toolchain APK senza SDK + shell WebView; design system; router; ricerca (refusi/sinonimi); scheda generica con mappa "Collegamenti clinici"; Home da mockup; Note/Profilo/Preferiti.
- **3D realistico**: BodyParts3D 4.0 (CC BY 4.0, © DBCLS) per scheletro/muscoli/dischi/legamenti (`anatomy/real.js`), organi/vasi/nervi/cute procedurali adattati con `anatomy/fit.js`, sterno procedurale (`body-sternum.js`). Verificato con screenshot Chromium headless (scheletro+organi, muscoli).
- **Dati** (`web/src/data`): sources, anatomy(1-3, ~110 schede), physiology(17), pathologies(20)+pathologies2(8: ictus, diabete, ipoglicemia, DKA, sepsi, lesioni da pressione, emorragia digestiva, cirrosi), procedures(10), devices(12), tubes(9+emocolture), exams(~26), terms(~18), scales(10: GCS, NEWS2, Braden, Barthel, Katz, MUST, NRS/VAS, FLACC, qSOFA, CPSS), calcs(10), ndx(~28, titoli indicativi), care(5), emergencies(5), specs(16).
- **UI**: `ui/tools.js` (scale con punteggio automatico, NEWS2 dedicata, calcolatori con procedimento), `ui/tubes.js` (rack provette, ordine di prelievo, protocollo locale configurabile), `viz/tubes.js`. Rotte registrate in `main.js`: `/ /pratica /clinica /preferiti /note /profilo /impostazioni /anatomia /provette /scale /scala/:id /calcolatore[/:id] /e/:id /patologie /procedure /dispositivi /emergenze`.
- Ultimo `node build.mjs`: OK (6238 KB). Ultimo APK di prova (`/tmp/ps-test.apk`) PRIMA degli ultimi moduli dati: firma v2 verificata con apksigtool.

## NON TESTATO
- La shell Java NON è mai stata eseguita su dispositivo/emulatore (nessun emulatore qui).
- Nessun test e2e dei nuovi moduli (tools/tubes) oltre al build; nessun validatore link.
- Home non ancora confrontata pixel-per-pixel col mockup.

## DA FARE (priorità)
1. **Validatore** `web/tools/validate.mjs`: id dangling in `rel` e `[[id|label]]` (noti: `drenaggio-toracico`, `nervo-radiale-info`, `cvc-gestione|CVC`, `terapia-im`, `terapia-sc`, `medicazione-ferita`, `ecg-esecuzione`, `prelievo-arterioso`, `glicemia-capillare`, `sng-posizionamento`, `nutrizione-enterale`, `aspirazione-secrezioni`, `cateterismo-intermittente`, `trasfusione`, `anticoagulanti`, `insulina`, `diuretici`…) + ogni mesh 3D con scheda anatomica.
2. Contenuti vuoti: `data/procedures2.js` (IM/SC, medicazioni, prelievo arterioso, ECG, SNG, PEG, stomie, aspirazione, trasfusione, mobilizzazione, aerosol, glicemia capillare…), `data/drugs.js` (classi, 10 G, high-alert, NIENTE posologie). Altre patologie (epilessia, meningite, Parkinson, demenza, tiroide, pancreatite, appendicite, occlusione, colecistite, MRGE, anemia, neutropenia febbrile, ICA, frattura femore, osteoporosi, lombalgia, delirium, malnutrizione, depressione, preeclampsia, bronchiolite, epistassi, ustioni), altre scale (Tinetti, Lawton, RASS, 4AT, Apgar, PAINAD, Conley: solo se affidabili + nota licenza), glossario a ~220 termini.
3. UI mancanti: `/assistenza` (hub + costruttore di piano Accertamento→dati→problema→diagnosi→NOC→NIC→rivalutazione, salvato in locale), `/farmaci`, `/glossario` A–Z, `/studio` (quiz, flashcard SRS, casi "costruisci la diagnosi", simulazione esame), `/specialistiche`, `/spec/:id`, `/fonti` (attribuzioni: BodyParts3D CC BY 4.0, Lucide ISC, Inter OFL). Figure SVG: PICC/CVC/port, catetere 2/3 vie, drenaggio toracico 3 camere, Redon/JP, stomie, derivazioni ECG.
4. Gradle `android/` (settings/build.gradle.kts/wrapper) + `.github/workflows/build-apk.yml` + README; e2e; APK finale: `cd web && node build.mjs && cd .. && python3 tools/build_apk.py --out dist/PuntoSalute-1.0.0.apk` (verifica: `python3 -m apksigtool verify`).
5. Rifinitura 3D (sterno un po' pesante, rapporto semplificazione obliqui 0.035, etichette) e Home vs mockup.

## Attenzione
- `keystore/puntosalute.p12` è una chiave di SVILUPPO committata (pw `puntosalute`): per la pubblicazione generarne una privata e NON committarla.

## Regole di contenuto (importanti)
Italiano; nessuna posologia nelle schede farmaci (solo classe/precauzioni/monitoraggio; dosi = prescrizione + RCP AIFA);
ogni scheda con fonti, versione, data revisione e avviso "verifica protocollo locale"; algoritmi emergenza = didattici;
non riprodurre testi protetti (NANDA-I/NIC/NOC, scale con copyright: parafrasare e segnalare licenza); mai dati reali di pazienti.
