// Schemi di studio (2): confronti rapidi su IST, vaccinazioni, emergenze ostetriche e pediatriche.
const S = (id, title, aliases, cat, summary, sch, pun, err, rel = [], src = []) => ({ id, type: 'schema', title, aliases, cat, summary, sections: { sch, pun, ...(err ? { err } : {}) }, rel, sources: ['textbooks', ...src], rev: '2026-10', v: '1.0', verify: false });
const T = (head, rows) => ({ table: { head, rows } });

export default [
  S('schema-ist', 'IST a confronto', ['IST schema', 'malattie sessualmente trasmissibili tabella', 'confronto infezioni sessuali'], 'Patologie',
    'Le principali infezioni sessualmente trasmesse: agente, quadro tipico, esame chiave e approccio terapeutico (senza posologie).',
    [T(['Infezione', 'Agente', 'Quadro tipico', 'Esame chiave', 'Terapia (prescrizione medica)'], [
      ['[[clamidia]]', 'Batterio (*Chlamydia trachomatis*)', 'Spesso asintomatica; uretrite, cervicite', 'NAAT su urine del primo getto o tamponi', 'Antibiotico; trattare i partner'],
      ['[[gonorrea]]', 'Batterio (*Neisseria gonorrhoeae*)', 'Secrezione purulenta, disuria; faringe e retto spesso asintomatici', 'NAAT + coltura con antibiogramma', 'Antibiotico iniettivo; resistenze in aumento'],
      ['[[sifilide]]', 'Batterio (*Treponema pallidum*)', 'Ulcera indolore → rash palmo-plantare → latenza', 'Sierologia treponemica e non treponemica', 'Penicillina'],
      ['[[tricomoniasi]]', 'Protozoo', 'Perdite schiumose, prurito', 'NAAT', 'Metronidazolo/tinidazolo (no alcol)'],
      ['[[herpes-genitale]]', 'Virus (HSV-1/2)', 'Vescicole dolorose ricorrenti', 'PCR della lesione', 'Antivirali (episodica o soppressiva)'],
      ['[[hpv-condilomi]]', 'Virus (HPV)', 'Condilomi; tipi ad alto rischio → tumori', 'Clinica; HPV test nello screening', 'Trattamenti locali; **vaccino** preventivo'],
      ['[[hiv-aids]]', 'Virus (HIV)', 'Spesso asintomatica per anni', 'Test combinato antigene/anticorpo', 'ART a vita; **U=U**; PrEP/PEP'],
      ['[[mpox]]', 'Virus (mpox)', 'Lesioni cutanee e mucose, febbre, linfonodi', 'PCR della lesione', 'Supporto; vaccino MVA-BN nelle categorie a rischio'],
    ])],
    ['Molte IST sono **asintomatiche**: test periodici nelle persone a rischio.', 'Una IST diagnosticata = offrire test per HIV, sifilide, epatiti.', 'Trattare e informare i partner; preservativo e vaccini (HPV, epatite B, mpox nei gruppi indicati).'],
    ['Considerare guarito chi non ha più sintomi senza completare la terapia.', 'Usare la PrEP come protezione dalle altre IST.'],
    ['ist-panoramica', 'prep-pep-hiv', 'tampone-nasofaringeo', 'antibiotici', 'antivirali'], ['who-sti', 'cdc-sti', 'iss-ist']),

  S('schema-vaccini-eta', 'Vaccinazioni per età (sintesi)', ['schema vaccini', 'calendario vaccinale schema', 'vaccini per età'], 'Prevenzione',
    'Le tappe principali del calendario vaccinale italiano (PNPV 2023–2025 prorogato al 2026): verificare sempre il calendario regionale.',
    [T(['Età', 'Vaccinazioni principali'], [
      ['Neonato–lattante', 'Prevenzione RSV (anticorpo monoclonale), esavalente, pneumococco, meningococco B, rotavirus'],
      ['12–15 mesi', 'MPRV (morbillo, parotite, rosolia, varicella), meningococco ACWY/C, richiami'],
      ['5–6 anni', 'Richiamo dTpa-IPV, seconda dose MPRV'],
      ['11–12 anni', '**HPV** (ragazze e ragazzi)'],
      ['Adolescenza', 'Richiamo dTpa-IPV, meningococco ACWY'],
      ['Gravidanza', 'dTpa (27ª–36ª settimana), influenza, COVID-19 secondo circolari'],
      ['Adulti', 'dT/dTpa ogni 10 anni; categorie a rischio secondo condizione'],
      ['≥ 60–65 anni', 'Influenza annuale, pneumococco, herpes zoster ricombinante, COVID-19, RSV secondo indicazioni'],
    ])],
    ['Le **obbligatorie** per la scuola dell’infanzia sono 10 (L. 119/2017).', 'Registrare tutto nell’anagrafe vaccinale.'],
    ['Rinviare per un semplice raffreddore.'],
    ['calendario-vaccinale', 'vaccinazione-procedura', 'vaccini'], ['mds-pnpv']),

  S('schema-4t-epp', 'Emorragia post partum: le 4T', ['4T emorragia', 'cause emorragia post partum'], 'Emergenza',
    'Le quattro cause dell’emorragia dopo il parto e la risposta iniziale.',
    [{ svg: 'mnemo', items: [['T', 'Tono', 'Atonia uterina (la più frequente): massaggio del fondo, uterotonici, svuotare la vescica.'], ['T', 'Trauma', 'Lacerazioni, ematomi, rottura o inversione uterina: ispezione e riparazione.'], ['T', 'Tessuto', 'Placenta o membrane ritenute: verifica della placenta, revisione.'], ['T', 'Trombina', 'Coagulopatie, CID, anticoagulanti: esami, fibrinogeno, emocomponenti.']] }],
    ['Chiama aiuto subito e **quantifica** le perdite pesando garze e teli.', 'Acido tranexamico precoce secondo protocollo.'],
    ['Stimare le perdite “a occhio”.', 'Attendere l’ipotensione: è un segno tardivo.'],
    ['emorragia-post-partum', 'uterotonici-tocolitici', 'cid'], ['who-mnh', 'iss-snlg']),

  S('schema-semaforo-febbre', 'Febbre nel bambino: il semaforo', ['semaforo NICE', 'segni allarme febbre bambino'], 'Pediatria',
    'Valutazione rapida del bambino febbrile per livelli di rischio (adattato da NICE).',
    [T(['', 'Verde (basso rischio)', 'Giallo (intermedio)', 'Rosso (alto rischio)'], [
      ['Colorito', 'Normale', 'Pallore riferito', 'Pallido, marezzato, cianotico'],
      ['Attività', 'Sorride, sveglio, pianto vigoroso', 'Poco reattivo, non sorride', 'Non si sveglia o non resta sveglio, pianto flebile o continuo'],
      ['Respiro', 'Normale', 'Alitamento nasale, tachipnea, SpO₂ ≤ 95%', 'Gemito, tachipnea marcata, rientramenti'],
      ['Circolo/idratazione', 'Cute e mucose normali', 'Mucose secche, scarsa alimentazione, riempimento capillare ≥ 3 s', 'Turgore cutaneo ridotto'],
      ['Altro', '—', 'Febbre ≥ 5 giorni, tumefazione articolare, età 3–6 mesi con T ≥ 39 °C', 'Età < 3 mesi con T ≥ 38 °C, petecchie non scompariscenti, rigidità nucale, convulsioni, deficit'],
    ])],
    ['Uno o più segni rossi = valutazione medica urgente.', 'Conta lo stato generale più del numero sul termometro.'],
    ['Dosare l’antipiretico senza considerare il peso.'],
    ['febbre-bambino', 'convulsioni-febbrili', 'paracetamolo'], ['nice-ng', 'sip-ped']),
];
