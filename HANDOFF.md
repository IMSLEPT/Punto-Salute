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
- Toolchain APK senza SDK + progetto Gradle + CI (`.github/workflows/build-apk.yml`, `feed.yml`). APK `dist/PuntoSalute-1.2.3.apk` (firma v2 verificata; **permesso INTERNET aggiunto solo per l'aggiornamento facoltativo delle fonti**).
- **Contenuti: 663 schede**, 0 link orfani, 0 errori di validazione: 110 anatomia, 17 fisiologia, 68 patologie (`pathologies.js`…`pathologies4.js`), 43 procedure (`procedures.js`…`procedures3.js`), 54 esami (`exams.js`, `exams2.js`), 38 farmaci (`drugs.js`, `drugs2.js`, senza posologie), 33 **schemi** (`schemi.js`), 17 scale, 10 calcolatori, 34 diagnosi infermieristiche, 7 assistenza, 12 dispositivi, 9 provette, 6 emergenze, 16 specialistiche, 174 termini.
- **Fonti aggiornate al 5/10/2026** (verificate sul web): ERC 2025, Surviving Sepsis Campaign 2026, AHA/ASA ictus 2026, GOLD 2026, GINA 2026, ADA 2026, ESC AF/HTN 2024 (HF 2021+2023, ACS 2023, EP 2019), CLSI PRE02 (ex GP41), NPIAP 4ª ed., NANDA-I 13ª ed. 2024–2026, INS 2024, UKKA iperkaliemia (rev. 2026), KDIGO AKI 2026 in bozza. Schede corrette di conseguenza (FA: CHA₂DS₂-VA; asma: ICS-formoterolo al bisogno; iperkaliemia: leganti moderni; sepsi; ictus; diabete CGM/AID; BLS 2025).
- **Sezione Schemi** (`/schemi`): flussi, mnemonici, cicli, mappe e tabelle (`viz/schemi.js`, `data/schemi.js`), collegati alle schede e alla ricerca.
- **Aggiornamento automatico di fonti E TESTO delle schede (v1.2.2)**: l'app (Profilo → "Aggiornamento automatico dei contenuti", attivo di default, solo lettura) scarica ogni giorno `feed.json` da `https://raw.githubusercontent.com/IMSLEPT/punto-salute-feed/main/feed.json` tramite il ponte nativo `fetchFeed` (solo https, host GitHub, max 2 MB). Il feed contiene fonti, novità, avvisi e **patch di testo** per le schede (`core/patches.js`: solo sezioni previste per il tipo, niente HTML, niente posologie nei farmaci, link solo a schede esistenti, fonte e URL obbligatori). Le patch si applicano all'avvio, la scheda mostra "Scheda aggiornata il… motivo, fonte, non rivisto da un clinico"; ripristino dal Profilo; kill switch (`disabled`) e `revoked`. Le patch si scrivono in `web/feed/patches/*.json`; `node tools/build-feed.mjs` le valida e genera `web/feed/feed.json`. **La routine mensile** (`trig_01TqktEsnKdLgcsXsdeGWSri`, il 1° alle 06:07 Europe/Rome) riverifica le fonti sul web, scrive patch/avvisi, esegue i test, fa commit e pubblica nel repo feed. Il repo pubblico `IMSLEPT/punto-salute-feed` esiste (creato dall'utente) e `feed.json` è pubblicato su `main` (2026-10-05, raw URL verificato 200). Dopo ogni modifica a `web/feed/` rigenerare con `node tools/build-feed.mjs` e ripubblicare `feed.json` lì.
- **Bug "Pagina non trovata" (v1.2.2)**: le schede del pannello anatomia (Posizione, Rapporti…) usavano `data-tab`, lo stesso attributo della barra in basso → il tocco navigava a `#undefined`. Corretto (`data-sec`, gestore limitato a `#tabbar`, `navigate()` ignora percorsi non validi). Test: `tests/anat-dock.mjs`, `tests/monkey.mjs`, `tests/links.mjs`.
- **Splash (v1.2.2)**: la splash nativa (sfondo bianco + logo, `drawable/splash`) resta sopra la WebView fino a `PuntoSalute.appReady()` (chiamato quando la Home è renderizzata; rete di sicurezza 6 s), poi sfuma; `#boot` web ora è bianco con lo stesso logo. Barra di avanzamento di "Continua a studiare": conflitto di classe `.bar` risolto (`.qbar` per lo studio).
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

- **Splash (v1.2.3)**: su Android 12+ la splash di sistema usava l'icona del launcher (anche la versione monocromatica/tematizzata su sfondo scuro) e poi cambiava nella splash dell'app con un logo di dimensione diversa. Ora il tema `values-v31`/`values-night-v31` imposta `windowSplashScreenBackground` bianco e `windowSplashScreenAnimatedIcon=@drawable/splash_icon` (logo dentro il cerchio centrale 2/3 di una tela 288dp); `drawable/splash` usa la stessa immagine e la stessa dimensione; `MainActivity` toglie la splash di sistema senza animazione di uscita (`setOnExitAnimationListener → remove()`), così il logo resta fino a `appReady()`. NON provato su dispositivo reale (nessun emulatore qui): verificare su Pixel. `branding/make_assets.py` genera `splash_icon.png`.
- **v1.2.4**: l'utente segnala che splash e barra "non sono cambiati" anche dopo 1.2.3. Possibile causa: asset web vecchi riusati. Ora: `LOAD_NO_CACHE`, `Cache-Control: no-store`, `clearCache(true)` a ogni cambio versione (SharedPreferences `ps/webVersion`), `?v=VERSION` su index/app.css/app.js (build.mjs), versione visibile in fondo alla Home per verificare cosa è installato. `APP_VERSION` in MainActivity va allineata a `VERSION`.
- **v1.2.5**: pannello Anatomia 3D a 3 posizioni (abbassato / normale / esteso): tocco sulla maniglia = abbassa/riapri, trascinamento su/giù = cambia posizione; abbassato resta solo la maniglia (46px) e il modello occupa tutto lo spazio. Il pannello non scorre più in orizzontale (`overflow-x:hidden`, causava testo tagliato a sinistra). Test `tests/anat-collapse.mjs`.

## v1.3.0 – Studio kit, Assistente, Casi clinici generati (2026-10-05)
- **Kit di studio** (`web/src/kit/`): da OGNI scheda (e dall'organo selezionato in Anatomia 3D) i bottoni *Riassumi / Mappa concettuale / Schema* aprono `/genera/:id?k=…`. Tutto offline e deterministico (seme): `digest.js` estrae sezioni/idee dalle schede, `summary.js` (4 stili, linguaggio semplice, parole chiave dal glossario, domande d'esame), `map.js` (mappa mentale a due lati, albero, mappa con frasi di collegamento), `scheme.js` (3 stili, figura della scheda o istantanea 3D, "da ricordare"), `pdf.js` (PDF scritto a mano: Helvetica/Symbol, larghezze AFM, riquadri, JPEG; nessuna libreria), `export.js` (SVG→PNG/JPEG, salvataggio). "Nuova versione" cambia stile+seme, "Ricrea" cambia solo il seme. PNG e PDF si salvano in Download/Punto Salute tramite il ponte nativo `saveFile` (MediaStore, API ≥ 29; sotto: cartella dell'app) con opzione Condividi. Test: `tests/kit.mjs` (6630 documenti, tutti gli stili su tutte le schede), `tests/kit-ui.mjs`.
- **Assistente** (`web/src/ai/`, UI `ui/assistant.js`, route `/assistente`, tile in Home): motore *a fonti* offline (`assistant.js`: riconoscimento argomento/intento, follow-up, confronti, azioni: aprire schede/strumenti, riassunti/mappe/schemi, quiz, preferiti, note, 3D, calcolo mL/h e BMI con passaggi, casi clinici, ricerca). Non risponde a memoria; niente posologie (avviso + calcolatore); avviso 112 per emergenze. **AI open source facoltativa** (`llm.js`): servizio compatibile OpenAI, default OpenRouter `openrouter/free` + elenco modelli gratuiti (`/models`), chiave personale, OFF di default; prompt con regole e fonti [S#]/[W#]; risposta ripulita (tag `<think>`, HTML, citazioni inesistenti, frasi con dosaggi sostituite). **Ricerca web** (`websearch.js`): Wikipedia it + PubMed (E-utilities), senza chiave. Rete solo via ponte nativo `PuntoSalute.http(id, json)` (https, host pubblici, no IP/localhost, no redirect, ≤2 MB) → `window.__psHttp`. Impostazioni in Profilo (`ui/aisettings.js`). NON verificato con servizi reali (la rete qui è bloccata): provato con un servizio simulato in `tests/assistant.mjs`.
- **Casi clinici** (`ui/cases.js`, `core/casegen.js`): oltre ai 6 fissi, generazione di casi da patologie/procedure/farmaci (149 schede idonee; opzioni errate prese da altre schede e scartate se il contenuto è già nella scheda del caso). Storico (ultimi 5 tentativi, con snapshot delle opzioni mostrate) → **Rivedi**, **Rifai**, **Rifai solo gli errori**, **Nuovo caso simile/diverso**, elimina (max 40 generati). Chiavi `caseHist` (+ `cases` per compatibilità). Test: `tests/cases.mjs`.
- Correzioni: marcatori `[[id]]` dentro **grassetto** apparivano grezzi nelle schede (rt ora annida); gara tra rotte asincrone (la rotta lenta sovrascriveva la nuova: `STALE`); spaziatura sotto i riquadri di feedback (quiz, flashcard); `.genpage` vs `.gen`.
- Test nuovi da lanciare: `node tests/kit.mjs && node tests/kit-ui.mjs && node tests/assistant.mjs && node tests/cases.mjs`.
- **Infografiche illustrate** (`kit/infographic.js`, `kit/picto.js`, `kit/illus.js`): 4ª scheda della pagina Genera. 3 impaginazioni (colonne / griglia / figura al centro), 3 temi, pittogrammi per voce (regole su parole chiave → icone Lucide), figura SVG della scheda o istantanea 3D scelta, e **organi reali dai modelli 3D** (BodyParts3D CC BY 4.0): `scene.portrait()` rende fuori schermo PNG trasparenti degli organi collegati (`anatomyOf`: anat con `mesh` in `rel`/vicini) e una vista "Dove" nel corpo; scarta strutture sottili (vasi/nervi) per copertura < 8,5%. Nessuna immagine generata da AI: testi e immagini derivano dalle schede/modelli (scelta voluta per l'affidabilità clinica; un'eventuale generazione AI online sarebbe separata e marcata come non verificata). Test: `tests/kit.mjs` (tutte le schede × 3 stili), `tests/kit-ui.mjs`.
- `PS_OUT=/tmp/x node build.mjs` costruisce in un'altra cartella (utile per provare mentre girano altri test su `www`).

## v1.4.0 – Ampliamento contenuti e debug (2026-10-06)
- Schede: 663 → **874**. Nuovi file dati: `pathologies5..11.js` (IST, infettive, cardio, respiratorie, neuro, endocrine, GI, rene, ematologia,
  oncologia, pediatria, ostetricia/ginecologia, salute mentale/dipendenze, geriatria, cute, traumi/ambiente, occhio, reumatologia),
  `drugs3.js` (antivirali, PrEP/PEP, antimicotici/antiparassitari, antitubercolari, trombolitici, amine, antidoti, contraccettivi…),
  `procedures4.js`, `care2.js` (Codice deontologico FNOPI 2025, profilo e normativa, L. 24/2017 + DDL riforma in esame, L. 219/2017,
  privacy, contenzione, TSO, rischio clinico, sicurezza operatore, isolamento, calendario vaccinale PNPV prorogato al 31/12/2026,
  contraccezione, DM 77/2022, cure palliative), `emergencies2.js`, `exams3.js`, `scales3.js` (15 scale), `terms2.js`, `schemi2.js`.
- Specialità nuove: ginecologia-ostetricia, pediatria, oncologia, psichiatria. Fonti: 103 chiavi.
- Fix: ricerca (il token originale resta alternativo alla correzione refusi); export PDF/PNG in /genera usa una copia locale del
  documento (prima un cambio di tipo durante l'attesa passava una mappa a summaryToPdf → TypeError) e rigenera se si cambia tipo durante una generazione.
- Feed rigenerato (`web/feed/feed.json`, appVersion 1.4.0, novità "v14"): va ripubblicato nel repo del feed (non accessibile da questa sessione).

## v1.5.0 – Sezione Università e aggiornamenti verificati (2026-10-06)
- Schede: 874 → **951**; quiz scritti a mano 59 → **247** (`quizbank2.js`, registrato in `ui/studio.js` e `tools/validate.mjs`); scale 32 → 37.
- Nuovi file dati: `basics.js` (scienze di base e fisiologia), `human.js` (scienze umane, etica, diritto, management, SSN, igiene, microbiologia, patologia generale,
  EBP, inglese, informatica, terminologia, sigle, farmacologia generale, nutrizione, violenza), `university.js` (percorso di laurea, mappe anno 1/2/3, tirocinio,
  prova finale, dopo la laurea), `clinical3.js` (ventilazione, terapia intensiva, anestesia, monitoraggio emodinamico, ECG, trapianti, ECMO, esame obiettivo, calcoli, neonato, distocia di spalla, vertigini),
  `pathologies12.js`, `scales4.js` (NIHSS, Aldrete, CURB-65, GDS-15, Mini-Cog).
- UI: nuova pagina `/universita` (`ui/universita.js`) con tile in Home; la ricerca tiene il token originale oltre alla correzione dei refusi.
- **Aggiornamento dei contenuti**: il piano di studi ufficiale UniFI (www.infermieristica.unifi.it) NON è raggiungibile dalla sessione (egress bloccato): la mappa segue la classe L/SNT1 e va
  confrontata con il Manifesto degli studi. Il feed è controllato dall'app a ogni apertura (max ogni 6 ore); la routine di Claude Code è ora **settimanale** (lunedì ~06:17 Roma),
  cerca novità degli ultimi 7-10 giorni e **ripubblica il feed** su IMSLEPT/punto-salute-feed (raggiungibile con add_repo, access push).
- Novità verificate il 6/10/2026 (come avvisi nel feed, testo schede da rivedere): ESC 2026 scompenso cardiaco (28/8/2026) e Quinta Definizione Universale di infarto; OMS doxy-PEP (05/2026);
  PNPV prorogato al 31/12/2026 e PNP 2026–2031 (05/2026); DDL responsabilità professionale approvato dalla Camera il 28/1/2026, ora al Senato.
- `tests/crawl.mjs`: su `/e/percorso-laurea` segnala "rotta-diversa" perché fa `.click()` su link dentro sezioni chiuse; con clic reali (Playwright) i link funzionano: artefatto del crawler.
