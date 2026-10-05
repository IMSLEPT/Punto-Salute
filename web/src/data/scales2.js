// Scale di valutazione (2): contenuti parafrasati; verificare licenza e versione ufficiale in uso.
const S = (id, title, aliases, summary, extra) => ({ id, type: 'scale', title, aliases, summary, cat: extra.cat, spec: extra.spec || [], sections: { cos: extra.desc }, rel: extra.rel || [], sources: extra.sources || [], rev: '2026-10', v: '1.0', verify: true, verifyText: 'Verifica la versione ufficiale della scala, la licenza d’uso e quella adottata dalla tua struttura. Il punteggio è di supporto, non sostituisce il giudizio clinico.', scale: extra.scale });

const yn = (id, label, pts = 1) => ({ id, label, opts: [['No', 0], ['Sì', pts]] });

export default [
  S('4at', '4AT (screening del delirium)', ['4AT', 'delirium screening', 'scala 4AT'], 'Screening rapido del [[delirium]] e del deficit cognitivo: vigilanza, orientamento, attenzione, andamento acuto/fluttuante (0–12).',
    { cat: 'Cognitiva', rel: ['delirium', 'confusione-acuta', 'demenza', 'glasgow'], sources: ['4at'], desc: ['Utilizzabile anche in pazienti con vigilanza ridotta. **≥ 4**: possibile delirium (richiede valutazione clinica); 1–3: possibile deficit cognitivo; 0: delirium improbabile. Non è una diagnosi.'],
      scale: { groups: [
        { id: 'a', label: '1. Vigilanza', opts: [['Normale (sveglio e vigile)', 0], ['Lievemente sonnolento < 10 s dopo il risveglio', 0], ['Chiaramente anormale (sonnolento, agitato)', 4]] },
        { id: 'b', label: '2. Orientamento (età, data di nascita, luogo, anno)', opts: [['Nessun errore', 0], ['1 errore', 1], ['2 o più errori / non valutabile', 2]] },
        { id: 'c', label: '3. Attenzione (mesi dell’anno al contrario, da dicembre)', opts: [['Almeno 7 mesi corretti', 0], ['Inizia ma < 7 mesi', 1], ['Rifiuta o non valutabile', 2]] },
        { id: 'd', label: '4. Cambiamento acuto o decorso fluttuante (nelle ultime 2 settimane, ancora presente)', opts: [['No', 0], ['Sì', 4]] }],
        bands: [{ max: 0, label: 'Delirium improbabile', level: 'ok', text: 'Se la clinica suggerisce delirium, valuta comunque: lo screening non esclude.' }, { max: 3, label: 'Possibile deficit cognitivo', level: 'warn', text: 'Approfondisci con valutazione cognitiva; riferisci al medico.' }, { max: 12, label: 'Possibile delirium', level: 'danger', text: 'Ricerca e tratta le cause (infezione, farmaci, dolore, disidratazione, ritenzione urinaria, stipsi); informa il medico e adotta misure non farmacologiche.' }] } }),

  S('painad', 'PAINAD (dolore nella demenza avanzata)', ['PAINAD', 'dolore anziano non collaborante', 'dolore demenza'], 'Osservazione di cinque comportamenti per stimare il dolore in chi non riesce a riferirlo (0–10).',
    { cat: 'Dolore', rel: ['nrs-vas', 'flacc', 'demenza', 'dolore-cronico', 'dolore-acuto'], sources: ['painad'], desc: ['Osserva il paziente per circa 5 minuti, a riposo e preferibilmente durante un’attività (mobilizzazione). Un punteggio più alto indica più dolore; rivaluta dopo ogni intervento.'],
      scale: { groups: [
        { id: 'r', label: 'Respiro (indipendente dalla vocalizzazione)', opts: [['Normale', 0], ['Occasionale respiro affannoso o breve iperventilazione', 1], ['Respiro rumoroso e affannoso, iperventilazione prolungata, Cheyne-Stokes', 2]] },
        { id: 'v', label: 'Vocalizzazione negativa', opts: [['Nessuna', 0], ['Gemiti o lamenti occasionali, tono basso negativo', 1], ['Richiami ripetuti, gemiti forti, pianto', 2]] },
        { id: 'f', label: 'Espressione del volto', opts: [['Sorridente o inespressivo', 0], ['Triste, spaventato, aggrottato', 1], ['Smorfie del volto', 2]] },
        { id: 'b', label: 'Linguaggio del corpo', opts: [['Rilassato', 0], ['Teso, agitato, si muove senza sosta', 1], ['Rigido, pugni stretti, ginocchia al petto, si ritrae o colpisce', 2]] },
        { id: 'c', label: 'Consolabilità', opts: [['Non necessita di conforto', 0], ['Distratto o rassicurato da voce/contatto', 1], ['Impossibile consolare o distrarre', 2]] }],
        bands: [{ max: 0, label: 'Nessun dolore evidente', level: 'ok', text: 'Continua a osservare, soprattutto durante le attività.' }, { max: 3, label: 'Dolore lieve', level: 'warn', text: 'Considera misure non farmacologiche e analgesia come prescritto; rivaluta.' }, { max: 6, label: 'Dolore moderato', level: 'warn', text: 'Riferisci e tratta secondo prescrizione; rivaluta dopo l’intervento.' }, { max: 10, label: 'Dolore severo', level: 'danger', text: 'Intervieni subito secondo prescrizione/protocollo e avvisa il medico.' }] } }),

  S('rass', 'RASS (agitazione e sedazione)', ['RASS', 'Richmond', 'sedazione', 'agitazione'], 'Un solo punteggio da +4 (combattivo) a −5 (non risvegliabile) per descrivere vigilanza e agitazione.',
    { cat: 'Neurologica', rel: ['glasgow', 'benzodiazepine', 'oppioidi', 'delirium'], sources: ['rass'], desc: ['Osserva il paziente (0 a +4) oppure stimolalo con voce e poi con stimolo fisico (da −1 a −5). Il **punteggio non è una somma**: si sceglie il livello. L’obiettivo di sedazione è prescritto dal medico.'],
      scale: { groups: [
        { id: 'l', label: 'Livello', opts: [['+4 Combattivo (pericoloso per sé o per gli altri)', 4], ['+3 Molto agitato (si toglie tubi/cateteri)', 3], ['+2 Agitato (movimenti frequenti senza scopo)', 2], ['+1 Irrequieto (ansioso, non aggressivo)', 1], ['0 Vigile e calmo', 0], ['−1 Sonnolento (contatto visivo > 10 s alla voce)', -1], ['−2 Sedazione lieve (contatto visivo < 10 s)', -2], ['−3 Sedazione moderata (movimento o occhi alla voce, senza contatto visivo)', -3], ['−4 Sedazione profonda (nessuna risposta alla voce, risponde allo stimolo fisico)', -4], ['−5 Non risvegliabile', -5]] }],
        bands: [{ max: -4, label: 'Sedazione profonda / non risvegliabile', level: 'danger', text: 'Controlla vie aeree, FR e SpO₂; riferisci se non è l’obiettivo prescritto.' }, { max: -1, label: 'Sedazione lieve-moderata', level: 'warn', text: 'Verifica rispetto all’obiettivo di sedazione e ai farmaci in corso.' }, { max: 0, label: 'Vigile e calmo', level: 'ok', text: 'Livello di riferimento.' }, { max: 4, label: 'Agitazione', level: 'danger', text: 'Cerca cause reversibili (dolore, ipossia, ritenzione urinaria, delirium); proteggi il paziente e riferisci.' }] } }),

  S('lawton', 'Lawton IADL (attività strumentali)', ['IADL', 'Lawton', 'attività strumentali della vita quotidiana'], 'Valuta otto attività complesse (telefono, spesa, cucina, casa, bucato, mezzi, farmaci, denaro) in forma dicotomica (0–8).',
    { cat: 'Autonomia funzionale', rel: ['katz', 'barthel', 'demenza', 'deficit-cura-di-se'], sources: ['lawton'], desc: ['Per ogni attività: 1 punto se svolta in autonomia, 0 se serve aiuto o è dipendente. Si valuta ciò che la persona **fa realmente**. Confronta con il contesto abituale (storicamente alcune attività erano omesse per gli uomini).'],
      scale: { groups: ['Usare il telefono', 'Fare la spesa', 'Preparare i pasti', 'Governo della casa', 'Fare il bucato', 'Usare i mezzi di trasporto', 'Gestire i propri farmaci', 'Gestire il denaro'].map((l, i) => ({ id: 'i' + i, label: l, opts: [['Dipendente o necessita di aiuto', 0], ['Autonomo', 1]] })),
        bands: [{ max: 1, label: 'Dipendenza grave', level: 'danger', text: 'Necessita di assistenza per quasi tutte le attività strumentali.' }, { max: 3, label: 'Dipendenza marcata', level: 'warn', text: 'Valuta bisogni assistenziali e supporti domiciliari.' }, { max: 5, label: 'Dipendenza moderata', level: 'warn', text: 'Pianifica interventi di supporto mirati.' }, { max: 7, label: 'Lieve compromissione', level: 'ok', text: 'Sostieni l’autonomia residua e monitora.' }, { max: 8, label: 'Autonomo', level: 'ok', text: 'Nessuna dipendenza rilevata.' }] } }),

  S('apgar', 'Indice di Apgar (neonato)', ['Apgar', 'apgar score', 'valutazione del neonato'], 'Valutazione rapida dell’adattamento del neonato alla vita extrauterina a 1 e 5 minuti (0–10).',
    { cat: 'Pediatrica', rel: ['flacc'], sources: ['apgar'], desc: ['Cinque parametri con 0–2 punti ciascuno, valutati a **1 e 5 minuti** di vita (e oltre se < 7). Non guida da solo la rianimazione: **non attendere** il punteggio per intervenire.'],
      scale: { groups: [
        { id: 'h', label: 'Frequenza cardiaca', opts: [['Assente', 0], ['< 100/min', 1], ['≥ 100/min', 2]] },
        { id: 'r', label: 'Respiro', opts: [['Assente', 0], ['Lento o irregolare', 1], ['Buono, pianto vigoroso', 2]] },
        { id: 't', label: 'Tono muscolare', opts: [['Flaccido', 0], ['Qualche flessione degli arti', 1], ['Movimenti attivi', 2]] },
        { id: 'i', label: 'Risposta agli stimoli', opts: [['Nessuna', 0], ['Smorfia', 1], ['Pianto o tosse', 2]] },
        { id: 'c', label: 'Colorito', opts: [['Cianotico o pallido', 0], ['Corpo roseo, estremità cianotiche', 1], ['Completamente roseo', 2]] }],
        bands: [{ max: 3, label: 'Depressione grave', level: 'danger', text: 'Necessaria rianimazione neonatale secondo protocollo; punteggio da registrare a 1 e 5 minuti.' }, { max: 6, label: 'Depressione moderata', level: 'warn', text: 'Stimolazione, assistenza respiratoria secondo necessità; rivaluta.' }, { max: 10, label: 'Buone condizioni', level: 'ok', text: 'Cure di routine e osservazione.' }] } }),

  S('morse', 'Morse Fall Scale (rischio di caduta)', ['Morse', 'rischio cadute', 'scala di Morse', 'caduta'], 'Stima il rischio di caduta con sei elementi (0–125); le soglie di intervento variano tra strutture.',
    { cat: 'Sicurezza', rel: ['rischio-cadute', 'tinetti', 'delirium', 'frattura-femore'], sources: ['morse'], desc: ['Soglie indicative: **< 25** basso, **25–44** moderato, **≥ 45** alto; **verifica le soglie adottate dalla tua struttura**. Rivaluta a ogni cambiamento clinico e dopo ogni caduta.'],
      scale: { groups: [
        { id: 'a', label: 'Caduta recente o nell’ultimo periodo', opts: [['No', 0], ['Sì', 25]] },
        { id: 'b', label: 'Diagnosi secondaria (più di una diagnosi)', opts: [['No', 0], ['Sì', 15]] },
        { id: 'c', label: 'Ausilio per la deambulazione', opts: [['Nessuno / riposo a letto / assistenza infermieristica', 0], ['Stampelle, bastone, deambulatore', 15], ['Si appoggia ai mobili', 30]] },
        { id: 'd', label: 'Terapia endovenosa o accesso venoso', opts: [['No', 0], ['Sì', 20]] },
        { id: 'e', label: 'Andatura', opts: [['Normale, a letto, in carrozzina', 0], ['Debole', 10], ['Compromessa', 20]] },
        { id: 'f', label: 'Stato mentale', opts: [['Consapevole dei propri limiti', 0], ['Sopravvaluta le proprie capacità o dimentica le limitazioni', 15]] }],
        bands: [{ max: 24, label: 'Rischio basso', level: 'ok', text: 'Misure di sicurezza di base.' }, { max: 44, label: 'Rischio moderato', level: 'warn', text: 'Adotta interventi di prevenzione standard (ambiente, ausili, supervisione).' }, { max: 125, label: 'Rischio alto', level: 'danger', text: 'Attiva il piano di prevenzione ad alto rischio: supervisione frequente, ausili, revisione farmaci, segnalazioni.' }] } }),

  S('tinetti', 'Tinetti POMA (equilibrio e andatura)', ['Tinetti', 'POMA', 'equilibrio', 'andatura', 'scala di Tinetti'], 'Valuta equilibrio (0–16) e andatura (0–12) per stimare il rischio di cadute nell’anziano (0–28).',
    { cat: 'Autonomia funzionale', rel: ['rischio-cadute', 'morse', 'osteoporosi', 'parkinson', 'frattura-femore'], sources: ['tinetti'], desc: ['Prova pratica in sicurezza (assistenza a fianco, sedia stabile, ambiente libero). Soglie indicative: **≤ 18** rischio alto, **19–23** moderato, **≥ 24** basso. Versione sintetica parafrasata: consulta la versione ufficiale.'],
      scale: { groups: [
        { id: 'b1', label: 'Equilibrio da seduto', opts: [['Si inclina o scivola', 0], ['Stabile e sicuro', 1]] },
        { id: 'b2', label: 'Alzarsi dalla sedia', opts: [['Non riesce senza aiuto', 0], ['Ci riesce usando le braccia', 1], ['Ci riesce senza usare le braccia', 2]] },
        { id: 'b3', label: 'Tentativi di alzarsi', opts: [['Non ci riesce senza aiuto', 0], ['Ci riesce con più di un tentativo', 1], ['Ci riesce al primo tentativo', 2]] },
        { id: 'b4', label: 'Equilibrio in piedi immediato (primi 5 secondi)', opts: [['Instabile', 0], ['Stabile ma con ausilio o appoggio', 1], ['Stabile senza supporto', 2]] },
        { id: 'b5', label: 'Equilibrio in piedi', opts: [['Instabile', 0], ['Stabile ma a base larga o con ausilio', 1], ['Stabile a base stretta senza supporto', 2]] },
        { id: 'b6', label: 'Spinta leggera sullo sterno (3 volte)', opts: [['Inizia a cadere', 0], ['Barcolla, si afferra', 1], ['Stabile', 2]] },
        { id: 'b7', label: 'Occhi chiusi', opts: [['Instabile', 0], ['Stabile', 1]] },
        { id: 'b8', label: 'Giro di 360°', opts: [['Passi discontinui e instabile', 0], ['Passi continui o stabile (uno dei due)', 1], ['Passi continui e stabile', 2]] },
        { id: 'b9', label: 'Sedersi', opts: [['Insicuro (misura male, cade sulla sedia)', 0], ['Usa le braccia o movimento non fluido', 1], ['Sicuro e fluido', 2]] },
        { id: 'g1', label: 'Inizio della marcia', opts: [['Qualunque esitazione o più tentativi', 0], ['Nessuna esitazione', 1]] },
        { id: 'g2', label: 'Oscillazione del piede destro supera l’appoggio sinistro', opts: [['No', 0], ['Sì', 1]] },
        { id: 'g3', label: 'Il piede destro si solleva dal suolo', opts: [['No', 0], ['Sì', 1]] },
        { id: 'g4', label: 'Oscillazione del piede sinistro supera l’appoggio destro', opts: [['No', 0], ['Sì', 1]] },
        { id: 'g5', label: 'Il piede sinistro si solleva dal suolo', opts: [['No', 0], ['Sì', 1]] },
        { id: 'g6', label: 'Simmetria del passo', opts: [['Passo diseguale', 0], ['Passo simile', 1]] },
        { id: 'g7', label: 'Continuità del passo', opts: [['Si ferma o discontinuo', 0], ['Continuo', 1]] },
        { id: 'g8', label: 'Traiettoria', opts: [['Deviazione marcata', 0], ['Lieve/moderata o usa ausilio', 1], ['Dritta senza ausilio', 2]] },
        { id: 'g9', label: 'Tronco', opts: [['Marcata oscillazione o usa ausilio', 0], ['Nessuna oscillazione ma flette ginocchia/schiena o allarga le braccia', 1], ['Nessuna oscillazione né flessione né ausilio', 2]] },
        { id: 'g10', label: 'Base di appoggio nella marcia', opts: [['Talloni distanti', 0], ['Talloni quasi a contatto', 1]] }],
        bands: [{ max: 18, label: 'Rischio di caduta alto', level: 'danger', text: 'Attiva il piano di prevenzione e valuta fisioterapia e ausili.' }, { max: 23, label: 'Rischio moderato', level: 'warn', text: 'Interventi mirati su equilibrio, ambiente e farmaci.' }, { max: 28, label: 'Rischio basso', level: 'ok', text: 'Mantieni attività fisica e controlli periodici.' }] } }),
];
