// Fisiologia: concetti ponte tra anatomia, patologia e assistenza.
const P = (id, title, aliases, summary, sections, rel = [], extra = {}) => ({
  id, type: 'physio', title, aliases, summary, sections, rel, cat: extra.cat || 'Fisiologia', sources: ['textbooks'], rev: '2026-10', v: '1.0', verify: false, ...extra,
});

export default [
  P('omeostasi-potassio', 'Omeostasi del potassio', ['regolazione del potassio', 'potassiemia', 'K+'],
    'Il potassio è il principale catione intracellulare: la sua concentrazione plasmatica (circa 3,5–5,0 mmol/L) è mantenuta da rene, aldosterone, insulina e equilibrio acido-base.',
    {
      conc: 'Circa il 98% del potassio è dentro le cellule (concentrazione 140 mmol/L), il resto nel liquido extracellulare. Il rapporto tra le due concentrazioni determina il **potenziale di membrana a riposo**: da qui la sensibilità di cuore e muscoli alle variazioni.',
      mecc: ['La pompa Na⁺/K⁺-ATPasi porta potassio dentro le cellule.', '**Insulina** e **agonisti β2-adrenergici** favoriscono l’ingresso di potassio nelle cellule; l’**acidosi** lo sposta fuori.', 'Il rene elimina circa il 90% del potassio assunto: nel tubulo distale e dotto collettore l’**aldosterone** aumenta la secrezione di K⁺.'],
      reg: ['Aldosterone ↑ → perdita di K⁺ (e ritenzione di Na⁺).', 'Iperpotassiemia stimola direttamente la secrezione di aldosterone.', 'Diuretici dell’ansa e tiazidici → perdita di K⁺; risparmiatori di potassio e ACE-inibitori → ritenzione.'],
      val: { table: { head: ['Parametro', 'Intervallo indicativo'], rows: [['Potassio sierico', '3,5–5,0 mmol/L (varia per laboratorio)'], ['Ipokaliemia', '< 3,5 mmol/L'], ['Iperkaliemia lieve/moderata/grave', 'circa 5,5–6,0 / 6,0–6,5 / > 6,5 mmol/L (le soglie variano nelle linee guida)']] } },
      alt: ['Ipokaliemia: debolezza, crampi, aritmie, ileo.', '[[iperkaliemia]]: debolezza, parestesie, alterazioni ECG (onde T alte, QRS largo), arresto cardiaco.', 'Emolisi del campione = falsa iperkaliemia (errore preanalitico).'],
      inf: ['Prima di somministrare KCl verifica prescrizione, diluizione e velocità: è un farmaco ad alto rischio.', 'Nei pazienti con insufficienza renale evita integratori e controlla ACE-inibitori, sartani, risparmiatori di potassio.'],
    }, ['rene', 'surrene', 'iperkaliemia', 'ipokaliemia', 'potassio', 'ecg', 'cuore', 'equilibrio-acido-base', 'insulina', 'potassio-cloruro'], {}),

  P('equilibrio-acido-base', 'Equilibrio acido-base', ['pH ematico', 'acidosi', 'alcalosi', 'EGA interpretazione'],
    'Il pH arterioso è mantenuto in modo stretto (7,35–7,45) da tamponi, polmoni (CO₂) e reni (bicarbonato).',
    {
      conc: 'La relazione di Henderson-Hasselbalch lega il pH al rapporto tra bicarbonato (HCO₃⁻, regolato dal rene) e PaCO₂ (regolata dal polmone).',
      mecc: ['Tamponi chimici: immediati (bicarbonato, proteine, fosfati).', 'Polmoni: in minuti, variano la ventilazione per eliminare CO₂.', 'Reni: in ore-giorni, escrezione di H⁺ e riassorbimento di bicarbonato.'],
      reg: 'Acidosi respiratoria: pH ↓, PaCO₂ ↑ (ipoventilazione). Alcalosi respiratoria: pH ↑, PaCO₂ ↓ (iperventilazione). Acidosi metabolica: pH ↓, HCO₃⁻ ↓. Alcalosi metabolica: pH ↑, HCO₃⁻ ↑.',
      val: { table: { head: ['Parametro', 'Valore indicativo (sangue arterioso)'], rows: [['pH', '7,35–7,45'], ['PaCO₂', '35–45 mmHg'], ['PaO₂', '80–100 mmHg (aria ambiente, adulto giovane)'], ['HCO₃⁻', '22–26 mmol/L'], ['Eccesso di basi', 'circa ±2 mmol/L'], ['Lattati', '< 2 mmol/L']] } },
      alt: ['[[chetoacidosi-diabetica]]: acidosi metabolica con respiro di Kussmaul.', '[[bpco]] riacutizzata: acidosi respiratoria da ritenzione di CO₂.', 'Insufficienza renale: acidosi metabolica; vomito/aspirazione gastrica: alcalosi metabolica.', 'L’acidosi sposta il potassio fuori dalle cellule (aumenta la kaliemia).'],
      inf: ['Prelievo arterioso: siringa eparinata, eliminare le bolle d’aria, trasporto immediato; segnala FiO₂ e temperatura.', 'Associa il referto a sintomi, parametri e storia del paziente.'],
    }, ['emogasanalisi', 'bpco', 'chetoacidosi-diabetica', 'omeostasi-potassio', 'scambi-gassosi', 'prelievo-arterioso'], {}),

  P('scambi-gassosi', 'Scambi gassosi e trasporto dell’ossigeno', ['diffusione alveolo-capillare', 'ossigenazione', 'saturazione'],
    'Ossigeno e anidride carbonica attraversano la membrana alveolo-capillare per diffusione; l’emoglobina trasporta l’ossigeno.',
    {
      conc: 'La ventilazione porta aria agli alveoli; la perfusione porta sangue ai capillari: l’efficienza dipende dal rapporto **ventilazione/perfusione (V/Q)**.',
      mecc: ['Diffusione secondo il gradiente di pressione parziale: O₂ entra, CO₂ esce.', 'Circa il 98% dell’O₂ è legato all’emoglobina (saturazione); la quota disciolta è piccola.', 'La curva di dissociazione dell’emoglobina si sposta con pH, CO₂, temperatura e 2,3-DPG.'],
      reg: 'Chemocettori centrali e periferici regolano la ventilazione in base a PaCO₂, pH e PaO₂.',
      val: { table: { head: ['Parametro', 'Valore indicativo'], rows: [['SpO₂ a riposo', '≥ 94–95% in adulti sani (obiettivo 94–98% in acuto, 88–92% se a rischio di ipercapnia)'], ['PaO₂', '80–100 mmHg'], ['Emoglobina uomo/donna', 'circa 13–17 / 12–16 g/dL']] } },
      alt: ['Ipossiemia da V/Q alterato ([[polmonite]], [[embolia-polmonare]], atelettasia), shunt, ipoventilazione.', 'Pulsossimetria inaffidabile con scarsa perfusione, smalto scuro, movimenti, anemia grave, intossicazione da monossido di carbonio.'],
      inf: ['Obiettivo di saturazione individualizzato: 94–98% nella maggior parte, 88–92% nei pazienti a rischio di ipercapnia (es. [[bpco]]).', 'Osserva il lavoro respiratorio: non solo il numero.'],
    }, ['polmone-destro', 'bpco', 'polmonite', 'embolia-polmonare', 'ossigenoterapia', 'emogasanalisi', 'dispnea', 'equilibrio-acido-base', 'saturazione-spo2'], {}),

  P('meccanica-respiratoria', 'Meccanica respiratoria', ['ventilazione', 'compliance polmonare', 'spirometria'],
    'Gli atti respiratori sono generati dalla contrazione del diaframma e dei muscoli intercostali; la compliance e le resistenze determinano il lavoro respiratorio.',
    {
      conc: 'L’inspirazione è attiva (diaframma, intercostali esterni); l’espirazione a riposo è passiva per il ritorno elastico del polmone. La pressione intrapleurica è negativa.',
      mecc: ['Compliance: variazione di volume per variazione di pressione (ridotta in fibrosi, edema, atelettasia).', 'Resistenza delle vie aeree: aumenta nell’asma e nella [[bpco]] (ostruzione al flusso).', 'Il surfattante riduce la tensione superficiale e previene il collasso alveolare.'],
      reg: 'Centri respiratori nel tronco; frequenza respiratoria a riposo 12–20 atti/min nell’adulto.',
      val: { table: { head: ['Volume (adulto)', 'Valore indicativo'], rows: [['Volume corrente', '~ 500 mL (6–8 mL/kg)'], ['Capacità vitale', '~ 4–5 L'], ['Volume residuo', '~ 1–1,5 L'], ['FEV₁/FVC', '> 0,70 in assenza di ostruzione']] } },
      alt: ['Ostruttive: FEV₁/FVC ridotto (asma, BPCO).', 'Restrittive: capacità polmonare totale ridotta (fibrosi, obesità, deformità toraciche).'],
      inf: ['Incentivazione respiratoria e tosse assistita dopo chirurgia per prevenire atelettasie.', 'Posizione semi-seduta migliora la mobilità del diaframma.'],
    }, ['diaframma', 'bpco', 'asma', 'spirometria', 'ortopnea', 'dispnea'], {}),

  P('ciclo-cardiaco', 'Ciclo cardiaco e conduzione', ['sistole', 'diastole', 'toni cardiaci', 'sistema di conduzione'],
    'Alternanza di contrazione (sistole) e rilasciamento (diastole) coordinata dal sistema di conduzione elettrico.',
    {
      conc: 'Il battito nasce nel nodo seno-atriale, passa per il nodo atrio-ventricolare, il fascio di His e le fibre di Purkinje.',
      mecc: ['Sistole atriale → riempimento ventricolare; sistole ventricolare → apertura delle valvole semilunari e eiezione.', 'Primo tono: chiusura delle valvole atrio-ventricolari; secondo tono: chiusura aortica e polmonare.', 'Le coronarie si riempiono principalmente in **diastole**.'],
      reg: 'Simpatico (↑ frequenza e contrattilità), vago (↓ frequenza). Dipende anche da precarico, postcarico e contrattilità.',
      val: { table: { head: ['Parametro (adulto a riposo)', 'Valore indicativo'], rows: [['Frequenza cardiaca', '60–100 bpm'], ['Gittata sistolica', '60–80 mL'], ['Gittata cardiaca', '4–8 L/min'], ['PQ', '120–200 ms'], ['QRS', '< 120 ms']] } },
      alt: ['Aritmie (fibrillazione atriale, blocchi, tachicardie ventricolari), insufficienza valvolare, ischemia.', 'Squilibri di potassio, calcio e magnesio alterano l’ECG.'],
      inf: ['Il polso periferico e il monitoraggio ECG forniscono informazioni diverse: confronta frequenza e ritmo.', 'Elettrodi ECG: prepara la cute, posizionamento standard.'],
    }, ['cuore', 'ecg', 'fibrillazione-atriale', 'gittata-cardiaca', 'omeostasi-potassio', 'ecg-esecuzione'], {}),

  P('gittata-cardiaca', 'Gittata cardiaca e perfusione', ['portata cardiaca', 'precarico', 'postcarico'],
    'Gittata cardiaca = frequenza cardiaca × gittata sistolica; determina la perfusione d’organo.',
    {
      conc: 'La pressione arteriosa media (PAM) è funzione di gittata e resistenze: PAM ≈ gittata × resistenze periferiche.',
      mecc: ['**Precarico**: riempimento ventricolare (volume).', '**Postcarico**: resistenza che il ventricolo deve vincere (pressione aortica).', '**Contrattilità**: forza intrinseca del miocardio.', 'Legge di Frank-Starling: maggiore stiramento → maggiore forza, entro limiti.'],
      reg: 'Sistema nervoso autonomo e [[sistema-renina-angiotensina]]; la risposta compensatoria allo shock è tachicardia e vasocostrizione.',
      val: { table: { head: ['Parametro', 'Valore indicativo'], rows: [['PAM normale', '70–105 mmHg (obiettivo in acuto ≥ 65)'], ['Diuresi', '≥ 0,5 mL/kg/h'], ['Lattati', '< 2 mmol/L']] } },
      alt: ['Scompenso cardiaco (ridotta gittata), ipovolemia (ridotto precarico), vasoplegia (ridotte resistenze).', 'Segni di bassa perfusione: cute fredda e sudata, riempimento capillare > 2–3 s, oliguria, alterazione dello stato mentale.'],
      inf: ['Valuta la perfusione con più indicatori (cute, polsi, diuresi, stato mentale), non solo la pressione.'],
    }, ['cuore', 'scompenso-cardiaco', 'shock', 'ciclo-cardiaco', 'pressione-arteriosa-regolazione'], {}),

  P('pressione-arteriosa-regolazione', 'Regolazione della pressione arteriosa', ['pressione sanguigna', 'barocettori'],
    'La pressione arteriosa è regolata da meccanismi rapidi (barocettori, sistema nervoso) e lenti (rene, ormoni).',
    {
      conc: 'PA = gittata cardiaca × resistenze periferiche totali.',
      mecc: ['**Barocettori** (seno carotideo e arco aortico): in breve tempo modulano frequenza e resistenze.', '**Sistema renina-angiotensina-aldosterone** e vasopressina: regolazione di volume e vasocostrizione.', 'Il rene regola il volume extracellulare con la natriuresi pressoria.'],
      reg: 'Peptidi natriuretici (ANP/BNP) promuovono natriuresi e vasodilatazione.',
      val: { table: { head: ['Categoria (adulto)', 'PA (mmHg), valori indicativi'], rows: [['Ottimale/normale', '< 130/85'], ['Ipertensione di grado 1', '140–159 / 90–99 (in ambulatorio)'], ['Crisi ipertensiva', '> 180/120 (con o senza danno d’organo)']] } },
      alt: ['Ipertensione: aumento cronico delle resistenze/volume.', 'Ipotensione: ipovolemia, vasodilatazione, farmaci, disfunzione cardiaca.'],
      inf: ['Misura la PA in condizioni standard (seduto, a riposo 5 minuti, braccio all’altezza del cuore, bracciale adatto) e confrontala fra i due arti la prima volta.'],
    }, ['ipertensione-arteriosa', 'parametri-vitali', 'sistema-renina-angiotensina', 'arteria-brachiale', 'gittata-cardiaca'], {}),

  P('sistema-renina-angiotensina', 'Sistema renina-angiotensina-aldosterone', ['RAAS', 'renina'],
    'Cascata ormonale che aumenta pressione e volume circolante in risposta all’ipoperfusione renale.',
    {
      conc: 'La riduzione del flusso renale stimola la secrezione di renina; questa converte l’angiotensinogeno in angiotensina I, trasformata dall’ACE in angiotensina II.',
      mecc: ['L’angiotensina II provoca vasocostrizione, stimola la sete e il rilascio di aldosterone e ADH.', 'L’aldosterone aumenta il riassorbimento di sodio (e acqua) e l’escrezione di potassio.'],
      reg: 'Bersaglio di ACE-inibitori, sartani, antialdosteronici e inibitori della renina.',
      val: 'Misure cliniche: potassio, creatinina e pressione nei pazienti in terapia con farmaci RAAS.',
      alt: ['Iperattivazione: ipertensione, ritenzione idrosalina, scompenso.', 'Con farmaci RAAS: rischio di [[iperkaliemia]], ipotensione e peggioramento della funzione renale.'],
      inf: ['Controlla potassio e creatinina dopo l’inizio e le modifiche di dose; segnala tosse secca da ACE-inibitori e angioedema.'],
    }, ['rene', 'surrene', 'iperkaliemia', 'ipertensione-arteriosa', 'ace-inibitori-sartani', 'omeostasi-potassio'], {}),

  P('filtrazione-glomerulare', 'Filtrazione glomerulare e funzione renale', ['VFG', 'eGFR', 'clearance della creatinina'],
    'Il glomerulo filtra circa 180 L di plasma al giorno; la VFG è il miglior indice globale di funzione renale.',
    {
      conc: 'Il filtrato è ultrafiltrato del plasma privo di proteine e cellule; il tubulo riassorbe quasi tutto e secerne alcune sostanze.',
      mecc: ['Pressione idrostatica capillare spinge il filtrato; pressione oncotica e capsulare si oppongono.', 'Arteriola afferente ed efferente regolano la pressione di filtrazione (autoregolazione renale).'],
      reg: 'Autoregolazione, feedback tubulo-glomerulare, RAAS, prostaglandine (i FANS riducono il flusso renale).',
      val: { table: { head: ['Stadio KDIGO (VFG, mL/min/1,73 m²)', 'Significato'], rows: [['G1 ≥ 90', 'normale o alta (con danno)'], ['G2 60–89', 'lievemente ridotta'], ['G3a 45–59 / G3b 30–44', 'moderatamente ridotta'], ['G4 15–29', 'gravemente ridotta'], ['G5 < 15', 'insufficienza renale terminale']] } },
      alt: ['Ipoperfusione (pre-renale), danno parenchimale (renale), ostruzione (post-renale).', 'La creatinina sale tardivamente: può essere normale con VFG già ridotta.'],
      inf: ['Controlla creatinina, diuresi e bilancio idrico; segnala aumenti di creatinina in pazienti con farmaci nefrotossici o mezzo di contrasto.', 'Alcuni farmaci richiedono aggiustamento della dose in base alla VFG.'],
    }, ['rene', 'creatinina', 'insufficienza-renale-acuta', 'insufficienza-renale-cronica', 'bilancio-idrico', 'tc'], {}),

  P('equilibrio-idrico', 'Equilibrio idrico ed elettrolitico', ['osmolarità', 'sodio', 'volemia', 'liquidi corporei'],
    'L’acqua corporea totale (circa 60% del peso nell’uomo adulto) si distribuisce tra liquido intracellulare ed extracellulare e segue il sodio.',
    {
      conc: 'Il sodio è il principale catione extracellulare e determina l’osmolarità plasmatica (275–295 mOsm/kg). L’acqua si muove per osmosi.',
      mecc: ['La sete e l’ormone antidiuretico (ADH) regolano il bilancio dell’acqua.', 'Aldosterone e peptidi natriuretici regolano il bilancio del sodio.', 'Perdite insensibili (cute, respiro) circa 500–800 mL/die, più con febbre e tachipnea.'],
      reg: 'Osmocettori ipotalamici, barocettori, RAAS.',
      val: { table: { head: ['Parametro', 'Valore indicativo'], rows: [['Sodio', '135–145 mmol/L'], ['Osmolarità', '275–295 mOsm/kg'], ['Fabbisogno idrico giornaliero', 'circa 25–35 mL/kg (adulto)'], ['Diuresi', 'circa 1–2 L/die; ≥ 0,5 mL/kg/h']] } },
      alt: ['Disidratazione/ipovolemia: sete, tachicardia, ipotensione ortostatica, mucose secche, oliguria.', 'Ipervolemia: edemi, dispnea, aumento di peso, turgore giugulare.', 'Iponatriemia: nausea, cefalea, confusione, convulsioni; ipernatriemia: sete, irritabilità, coma.'],
      inf: ['Bilancio idrico (entrate/uscite), peso giornaliero, segni clinici; osserva la velocità di correzione del sodio, che deve essere controllata.'],
    }, ['bilancio-idrico', 'iponatriemia', 'iperkaliemia', 'scompenso-cardiaco', 'volume-liquidi-eccessivo', 'rischio-squilibrio-liquidi'], {}),

  P('omeostasi-glicemica', 'Omeostasi del glucosio', ['glicemia', 'insulina e glucagone'],
    'La glicemia a digiuno è mantenuta tra circa 70 e 99 mg/dL da insulina, glucagone, cortisolo e adrenalina.',
    {
      conc: 'Il glucosio è il combustibile essenziale per il cervello. Dopo il pasto prevale l’insulina; a digiuno prevalgono glucagone e ormoni controregolatori.',
      mecc: ['**Insulina**: favorisce captazione del glucosio, glicogenosintesi, lipogenesi; abbassa la glicemia (e il potassio).', '**Glucagone**: glicogenolisi e gluconeogenesi epatica.', 'Adrenalina e cortisolo aumentano la glicemia in stress e malattia.'],
      reg: 'Retroazione negativa pancreas-fegato-muscolo-tessuto adiposo.',
      val: { table: { head: ['Parametro', 'Valore indicativo (adulto)'], rows: [['Glicemia a digiuno', '70–99 mg/dL'], ['Prediabete', '100–125 mg/dL a digiuno'], ['Diabete', '≥ 126 mg/dL a digiuno (confermato); HbA1c ≥ 6,5% (48 mmol/mol)'], ['Ipoglicemia', '< 70 mg/dL (grave: < 54 mg/dL o con alterazione della coscienza)']] } },
      alt: ['Diabete: deficit di secrezione o azione dell’insulina.', 'Ipoglicemia: sudorazione, tremori, fame, confusione, perdita di coscienza.'],
      inf: ['Glicemia capillare prima dei pasti e secondo prescrizione; coordina insulina e pasti; riconosci subito l’ipoglicemia.'],
    }, ['pancreas', 'diabete-mellito', 'ipoglicemia', 'chetoacidosi-diabetica', 'glicemia', 'glicemia-capillare', 'insulina'], {}),

  P('emostasi-coagulazione', 'Emostasi e coagulazione', ['coagulazione', 'piastrine', 'fibrina'],
    'Insieme di eventi (vascolari, piastrinici, plasmatici) che arrestano un’emorragia e poi dissolvono il coagulo.',
    {
      conc: 'Emostasi primaria: vasocostrizione e tappo piastrinico. Emostasi secondaria: cascata della coagulazione che forma fibrina. Fibrinolisi: dissoluzione del coagulo.',
      mecc: ['Le piastrine aderiscono e si aggregano (vWF, fibrinogeno).', 'Cascata: via intrinseca (aPTT), estrinseca (PT/INR), via comune; fattori dipendenti dalla **vitamina K** (II, VII, IX, X) prodotti dal fegato.'],
      reg: 'Antitrombina, proteine C e S, sistema fibrinolitico (plasmina).',
      val: { table: { head: ['Test', 'Valore indicativo'], rows: [['Piastrine', '150.000–400.000 /µL'], ['INR', '0,8–1,2 (target terapeutico con warfarin spesso 2–3)'], ['aPTT', 'circa 25–35 s (varia per reagente)'], ['D-dimero', '< 500 ng/mL FEU (varia per metodo)']] } },
      alt: ['Emorragie: trombocitopenia, anticoagulanti, epatopatie, carenza di vitamina K.', 'Trombosi: stasi, ipercoagulabilità, danno endoteliale (triade di Virchow).'],
      inf: ['Prima di procedure invasive verifica coagulazione e farmaci anticoagulanti/antiaggreganti secondo protocollo.', 'Dopo puntura in paziente anticoagulato: compressione più lunga e controllo del sito.'],
    }, ['pt-inr', 'aptt', 'tvp', 'embolia-polmonare', 'anticoagulanti', 'emorragia-digestiva', 'piastrine'], {}),

  P('risposta-infiammatoria', 'Risposta infiammatoria e immunità', ['infiammazione', 'febbre', 'risposta immunitaria'],
    'Risposta locale e sistemica a infezione o danno: segni cardinali (rubor, tumor, calor, dolor, functio laesa).',
    {
      conc: 'L’immunità innata (barriere, fagociti, complemento) risponde subito; l’immunità adattativa (linfociti B e T) è specifica e con memoria.',
      mecc: ['Citochine (IL-1, IL-6, TNF) → febbre e fase acuta (PCR, procalcitonina).', 'Neutrofili in infezioni batteriche; linfociti in infezioni virali; eosinofili in allergie e parassitosi; monociti in infiammazioni croniche.', 'La risposta sistemica sregolata ([[sepsi]]) provoca disfunzione d’organo.'],
      reg: 'Il feedback anti-infiammatorio (cortisolo, IL-10) limita il danno.',
      val: { table: { head: ['Leucociti (valori indicativi)', 'Possibile significato'], rows: [['Neutrofili ↑', 'infezione batterica, infiammazione, stress, steroidi'], ['Linfociti ↑', 'infezioni virali'], ['Eosinofili ↑', 'allergie, parassitosi'], ['Monociti ↑', 'infezioni/infiammazioni croniche'], ['Neutrofili < 500/µL', 'neutropenia grave: rischio infettivo elevato']] } },
      alt: ['Sepsi, SIRS, reazioni allergiche, malattie autoimmuni.'],
      inf: ['Misura la temperatura con la stessa modalità; la febbre può essere assente nell’anziano e nel neutropenico.', 'Colture prima degli antibiotici quando possibile.'],
    }, ['sepsi', 'emocromo', 'pcr', 'procalcitonina', 'neutropenia-febbrile', 'infezione-vie-urinarie', 'polmonite'], {}),

  P('termoregolazione', 'Termoregolazione', ['temperatura corporea', 'febbre', 'ipotermia'],
    'L’ipotalamo mantiene la temperatura centrale tra circa 36,1 e 37,2 °C.',
    {
      conc: 'La temperatura è l’equilibrio tra produzione (metabolismo, brividi) e dispersione (irraggiamento, convezione, conduzione, evaporazione).',
      mecc: ['Freddo: vasocostrizione, brividi, ↑ metabolismo.', 'Caldo: vasodilatazione, sudorazione.', 'Nella febbre il punto di regolazione ipotalamico è alzato dalle citochine.'],
      reg: 'Termocettori cutanei e centrali, ipotalamo.',
      val: { table: { head: ['Misura', 'Valore indicativo'], rows: [['Normale', '36,1–37,2 °C (ascellare leggermente inferiore)'], ['Febbre', '≥ 38,0 °C'], ['Ipotermia', '< 35,0 °C'], ['Ipertermia maligna/colpo di calore', '> 40 °C con disfunzione d’organo']] } },
      alt: ['Anziani, neonati, pazienti anestetizzati e in terapia intensiva sono a rischio di ipotermia.', 'Febbre da infezioni, farmaci, trasfusioni, neoplasie.'],
      inf: ['Dopo anestesia previeni ipotermia perioperatoria con coperte riscaldate; nel neonato mantieni la catena del caldo.', 'Gli antipiretici trattano la sintomatologia; cerca la causa.'],
    }, ['parametri-vitali', 'sepsi', 'termoregolazione-inefficace'], {}),

  P('digestione-assorbimento', 'Digestione e assorbimento', ['assorbimento intestinale', 'enzimi digestivi'],
    'Processo meccanico e chimico che scompone gli alimenti in nutrienti assorbibili, soprattutto nell’intestino tenue.',
    {
      conc: 'Bocca (amilasi salivare), stomaco (acido, pepsina), duodeno (bile, enzimi pancreatici), intestino tenue (enzimi dell’orletto a spazzola e assorbimento).',
      mecc: ['Carboidrati → monosaccaridi; proteine → aminoacidi e piccoli peptidi; lipidi emulsionati da bile e assorbiti nel sistema linfatico (chilomicroni).', 'Il colon riassorbe acqua ed elettroliti.'],
      reg: 'Ormoni gastrointestinali (gastrina, secretina, colecistochinina), sistema nervoso enterico e autonomo.',
      val: 'L’indice più pratico: peso, albumina, prealbumina, emoglobina, vitamine e oligoelementi; screening nutrizionale con [[must]].',
      alt: ['Malassorbimento (celiachia, resezioni intestinali, pancreatite cronica).', 'Nutrizione enterale inadeguata: diarrea, distensione, aspirazione.'],
      inf: ['Se la via orale non è possibile >5–7 giorni, valuta nutrizione enterale/parenterale secondo il team nutrizionale.', 'Posizione semiseduta (30–45°) durante e dopo nutrizione enterale per ridurre l’aspirazione.'],
    }, ['stomaco', 'intestino-tenue', 'pancreas', 'fegato', 'must', 'nutrizione-enterale', 'nutrizione-parenterale'], {}),

  P('cicatrizzazione', 'Guarigione delle ferite', ['riparazione tissutale', 'ferita'],
    'Quattro fasi sovrapposte: emostasi, infiammazione, proliferazione e rimodellamento.',
    {
      conc: 'La guarigione per prima intenzione (margini accostati) è più rapida di quella per seconda intenzione (ferita aperta con tessuto di granulazione).',
      mecc: ['Emostasi (minuti): coagulo.', 'Infiammazione (giorni 1–4): neutrofili e macrofagi.', 'Proliferazione (giorni 4–21): fibroblasti, angiogenesi, tessuto di granulazione, epitelizzazione.', 'Rimodellamento (settimane–mesi): collagene.'],
      reg: 'Fattori di crescita; richiede ossigeno, proteine, vitamina C, zinco.',
      val: 'Valuta la ferita con criteri oggettivi: dimensioni, tessuto (granulazione, slough, necrosi), essudato, margini, cute perilesionale, dolore, segni di infezione.',
      alt: ['Ritardo: infezione, ischemia, edema, diabete, malnutrizione, steroidi, tabagismo, pressione continua.'],
      inf: ['Ambiente umido bilanciato e tecnica asettica; documenta aspetto e misure con fotografia (se consentito) a intervalli regolari.', 'Controlla segni di infezione: arrossamento crescente, calore, dolore, secrezioni purulente, febbre.'],
    }, ['medicazione-ferita', 'lesioni-da-pressione', 'cute', 'malnutrizione'], {}),

  P('dolore-fisiologia', 'Fisiologia del dolore', ['nocicezione', 'dolore acuto e cronico', 'dolore neuropatico'],
    'Il dolore è un’esperienza sensoriale ed emotiva spiacevole; origina da nocicettori ma è modulato a livello centrale.',
    {
      conc: 'Nocicezione: trasduzione, trasmissione (fibre Aδ e C), modulazione (midollo, tronco, corteccia) e percezione.',
      mecc: ['Dolore nocicettivo (somatico/viscerale), neuropatico (lesione del sistema nervoso), nociplastico (sensibilizzazione centrale).', 'Gli oppioidi agiscono su recettori μ; i FANS inibiscono le prostaglandine; i farmaci neuropatici modulano i canali ionici.'],
      reg: 'Vie discendenti inibitorie (serotonina, noradrenalina, endorfine).',
      val: 'Misura con scale validate ([[nrs-vas]], [[flacc]], [[painad]]); il dolore è ciò che il paziente dice che è.',
      alt: ['Dolore cronico, iperalgesia, allodinia.', 'Ansia, depressione e sonno influenzano la percezione.'],
      inf: ['Valuta sede, intensità, qualità, fattori scatenanti, impatto funzionale; rivaluta dopo ogni intervento.', 'Approccio multimodale: farmaci, posizione, ghiaccio/caldo, distrazione, relazione.'],
    }, ['nrs-vas', 'flacc', 'painad', 'oppioidi', 'fans', 'dolore-acuto', 'dolore-cronico'], {}),
];
