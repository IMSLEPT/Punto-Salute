# Punto Salute

Manuale infermieristico digitale interattivo, **offline**, per Android (minSdk 24).
Guscio nativo Java con `WebView` + web app (JavaScript vanilla, esbuild, Three.js) inclusa negli asset: nessun permesso, nessuna rete, nessun dato inviato.

**Moduli:** ricerca universale · anatomia 3D · assistenza infermieristica (processo, Gordon, Henderson, diagnosi con titoli indicativi NANDA-I/NOC/NIC, costruttore di piano) · procedure · provette ed esami (ordine di prelievo, protocollo locale configurabile) · drenaggi, cateteri e dispositivi · patologie · specialistiche · ABCDE ed emergenze (didattiche) · farmacologia (senza posologie) · calcolatore con procedimento · terminologia · scale con punteggio automatico · modalità studio (quiz, flashcard, casi clinici, simulazione d’esame).
Ogni scheda riporta fonti, versione, data di revisione e l’avviso di verificare protocolli locali e fonti ufficiali.

## Build

```bash
cd web && npm ci
node tools/validate.mjs        # controlla link/ID, fonti, quiz, casi
node tests/e2e.mjs             # test end-to-end con Chromium headless (apre tutte le schede)
node build.mjs                 # genera android/app/src/main/assets/www
```

APK, due percorsi equivalenti:

1. **Gradle** (Android SDK + JDK 17): `cd android && gradle assembleRelease` → `android/app/build/outputs/apk/release/app-release.apk`
   (CI: `.github/workflows/build-apk.yml`).
2. **SDK-less** (solo JDK + Python, usa artefatti Maven Central/PyPI): `python3 tools/build_apk.py --out dist/PuntoSalute-1.0.0.apk`
   Verifica firma: `pip install apksigtool && python3 -m apksigtool verify dist/PuntoSalute-1.0.0.apk`.

La versione è in `VERSION` (versionCode = major·10000 + minor·100 + patch).

## Firma
`keystore/puntosalute.p12` (password `puntosalute`) è una chiave **di sviluppo** inclusa per comodità: serve per installare e aggiornare le build di prova.
**Per pubblicare** genera una chiave privata e passala via variabili d’ambiente (`PS_KEYSTORE`, `PS_KEYSTORE_PASSWORD`, `PS_KEY_ALIAS`, `PS_KEY_PASSWORD`) senza committarla.

## Struttura
- `android/` guscio nativo (`MainActivity` serve `assets/www` su `https://appassets.androidplatform.net`, blocca ogni altro host).
- `web/src/data/` contenuti (schede con `id, type, title, aliases, summary, sections, rel, sources, rev, v`); `core/` router, ricerca, grafo dei collegamenti; `ui/` pagine; `anatomy/` scena 3D; `viz/` figure SVG.
- `branding/` tavola di riferimento, logo e icone originali.
- `HANDOFF.md` stato dei lavori e prossimi passi.

## Licenze e attribuzioni
- Modelli 3D di scheletro, muscoli, dischi e legamenti: **BodyParts3D 4.0 © DBCLS, CC BY 4.0** (semplificati/ottimizzati); organi, vasi, nervi e cute: realizzati ex novo.
- Three.js (MIT), Lucide (ISC), Inter (SIL OFL 1.1).
- NANDA-I, NIC e NOC sono materiale protetto: l’app riporta solo titoli indicativi. Le scale di valutazione sono parafrasate: verificare licenze e versioni ufficiali.

Strumento didattico e di consultazione: non sostituisce linee guida, protocolli aziendali, prescrizioni né giudizio clinico.
