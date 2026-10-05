// Struttura delle sezioni per tipo di scheda (ogni scheda puo' sovrascriverla con `layout`).
export const LAYOUTS = {
  patho: [
    ['anat', 'Anatomia di riferimento'], ['fisio', 'Fisiopatologia'], ['cause', 'Cause e fattori di rischio'],
    ['sintomi', 'Sintomi'], ['segni', 'Segni'], ['esami', 'Esami'], ['dx', 'Diagnosi medica'], ['tratt', 'Trattamento'],
    ['farmaci', 'Farmaci'], ['assist', 'Assistenza infermieristica'], ['monit', 'Monitoraggio'], ['compl', 'Complicanze'],
    ['edu', 'Educazione del paziente'], ['ndx', 'Diagnosi infermieristiche correlate'],
  ],
  anat: [
    ['pos', 'Posizione'], ['rapp', 'Rapporti anatomici'], ['vasc', 'Vascolarizzazione e innervazione'], ['funz', 'Funzione'],
    ['fisio', 'Fisiologia'], ['pat', 'Principali patologie'], ['inf', 'Note infermieristiche'],
  ],
  physio: [
    ['conc', 'Concetto'], ['mecc', 'Meccanismo'], ['reg', 'Regolazione'], ['val', 'Valori di riferimento'],
    ['alt', 'Quando si altera'], ['inf', 'Rilevanza infermieristica'],
  ],
  proc: [
    ['ind', 'Indicazioni'], ['ctr', 'Controindicazioni e precauzioni'], ['mat', 'Materiale'], ['prep', 'Preparazione'], ['tec', 'Tecnica'],
    ['mon', 'Monitoraggio'], ['compl', 'Complicanze'], ['doc', 'Cosa documentare'], ['err', 'Errori da evitare'],
  ],
  dev: [
    ['cos', 'Cos’è'], ['dove', 'Dove viene posizionato'], ['perche', 'Perché si usa'], ['funz', 'Funzionamento'],
    ['gest', 'Gestione infermieristica'], ['ctrl', 'Controlli'], ['compl', 'Complicanze'], ['all', 'Segnali d’allarme'],
  ],
  tube: [
    ['cod', 'Colore e additivo'], ['ese', 'Esami principali'], ['vol', 'Riempimento'], ['mix', 'Miscelazione'],
    ['cons', 'Conservazione e trasporto'], ['cent', 'Centrifugazione'], ['err', 'Errori preanalitici'],
  ],
  exam: [
    ['cos', 'Cos’è'], ['rif', 'Valori di riferimento'], ['aum', 'Se aumentato'], ['dim', 'Se ridotto'],
    ['prelievo', 'Prelievo e preparazione'], ['inf', 'Implicazioni infermieristiche'],
  ],
  drug: [
    ['cl', 'Classe e meccanismo'], ['ind', 'Indicazioni'], ['esempi', 'Principi attivi (esempi)'], ['av', 'Effetti avversi'],
    ['prec', 'Precauzioni e controindicazioni'], ['inf', 'Assistenza infermieristica'], ['mon', 'Monitoraggio'], ['edu', 'Educazione del paziente'],
  ],
  ndx: [
    ['def', 'Definizione'], ['pes', 'Formulazione (PES / PRS)'], ['fatt', 'Fattori correlati o di rischio'], ['segni', 'Segni e sintomi caratteristici'],
    ['obj', 'Obiettivi e risultati attesi'], ['int', 'Interventi'], ['val', 'Rivalutazione'],
  ],
  care: [['cos', 'Contenuto']],
  emerg: [
    ['quando', 'Quando'], ['valut', 'Valutazione'], ['azioni', 'Azioni'], ['alg', 'Algoritmo (didattico)'], ['inf', 'Ruolo infermieristico'], ['err', 'Errori comuni'],
  ],
  term: [['def', 'Definizione'], ['ctx', 'Contesto clinico'], ['dd', 'Possibili cause e associazioni'], ['inf', 'Cosa osservare e riferire']],
  sign: [['def', 'Definizione'], ['ctx', 'Contesto clinico'], ['dd', 'Possibili cause e associazioni'], ['inf', 'Cosa osservare e riferire']],
  spec: [['cos', 'Ambito']],
  scale: [['cos', 'Descrizione']],
  calc: [['cos', 'Descrizione']],
};

/** Sezioni aperte di default. */
export const OPEN = { proc: ['tec'], patho: ['fisio'], dev: ['cos'], tube: ['cod'], emerg: ['azioni', 'alg'], anat: ['pos', 'funz'], exam: ['cos', 'rif'] };

/** Tipi per cui mostrare l'avviso "verifica protocollo locale / fonte ufficiale". */
export const VERIFY = {
  proc: 'Verifica sempre il protocollo aziendale e le istruzioni d’uso dei dispositivi in dotazione prima di eseguire la procedura.',
  dev: 'Le indicazioni dipendono dal modello e dal protocollo della struttura: verifica scheda tecnica e procedura locale.',
  tube: 'Colori, additivi e volumi variano per produttore e laboratorio: confronta con il manuale prelievi della tua struttura.',
  drug: 'Scheda didattica senza posologie: per dosi, diluizioni e compatibilità fare riferimento alla prescrizione, al RCP/scheda tecnica AIFA e al protocollo locale.',
  emerg: 'Algoritmo didattico. Non sostituisce linee guida e protocolli clinici operativi (es. ERC/IRC) né la formazione certificata (BLSD, ALS, ATLS…).',
  exam: 'Gli intervalli di riferimento variano per metodica, laboratorio, età e sesso: fa fede il referto del laboratorio.',
  patho: 'Contenuto didattico di supporto allo studio e al ragionamento clinico. Per decisioni cliniche usa linee guida aggiornate e protocolli della struttura.',
};

export const DEFAULT_SOURCES = {
  patho: ['textbooks'], anat: ['textbooks'], physio: ['textbooks'], proc: ['textbooks'], dev: ['textbooks'], tube: ['clsi-gp41', 'who-phleb'],
  exam: ['textbooks'], drug: ['aifa', 'textbooks'], ndx: ['nanda', 'textbooks'], care: ['textbooks'], emerg: ['erc'], term: ['textbooks'], sign: ['textbooks'],
  spec: ['textbooks'], scale: [], calc: ['mn-rac'],
};
