// Scale di valutazione con punteggio automatico. Contenuti parafrasati: verificare licenza e versione ufficiale in uso.
// groups: [{id, label, opts:[[testo, punti]]}]; bands: [{max, label, level, text}] (max incluso); special: 'news2'
const S = (id, title, aliases, summary, extra) => ({ id, type: 'scale', title, aliases, summary, cat: extra.cat, spec: extra.spec || [], sections: { cos: extra.desc }, rel: extra.rel || [], sources: extra.sources || [], rev: '2026-10', v: '1.0', verify: true, verifyText: 'Verifica la versione ufficiale della scala, la licenza d’uso e quella adottata dalla tua struttura. Il punteggio è di supporto, non sostituisce il giudizio clinico.', scale: extra.scale });

export default [
  S('glasgow', 'Glasgow Coma Scale (GCS)', ['GCS', 'scala di Glasgow', 'livello di coscienza'], 'Valuta il livello di coscienza con tre risposte: apertura degli occhi, risposta verbale, risposta motoria (3–15).',
    { cat: 'Neurologica', rel: ['cervello', 'ictus', 'meningite', 'abcde', 'epilessia'], sources: ['gcs'], desc: ['Si valuta la **migliore risposta** in ciascun ambito. Registra i tre punteggi separati (es. E3 V4 M5) oltre al totale.', 'Per stimolo doloroso usa pressione centrale (sopra-orbitaria o trapezio), non periferica solo.'],
      scale: { groups: [
        { id: 'e', label: 'Apertura degli occhi (E)', opts: [['Spontanea', 4], ['Alla voce', 3], ['Al dolore', 2], ['Nessuna', 1]] },
        { id: 'v', label: 'Risposta verbale (V)', opts: [['Orientata', 5], ['Confusa', 4], ['Parole inappropriate', 3], ['Suoni incomprensibili', 2], ['Nessuna', 1]] },
        { id: 'm', label: 'Risposta motoria (M)', opts: [['Obbedisce ai comandi', 6], ['Localizza il dolore', 5], ['Retrae al dolore', 4], ['Flessione anomala (decorticazione)', 3], ['Estensione (decerebrazione)', 2], ['Nessuna', 1]] }],
        bands: [{ max: 8, label: 'Trauma/compromissione grave', level: 'danger', text: 'GCS ≤ 8: coscienza gravemente compromessa; valuta la protezione delle vie aeree (ABCDE) e chiama il medico/team.' }, { max: 12, label: 'Moderata', level: 'warn', text: 'Compromissione moderata: monitoraggio ravvicinato e rivalutazione frequente.' }, { max: 15, label: 'Lieve / normale', level: 'ok', text: 'Una riduzione improvvisa di ≥ 2 punti è comunque un segnale d’allarme.' }] } }),

  S('news2', 'NEWS2 – National Early Warning Score 2', ['NEWS', 'NEWS 2', 'early warning score', 'score di allerta precoce'], 'Punteggio aggregato di parametri vitali che identifica precocemente il deterioramento clinico dell’adulto.',
    { cat: 'Allerta clinica', rel: ['parametri-vitali', 'sepsi', 'insufficienza-respiratoria', 'abcde', 'saturazione-spo2'], sources: ['rcp-news2'], desc: ['Sei parametri fisiologici (FR, SpO₂, aria/ossigeno, PA sistolica, FC, stato di coscienza, temperatura). Soglie: 0–4 rischio basso; **3 in un singolo parametro** richiede revisione urgente; 5–6 rischio medio (risposta urgente); ≥ 7 rischio alto (risposta di emergenza).', 'Scala SpO₂ 2 (88–92%) solo se prescritta per insufficienza respiratoria ipercapnica confermata.'],
      scale: { special: 'news2' } }),

  S('braden', 'Scala di Braden', ['Braden', 'rischio lesioni da pressione', 'lesioni da decubito'], 'Stima il rischio di sviluppare lesioni da pressione (6–23): più basso il punteggio, maggiore il rischio.',
    { cat: 'Cute e mobilità', rel: ['lesioni-da-pressione', 'cute', 'rischio-integrita-cutanea', 'bacino', 'piede-ossa'], sources: ['braden', 'npiap'], desc: ['Sei sottoscale: percezione sensoriale, umidità, attività, mobilità, nutrizione, frizione e scivolamento. Rivaluta a ogni cambio di condizione e secondo protocollo.', 'La scala è protetta da copyright (Braden & Bergstrom): le formulazioni qui sono sintetiche.'],
      scale: { groups: [
        { id: 'p', label: 'Percezione sensoriale', opts: [['Completamente limitata', 1], ['Molto limitata', 2], ['Lievemente limitata', 3], ['Nessuna limitazione', 4]] },
        { id: 'u', label: 'Umidità della cute', opts: [['Costantemente umida', 1], ['Molto umida', 2], ['Occasionalmente umida', 3], ['Raramente umida', 4]] },
        { id: 'a', label: 'Attività', opts: [['Allettato', 1], ['In poltrona', 2], ['Cammina occasionalmente', 3], ['Cammina frequentemente', 4]] },
        { id: 'm', label: 'Mobilità', opts: [['Completamente immobile', 1], ['Molto limitata', 2], ['Parzialmente limitata', 3], ['Nessuna limitazione', 4]] },
        { id: 'n', label: 'Nutrizione', opts: [['Molto scarsa', 1], ['Probabilmente inadeguata', 2], ['Adeguata', 3], ['Eccellente', 4]] },
        { id: 'f', label: 'Frizione e scivolamento', opts: [['Problema', 1], ['Problema potenziale', 2], ['Nessun problema apparente', 3]] }],
        bands: [{ max: 9, label: 'Rischio molto elevato', level: 'danger', text: 'Superficie antidecubito, riposizionamento programmato, protezione dei talloni, nutrizione e cura della cute.' }, { max: 12, label: 'Rischio elevato', level: 'danger', text: 'Piano di prevenzione intensivo e superfici adeguate.' }, { max: 14, label: 'Rischio moderato', level: 'warn', text: 'Riposizionamenti regolari, controllo cute, gestione umidità.' }, { max: 18, label: 'A rischio (lieve)', level: 'warn', text: 'Misure di base di prevenzione.' }, { max: 23, label: 'Nessun rischio apparente', level: 'ok', text: 'Rivaluta se cambiano le condizioni.' }] } }),

  S('barthel', 'Indice di Barthel', ['Barthel', 'autonomia nelle ADL', 'indice di Barthel'], 'Misura l’autonomia nelle attività di base della vita quotidiana (0–100).',
    { cat: 'Autonomia funzionale', rel: ['katz', 'mobilita-compromessa', 'deficit-cura-di-se', 'tinetti'], sources: ['barthel'], desc: ['Dieci attività valutate sulla capacità effettiva del paziente (non su ciò che potrebbe fare). Più alto = più autonomo.'],
      scale: { groups: [
        { id: 'a', label: 'Alimentazione', opts: [['Dipendente', 0], ['Aiuto parziale', 5], ['Indipendente', 10]] },
        { id: 'b', label: 'Bagno/doccia', opts: [['Dipendente', 0], ['Indipendente', 5]] },
        { id: 'c', label: 'Igiene personale', opts: [['Dipendente', 0], ['Indipendente', 5]] },
        { id: 'd', label: 'Vestirsi', opts: [['Dipendente', 0], ['Aiuto parziale', 5], ['Indipendente', 10]] },
        { id: 'e', label: 'Controllo intestinale', opts: [['Incontinente', 0], ['Occasionali incidenti', 5], ['Continente', 10]] },
        { id: 'f', label: 'Controllo vescicale', opts: [['Incontinente/cateterizzato', 0], ['Occasionali incidenti', 5], ['Continente', 10]] },
        { id: 'g', label: 'Uso del WC', opts: [['Dipendente', 0], ['Aiuto parziale', 5], ['Indipendente', 10]] },
        { id: 'h', label: 'Trasferimenti letto-sedia', opts: [['Non in grado', 0], ['Grande aiuto', 5], ['Piccolo aiuto', 10], ['Indipendente', 15]] },
        { id: 'i', label: 'Deambulazione', opts: [['Immobile', 0], ['In carrozzina autonomo', 5], ['Con aiuto', 10], ['Indipendente', 15]] },
        { id: 'j', label: 'Scale', opts: [['Non in grado', 0], ['Aiuto', 5], ['Indipendente', 10]] }],
        bands: [{ max: 20, label: 'Dipendenza totale', level: 'danger', text: 'Assistenza completa.' }, { max: 60, label: 'Dipendenza grave', level: 'danger', text: 'Assistenza sostanziale.' }, { max: 90, label: 'Dipendenza moderata', level: 'warn', text: 'Assistenza parziale.' }, { max: 99, label: 'Dipendenza lieve', level: 'ok', text: 'Quasi autonomo.' }, { max: 100, label: 'Indipendente', level: 'ok', text: 'Autonomia nelle ADL di base.' }] } }),

  S('katz', 'Indice di Katz (ADL)', ['Katz', 'ADL'], 'Sei funzioni di base (bagno, vestirsi, WC, trasferimenti, continenza, alimentazione): ognuna 1 (indipendente) o 0 (dipendente).',
    { cat: 'Autonomia funzionale', rel: ['barthel', 'deficit-cura-di-se'], sources: ['katz'], desc: ['Punteggio 6 = piena funzione; 4 = compromissione moderata; ≤ 2 = grave.'],
      scale: { groups: ['Fare il bagno', 'Vestirsi', 'Uso del WC', 'Trasferimenti', 'Continenza', 'Alimentazione'].map((l, i) => ({ id: 'k' + i, label: l, opts: [['Dipendente', 0], ['Indipendente', 1]] })),
        bands: [{ max: 2, label: 'Compromissione grave', level: 'danger', text: 'Necessita di assistenza in gran parte delle ADL.' }, { max: 4, label: 'Compromissione moderata', level: 'warn', text: 'Assistenza parziale.' }, { max: 6, label: 'Funzione conservata', level: 'ok', text: '6 = indipendente in tutte le funzioni.' }] } }),

  S('must', 'MUST – Malnutrition Universal Screening Tool', ['MUST', 'screening nutrizionale', 'malnutrizione'], 'Screening della malnutrizione per adulti: BMI, calo ponderale e malattia acuta con scarso apporto.',
    { cat: 'Nutrizione', rel: ['malnutrizione', 'nutrizione-squilibrata', 'nutrizione-enterale', 'calc-bmi'], sources: ['must'], desc: ['Somma di tre punteggi (0–2 ciascuno). 0 basso rischio; 1 rischio medio; ≥ 2 rischio alto: richiede intervento nutrizionale.'],
      scale: { groups: [
        { id: 'b', label: 'BMI (kg/m²)', opts: [['> 20', 0], ['18,5–20', 1], ['< 18,5', 2]] },
        { id: 'w', label: 'Calo di peso non intenzionale (3–6 mesi)', opts: [['< 5%', 0], ['5–10%', 1], ['> 10%', 2]] },
        { id: 'd', label: 'Malattia acuta e assenza di apporto > 5 giorni', opts: [['No', 0], ['Sì', 2]] }],
        bands: [{ max: 0, label: 'Rischio basso', level: 'ok', text: 'Cure di routine, ripeti lo screening.' }, { max: 1, label: 'Rischio medio', level: 'warn', text: 'Osserva e registra l’apporto per 3 giorni; rivaluta.' }, { max: 6, label: 'Rischio alto', level: 'danger', text: 'Intervento nutrizionale: invia al dietista/team nutrizionale.' }] } }),

  S('nrs-vas', 'Scale del dolore NRS / VAS', ['NRS', 'VAS', 'scala numerica del dolore', 'dolore'], 'Autovalutazione dell’intensità del dolore da 0 (assente) a 10 (massimo immaginabile).',
    { cat: 'Dolore', rel: ['dolore-fisiologia', 'dolore-acuto', 'dolore-cronico', 'flacc', 'painad'], desc: ['Chiedi: “Da 0 a 10, quanto è forte il dolore adesso?”. Valuta anche sede, qualità, fattori che migliorano/peggiorano e impatto funzionale; rivaluta dopo ogni intervento.'],
      scale: { groups: [{ id: 'n', label: 'Intensità del dolore', opts: Array.from({ length: 11 }, (_, i) => [String(i), i]) }],
        bands: [{ max: 0, label: 'Assente', level: 'ok', text: '' }, { max: 3, label: 'Lieve', level: 'ok', text: 'Misure non farmacologiche ± analgesico secondo prescrizione.' }, { max: 6, label: 'Moderato', level: 'warn', text: 'Analgesia secondo prescrizione e rivalutazione.' }, { max: 10, label: 'Severo', level: 'danger', text: 'Avvisa il medico: analgesia rapida e ricerca della causa.' }] } }),

  S('flacc', 'FLACC (dolore nel bambino e non collaborante)', ['FLACC', 'dolore pediatrico'], 'Osservazione comportamentale: volto, gambe, attività, pianto, consolabilità (0–10).',
    { cat: 'Dolore', rel: ['nrs-vas', 'painad', 'dolore-fisiologia'], sources: ['flacc'], desc: ['Per bambini 2 mesi–7 anni e persone che non riferiscono il dolore.'],
      scale: { groups: [
        { id: 'f', label: 'Volto', opts: [['Nessuna espressione particolare', 0], ['Smorfie/accigliato occasionale', 1], ['Mento tremante, mascella serrata', 2]] },
        { id: 'l', label: 'Gambe', opts: [['Normali/rilassate', 0], ['Agitate, tese', 1], ['Calci, gambe sollevate', 2]] },
        { id: 'a', label: 'Attività', opts: [['Tranquillo, si muove normalmente', 0], ['Si contorce, teso', 1], ['Inarcato, rigido, scatti', 2]] },
        { id: 'c', label: 'Pianto', opts: [['Nessun pianto', 0], ['Gemiti, lamenti', 1], ['Pianto continuo, urla', 2]] },
        { id: 'o', label: 'Consolabilità', opts: [['Rilassato', 0], ['Rassicurabile con tocco/voce', 1], ['Difficile da consolare', 2]] }],
        bands: [{ max: 0, label: 'Rilassato', level: 'ok', text: '' }, { max: 3, label: 'Disagio lieve', level: 'ok', text: '' }, { max: 6, label: 'Dolore moderato', level: 'warn', text: '' }, { max: 10, label: 'Dolore severo', level: 'danger', text: '' }] } }),

  S('qsofa', 'qSOFA', ['quick SOFA', 'sepsi screening'], 'Screening rapido al letto del paziente con sospetta infezione: frequenza respiratoria, stato mentale, pressione sistolica.',
    { cat: 'Allerta clinica', rel: ['sepsi', 'news2', 'abcde', 'shock'], sources: ['sepsis3'], desc: ['Un punto per ciascun criterio. ≥ 2 indica rischio più elevato di esito sfavorevole e richiede valutazione urgente; **un punteggio basso non esclude la sepsi**.'],
      scale: { groups: [
        { id: 'r', label: 'Frequenza respiratoria ≥ 22/min', opts: [['No', 0], ['Sì', 1]] },
        { id: 'm', label: 'Alterazione dello stato mentale (GCS < 15)', opts: [['No', 0], ['Sì', 1]] },
        { id: 's', label: 'Pressione sistolica ≤ 100 mmHg', opts: [['No', 0], ['Sì', 1]] }],
        bands: [{ max: 1, label: 'Basso rischio (non esclude sepsi)', level: 'warn', text: 'Se c’è sospetto clinico di sepsi procedi comunque con valutazione e protocollo.' }, { max: 3, label: 'Rischio elevato', level: 'danger', text: 'Attiva il percorso sepsi: allerta medica, lattati, emocolture, antibiotici e fluidi secondo protocollo.' }] } }),

  S('cpss', 'Cincinnati Prehospital Stroke Scale', ['FAST', 'Cincinnati', 'scala dell’ictus'], 'Tre segni per riconoscere un ictus: asimmetria del volto, deficit di forza di un braccio, disturbo del linguaggio.',
    { cat: 'Neurologica', rel: ['ictus', 'cervello', 'glasgow', 'fibrillazione-atriale'], sources: ['cpss'], desc: ['Un segno anomalo = alta probabilità di ictus. Annota **l’ora di insorgenza** (o ultima volta visto in buona salute) e attiva subito il percorso tempo-dipendente.'],
      scale: { groups: [
        { id: 'f', label: 'Asimmetria del volto (chiedi di sorridere)', opts: [['Normale', 0], ['Un lato si muove meno', 1]] },
        { id: 'a', label: 'Deficit del braccio (chiudere gli occhi e alzare le braccia 10 s)', opts: [['Nessun cedimento', 0], ['Un braccio cede/non si alza', 1]] },
        { id: 's', label: 'Linguaggio (ripetere una frase semplice)', opts: [['Normale', 0], ['Parole confuse/disartria/afasia', 1]] }],
        bands: [{ max: 0, label: 'Nessun segno', level: 'ok', text: 'Non esclude ictus (es. circolo posteriore): se il sospetto persiste, allerta.' }, { max: 3, label: 'Sospetto ictus', level: 'danger', text: 'Emergenza: chiama il medico/118, registra l’orario di insorgenza e controlla glicemia.' }] } }),
];
