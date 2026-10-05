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

## FATTO
Toolchain APK + shell; design system; router; ricerca; scheda generica; Home da mockup; Note/Profilo/Preferiti; anatomia 3D procedurale completa (tutti i sistemi, selezione, pannello info);
dati: `sources.js` (fonti), `anatomy.js`+`anatomy2.js` (~100 schede anatomiche), `physiology.js` (17), `pathologies.js` (20 patologie complete: iperkaliemia, ipokaliemia, iponatriemia, ipertensione, scompenso, IMA, FA, TVP, EP, BPCO, asma, polmonite, IR, pneumotorace, IRA, IRC, IVU, calcolosi, ritenzione, IPB).

## DA FARE (priorità)
1. **Modello 3D realistico (decisione presa)**: usare **BodyParts3D 4.0** (CC BY 4.0, © DBCLS) già scaricato/ottimizzato in `web/src/assets/anatomy/*.glb` (121k triangoli, 5 MB; script `web/tools/optimize-anatomy.mjs`; sorgente npm `@somakine/bodyparts3d-musculoskeletal`).
   Contiene SOLO ossa, muscoli, dischi, legamenti (niente organi/vasi/nervi: l'archivio originale è bloccato). Piano: caricare i GLB con `GLTFLoader` (lazy), mappare i nomi mesh → entità (es. `*-rib`→coste, `femur`→femore, `quadriceps`→muscolo-quadricipite, `biceps-brachii`, `deltoid`, `gluteus-*`→muscolo-gluteo, `external-oblique`→muscoli-obliqui, `erector-spinae`, `gastrocnemius|soleus`, `sternocleidomastoid`, `pectoralis-*`, `trapezius`… ; nomi nei GLB: `<regione><nome>isaFJxxxx[M]`), fondere per entità, usare materiali per entità; **rifare l'allineamento di organi/vasi/nervi/cute procedurali** allo scheletro reale con una trasformazione a tratti (y: livelli vertebrali C1,T1,T12,L1,L5,sacro,anca,ginocchio,caviglia; x: larghezza gabbia; z: asse colonna) e mappa per arti (spalla/gomito/polso, anca/ginocchio/caviglia) – vedi analisi in chat. Mancano nel dataset: sterno/cartilagini (tenere procedurale), retto addominale, gran dorsale. Aggiungere attribuzione CC BY 4.0 in Profilo → Fonti. Nuove schede anatomiche da creare: `muscoli-cuffia-rotatori`, `muscolo-dentato-anteriore`, `muscoli-romboidi`, `muscoli-erettori-spinali`, `muscolo-psoas-iliaco`, `muscoli-adduttori`, `muscoli-peronei-flessori`, `dischi-intervertebrali`, `tendine-d-achille`, `legamenti-e-membrane`.
2. Contenuti mancanti (file oggi vuoti `export default [];`): `pathologies2.js` (ictus, epilessia, meningite, Parkinson, demenza, diabete, ipoglicemia, DKA, ipo/ipertiroidismo, cirrosi, emorragia digestiva, pancreatite, appendicite, occlusione, colecistite, MRGE, anemia, sepsi, neutropenia febbrile, ICA, lesioni da pressione, frattura femore, osteoporosi, lombalgia, delirium, malnutrizione, depressione, preeclampsia, bronchiolite, epistassi, ustioni…), `procedures.js/procedures2.js` (≈35: igiene mani, parametri vitali, glicemia capillare, prelievo venoso/arterioso, emocoltura, PVC, PICC/CVC/midline/port, terapia EV/IM/SC, trasfusione, medicazioni, drenaggi, catetere vescicale, SNG, PEG, stomie, O₂, aerosol, aspirazione, tracheostomia, ECG, mobilizzazione), `devices.js`, `tubes.js` (+ pagina Provette grafica, ordine di prelievo CLSI GP41, configurazione protocollo locale), `exams.js`, `drugs.js` (classi, 10 G, high-alert), `care.js` + `ndx.js` (processo infermieristico, Henderson, Gordon, ~35 diagnosi infermieristiche con titoli INDICATIVI NANDA-I/NOC/NIC senza definizioni/codici/attività: materiale protetto) + costruttore di piano, `scales.js` (+ UI con punteggio: GCS, NEWS2, Braden, Barthel, Katz, Lawton, Tinetti, MUST, NRS/FLACC/PAINAD, RASS, 4AT, CPSS, qSOFA, Apgar), `calcs.js` (+ UI calcolatore con procedimento: dose, diluizione C1V1, mL/h, gtt/min, mg/kg, mcg/kg/min, % → mg/mL, conversioni, bilancio idrico, BMI/BSA), `emergencies.js` (ABCDE, BLS, anafilassi, sepsi, ictus, SCA, shock…), `specs.js` (25 specialità: hub), `terms.js` (≈220 termini: ematemesi, melena, ematuria, dispnea, ortopnea, edema, parestesia…).
3. UI mancanti (rotte non ancora registrate in `main.js`): `/assistenza`, `/assistenza/piano[...]`, `/provette`, `/farmaci`, `/calcolatore[/id]`, `/scale`, `/scala/:id`, `/glossario`, `/studio[...]` (quiz, flashcard SRS, casi "costruisci la diagnosi", simulazione esame), `/specialistiche`, `/spec/:id`, `/fonti`; figure SVG (`viz/`) per provette, PICC/CVC/port, catetere 2/3 vie, drenaggio toracico 3 camere, Redon/JP, stomie, ECG derivazioni.
4. `web/tools/validate.mjs`: controllo link/ID dangling (alcuni id citati nelle schede esistenti non esistono ancora; es. `drenaggio-toracico`, `nervo-radiale-info`, `cvc-gestione|CVC`).
5. Gradle `android/` + `.github/workflows/build-apk.yml` + README; test e2e (`tests/e2e.mjs`); APK finale in `dist/`.
6. Rifinire la Home vs mockup (confronto pixel): header, spaziature, icone tab, stetoscopio.

## Regole di contenuto (importanti)
Italiano; nessuna posologia nelle schede farmaci (solo classe/precauzioni/monitoraggio; dosi = prescrizione + RCP AIFA);
ogni scheda con fonti, versione, data revisione e avviso "verifica protocollo locale"; algoritmi emergenza = didattici;
non riprodurre testi protetti (NANDA-I/NIC/NOC, scale con copyright: parafrasare e segnalare licenza); mai dati reali di pazienti.
