// Casi clinici interattivi (“costruisci la diagnosi”): casi didattici fittizi, nessun dato reale.
// step: { q, opts: [[testo, corretta(bool), feedback]], multi?: true }
export default [
  {
    id: 'caso-iperkaliemia', title: 'Debolezza in un paziente dializzato', spec: 'Nefrologia', level: 'Base', time: '5 min',
    intro: 'Uomo di 72 anni con insufficienza renale cronica, ha saltato l’ultima dialisi. Arriva con debolezza muscolare, parestesie e palpitazioni. PA 150/90, FC 48/min irregolare, SpO₂ 96%, glicemia capillare normale. Assume ramipril.',
    steps: [
      { q: 'Qual è il primo sospetto clinico più verosimile?', opts: [['Iperkaliemia', true, 'Insufficienza renale, dialisi saltata e ACE-inibitore sono i fattori classici; bradicardia e debolezza sono suggestive.'], ['Ipoglicemia', false, 'La glicemia capillare è normale.'], ['Embolia polmonare', false, 'Non ci sono dispnea né ipossiemia.'], ['Anemia lieve', false, 'Non spiega aritmia e parestesie.']] },
      { q: 'Quale azione immediata è prioritaria?', opts: [['ECG a 12 derivazioni, monitor, accesso venoso, avviso al medico', true, 'L’ECG mostra il rischio aritmico (T alte, QRS largo); non ritardare l’allerta.'], ['Aspettare l’esito del prelievo prima di fare altro', false, 'Il paziente è instabile potenzialmente: monitor e ECG subito.'], ['Somministrare potassio per os', false, 'Aggraverebbe la situazione.'], ['Mobilizzare e far camminare', false, 'Aumenta il rischio aritmico e di caduta.']] },
      { q: 'Quali prelievi/controlli servono subito? (scegli la risposta più completa)', opts: [['Potassio (con EGA), creatinina, elettroliti; evitare emolisi e garrotto prolungato', true, 'L’EGA dà il potassio in pochi minuti; l’emolisi può alterare falsamente il valore.'], ['Solo emocromo', false, 'Non risponde alla domanda clinica.'], ['Solo glicemia', false, 'Già normale.'], ['Nessun prelievo: si tratta empiricamente', false, 'La conferma di laboratorio è necessaria.']] },
      { q: 'Quale diagnosi infermieristica è la più pertinente?', opts: [['Rischio di squilibrio elettrolitico / Gittata cardiaca ridotta', true, 'Il problema prioritario è l’alterazione del ritmo da squilibrio elettrolitico.'], ['Dolore acuto', false, 'Non è il problema attuale.'], ['Rischio di infezione', false, 'Non prioritario ora.'], ['Deficit di conoscenza sulla dieta', false, 'Importante in seguito, non in emergenza.']] },
    ],
    outro: 'Il trattamento (calcio ev per cardioprotezione, insulina + glucosio, β2-agonisti, correzione della causa e dialisi) è deciso dal medico; l’infermiere riconosce, monitora, prepara e somministra secondo prescrizione e documenta.', rel: ['iperkaliemia', 'ecg', 'potassio', 'calcio-gluconato', 'ace-inibitori-sartani'],
  },
  {
    id: 'caso-ipoglicemia', title: 'Sudorazione e confusione dopo la cena', spec: 'Diabetologia', level: 'Base', time: '4 min',
    intro: 'Donna di 68 anni con diabete di tipo 2 in terapia insulinica. In reparto è sudata, tremante e confusa; ha ricevuto l’insulina serale ma ha mangiato poco. PA 130/80, FC 98/min.',
    steps: [
      { q: 'Qual è il primo gesto?', opts: [['Misurare subito la glicemia capillare', true, 'Il sospetto è ipoglicemia: la misura conferma e guida la terapia, senza ritardi.'], ['Somministrare altra insulina', false, 'Peggiorerebbe la situazione.'], ['Aspettare che passi', false, 'La confusione indica ipoglicemia significativa.'], ['Eseguire una TC cerebrale', false, 'Prima si esclude la causa metabolica.']] },
      { q: 'Glicemia 48 mg/dL. La paziente è confusa ma deglutisce. Cosa fai?', opts: [['Carboidrati a rapido assorbimento per os (se sicura la deglutizione) e avviso al medico, secondo protocollo', true, 'Se non può deglutire in sicurezza: via endovenosa o glucagone secondo protocollo.'], ['Una tazza di caffè senza zucchero', false, 'Non aumenta la glicemia.'], ['Un pasto completo dopo ore', false, 'Ritarda il trattamento.'], ['Nessun intervento, solo osservazione', false, 'Rischio di peggioramento e convulsioni.']] },
      { q: 'Quando rivaluti la glicemia dopo il trattamento?', opts: [['Dopo circa 15 minuti, e ripeti se ancora bassa', true, 'Il protocollo definisce soglie e tempi; poi si cerca la causa.'], ['Dopo 12 ore', false, 'Troppo tardi.'], ['Non serve rivalutare', false, 'Rischio di recidiva.'], ['Solo se compaiono sintomi', false, 'Va controllata attivamente.']] },
      { q: 'Quale azione di prevenzione è appropriata?', opts: [['Rivedere insulina/pasti con il medico, educare la paziente a riconoscere i sintomi', true, 'Prevenzione = coordinamento terapia-pasti, controllo glicemico, educazione.'], ['Sospendere i pasti', false, 'Aumenterebbe il rischio.'], ['Aumentare l’insulina', false, 'Controindicato.'], ['Limitare i controlli glicemici', false, 'Serve il contrario.']] },
    ],
    outro: 'L’ipoglicemia è una delle principali cause di eventi avversi iatrogeni: segnalazione, documentazione e revisione della terapia sono parte della cura.', rel: ['ipoglicemia', 'insulina', 'glicemia-capillare', 'rischio-glicemia-instabile'],
  },
  {
    id: 'caso-sepsi', title: 'Febbre e confusione dopo catetere vescicale', spec: 'Medicina interna', level: 'Intermedio', time: '6 min',
    intro: 'Uomo di 81 anni, catetere vescicale da 10 giorni. Febbre 38,9 °C, brividi, confuso (prima orientato). FR 24/min, PA 92/55, FC 118/min, SpO₂ 94%, urine torbide.',
    steps: [
      { q: 'Quale strumento rapido usi per valutare la gravità?', opts: [['NEWS2 (e qSOFA)', true, 'FR, PAS, FC, T, stato mentale: punteggio alto → escalation urgente.'], ['Scala di Barthel', false, 'Valuta l’autonomia, non l’urgenza.'], ['Scala di Braden', false, 'Valuta il rischio di lesioni da pressione.'], ['Nessuno, basta osservare', false, 'Gli score standardizzati riducono i ritardi.']] },
      { q: 'Quale combinazione di azioni è più appropriata?', opts: [['Allertare il medico, accesso venoso, emocolture e urinocoltura, lattati, antibiotico e fluidi come prescritti nel più breve tempo', true, 'Il percorso sepsi è tempo-dipendente.'], ['Dare solo paracetamolo e riposare', false, 'Sottovaluta la gravità.'], ['Rimuovere il catetere e aspettare', false, 'Si valuta la rimozione/sostituzione, ma non basta.'], ['Aspettare gli esami colturali prima di somministrare antibiotico', false, 'Le colture si prelevano prima, senza ritardare l’antibiotico.']] },
      { q: 'Quale parametro monitori più frequentemente?', opts: [['Parametri vitali (PA, FC, FR, SpO₂, T), stato mentale e diuresi oraria', true, 'Sono i segni precoci di peggioramento verso lo shock.'], ['Solo la temperatura', false, 'Insufficiente.'], ['Solo il peso', false, 'Poco utile in acuto.'], ['Solo gli esami di fine giornata', false, 'Troppo tardivo.']] },
      { q: 'Quale intervento previene nuovi casi simili nel reparto?', opts: [['Indicazione e rimozione precoce del catetere, tecnica asettica, igiene delle mani', true, 'Prevenzione CAUTI.'], ['Cambiare il catetere ogni giorno', false, 'Aumenta i rischi.'], ['Irrigare sempre la vescica', false, 'Non indicato di routine.'], ['Usare antibiotici profilattici sistematici', false, 'Favorisce le resistenze.']] },
    ],
    outro: 'Sepsi = disfunzione d’organo da risposta disregolata all’infezione. Riconoscimento precoce e bundle sono la chiave.', rel: ['sepsi', 'news2', 'qsofa', 'catetere-vescicale-dev', 'ica', 'antibiotici'],
  },
  {
    id: 'caso-scompenso', title: 'Dispnea notturna e piedi gonfi', spec: 'Cardiologia', level: 'Intermedio', time: '6 min',
    intro: 'Donna di 77 anni con ipertensione e fibrillazione atriale. Da 3 giorni dorme con tre cuscini, ha aumentato 4 kg, gambe gonfie. Ora è molto dispnoica, tossisce schiuma rosata. FR 32/min, SpO₂ 86% in aria, PA 190/105, FC 120/min, crepitii diffusi.',
    steps: [
      { q: 'Qual è la diagnosi clinica più probabile?', opts: [['Edema polmonare acuto da scompenso cardiaco', true, 'Ortopnea, aumento di peso, edemi, espettorato schiumoso rosato, crepitii.'], ['Asma lieve', false, 'Non spiega edemi, peso e crepitii.'], ['Pneumotorace', false, 'Non c’è asimmetria né trauma.'], ['Attacco di panico', false, 'Ipossiemia e segni obiettivi indicano altro.']] },
      { q: 'Quali sono le azioni immediate prioritarie?', opts: [['Posizione seduta, O₂, monitoraggio, accesso venoso, chiamare il medico, preparare diuretici e supporto respiratorio', true, 'ABCDE: B prima di tutto, con allerta.'], ['Posizione supina per riposare', false, 'Peggiora la dispnea.'], ['Infusione rapida di liquidi', false, 'Controindicata: sovraccarico.'], ['Attendere il prelievo del BNP', false, 'Non ritardare il trattamento.']] },
      { q: 'Quale diagnosi infermieristica è prioritaria?', opts: [['Scambio gassoso compromesso', true, 'L’ipossiemia è il problema che mette a rischio la vita.'], ['Rischio di lesione da pressione', false, 'Rilevante ma non prioritario ora.'], ['Deficit di conoscenza', false, 'Si affronta dopo la stabilizzazione.'], ['Stipsi', false, 'Non prioritaria.']] },
      { q: 'Quali parametri di rivalutazione sono più utili nelle ore successive?', opts: [['SpO₂, FR, PA, FC, diuresi (bilancio idrico), peso, lavoro respiratorio', true, 'Guidano la risposta alla terapia.'], ['Solo la temperatura', false, 'Poco informativa.'], ['Solo l’alvo', false, 'Poco rilevante in acuto.'], ['Nessuno finché sta meglio', false, 'Serve sorveglianza continua.']] },
    ],
    outro: 'Per la dimissione: educazione a peso giornaliero, sale, aderenza ai diuretici e segnali di allarme.', rel: ['edema-polmonare-acuto', 'scompenso-cardiaco', 'ortopnea', 'diuretici', 'scambio-gassoso-compromesso'],
  },
  {
    id: 'caso-ictus', title: 'Un volto che cade e un braccio che non risponde', spec: 'Neurologia', level: 'Base', time: '5 min',
    intro: 'Un uomo di 69 anni con fibrillazione atriale è a pranzo con la famiglia: improvvisamente non parla bene, il lato destro del volto è asimmetrico e il braccio destro cade. Sono le 12:40; stava bene alle 12:20.',
    steps: [
      { q: 'Quale valutazione rapida applichi?', opts: [['Scala di Cincinnati (FAST)', true, 'Volto, braccio, linguaggio: tutti e tre sono alterati.'], ['Scala di Braden', false, 'Non pertinente.'], ['Barthel', false, 'Non pertinente.'], ['Tinetti', false, 'Non pertinente in emergenza.']] },
      { q: 'Quale dato temporale è cruciale da registrare?', opts: [['L’ora di insorgenza (o ultima volta visto bene)', true, 'Determina l’eleggibilità a trombolisi/trombectomia.'], ['L’orario dell’ultimo pasto', false, 'Utile ma non il dato critico.'], ['L’ora del ricovero', false, 'Non basta.'], ['Nessun dato', false, 'Errore comune.']] },
      { q: 'Quale azione immediata è corretta?', opts: [['Chiamare il 112/percorso ictus, glicemia, vie aeree, nulla per bocca', true, 'Rischio di aspirazione: digiuno finché la deglutizione non viene valutata.'], ['Dare da bere acqua', false, 'Rischio di aspirazione.'], ['Somministrare aspirina a casa', false, 'Non senza prescrizione e imaging (può essere emorragico).'], ['Aspettare di vedere se passa', false, 'Il tempo è cervello.']] },
      { q: 'Quale diagnosi infermieristica è pertinente nelle prime ore?', opts: [['Rischio di aspirazione / Comunicazione verbale compromessa', true, 'Disfagia e afasia sono frequenti.'], ['Stipsi', false, 'Non prioritaria.'], ['Dolore cronico', false, 'Non pertinente.'], ['Rischio di glicemia instabile', false, 'Marginale ora.']] },
    ],
    outro: 'Il percorso ictus prevede imaging urgente e trattamenti di riperfusione in finestre limitate: l’allerta precoce è parte della cura.', rel: ['ictus', 'cpss', 'glasgow', 'fibrillazione-atriale', 'rischio-aspirazione'],
  },
  {
    id: 'caso-lesione', title: 'Una chiazza rossa sul sacro', spec: 'Geriatria', level: 'Base', time: '4 min',
    intro: 'Donna di 84 anni, allettata da 5 giorni dopo frattura di femore, denutrita, incontinente. Compare un’area eritematosa sul sacro che non sbianca alla digitopressione. Braden 11.',
    steps: [
      { q: 'Come classifichi il rischio con la scala di Braden 11?', opts: [['Rischio alto/molto alto: serve prevenzione intensiva', true, 'Punteggi bassi indicano rischio elevato.'], ['Nessun rischio', false, 'Errato.'], ['Basso rischio', false, 'Errato.'], ['La scala non si può usare', false, 'È lo strumento corretto.']] },
      { q: 'Quale intervento è prioritario?', opts: [['Eliminare/ridurre la pressione: cambi posizione a 30°, superficie antidecubito, evitare il decubito sul sacro', true, 'La pressione è la causa: la rimozione è il cardine.'], ['Massaggiare vigorosamente la zona', false, 'Danneggia il tessuto.'], ['Applicare un ciambellone', false, 'Concentra la pressione ai margini: sconsigliato.'], ['Ignorare, è solo arrossamento', false, 'Eritema non sbiancante = lesione di categoria 1.']] },
      { q: 'Quali altri fattori vanno gestiti?', opts: [['Nutrizione/idratazione, umidità e continenza, frizione, igiene e cura della cute', true, 'Approccio multifattoriale.'], ['Solo la medicazione', false, 'Non basta.'], ['Solo gli antibiotici', false, 'Non è un’infezione.'], ['Nulla', false, 'Errato.']] },
      { q: 'Cosa documenti?', opts: [['Sede, dimensioni, categoria, cute circostante, interventi, riposizionamenti, rivalutazioni', true, 'Documentazione completa e confronto nel tempo.'], ['Solo “lesione sul sacro”', false, 'Insufficiente.'], ['Niente: lo fa il medico', false, 'È compito infermieristico.'], ['Solo foto senza consenso', false, 'La foto richiede consenso e rispetto della privacy.']] },
    ],
    outro: 'La prevenzione è più efficace e meno costosa del trattamento: valutazione del rischio, cura della cute, riposizionamento, nutrizione.', rel: ['lesioni-da-pressione', 'braden', 'mobilizzazione-paziente', 'malnutrizione', 'integrita-cutanea-compromessa'],
  },
];
