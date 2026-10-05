// Tipi di scheda, colori e ordine dei gruppi nella mappa dei collegamenti clinici.
export const TYPES = {
  anat:   { label: 'Anatomia',               plural: 'Anatomia',                icon: 'bone',            c: '--c-anatomia' },
  physio: { label: 'Fisiologia',             plural: 'Fisiologia',              icon: 'activity',        c: '--c-fisiologia' },
  patho:  { label: 'Patologia',              plural: 'Patologie',               icon: 'stethoscope',     c: '--c-patologie' },
  sign:   { label: 'Segno / sintomo',        plural: 'Segni e sintomi',         icon: 'thermometer',     c: '--c-terminologia' },
  term:   { label: 'Termine',                plural: 'Terminologia',            icon: 'languages',       c: '--c-terminologia' },
  exam:   { label: 'Esame',                  plural: 'Esami',                   icon: 'microscope',      c: '--c-esami' },
  proc:   { label: 'Procedura',              plural: 'Procedure',               icon: 'syringe',         c: '--c-procedure' },
  tube:   { label: 'Provetta',               plural: 'Provette',                icon: 'test-tube',       c: '--c-provette' },
  dev:    { label: 'Dispositivo',            plural: 'Dispositivi',             icon: 'cable',           c: '--c-dispositivi' },
  drug:   { label: 'Farmaco / classe',       plural: 'Farmaci',                 icon: 'pill',            c: '--c-farmaci' },
  care:   { label: 'Assistenza',             plural: 'Assistenza infermieristica', icon: 'clipboard-list', c: '--c-assistenza' },
  ndx:    { label: 'Diagnosi infermieristica', plural: 'Diagnosi infermieristiche', icon: 'clipboard-check', c: '--c-assistenza' },
  scale:  { label: 'Scala di valutazione',   plural: 'Scale',                   icon: 'gauge',           c: '--c-scale' },
  calc:   { label: 'Calcolo',                plural: 'Calcoli',                 icon: 'calculator',      c: '--c-calcolatore' },
  emerg:  { label: 'Emergenza',              plural: 'Emergenze',               icon: 'siren',           c: '--c-emergenze' },
  schema: { label: 'Schema',               plural: 'Schemi',                  icon: 'network',         c: '--c-schemi' },
  spec:   { label: 'Specialità',             plural: 'Specialistiche',          icon: 'hospital',        c: '--c-specialistiche' },
};

/** Ordine e titolo dei gruppi nella mappa dei collegamenti. */
export const MAP_ORDER = ['anat', 'physio', 'patho', 'sign', 'exam', 'tube', 'ndx', 'care', 'proc', 'dev', 'drug', 'scale', 'calc', 'emerg', 'schema', 'spec', 'term'];

export const rgbVar = (t) => `var(${(TYPES[t] || TYPES.term).c})`;

/** Moduli della home. */
export const MODULES = [
  { id: 'anatomia',      route: '/anatomia',      name: 'Anatomia 3D',        sub: 'Corpo interattivo, organi e sistemi', icon: 'bone',           c: '--c-anatomia',      count: 'anat' },
  { id: 'assistenza',    route: '/assistenza',    name: 'Assistenza',         sub: 'Processo, accertamento, NANDA-I',     icon: 'clipboard-list', c: '--c-assistenza',    count: 'ndx' },
  { id: 'procedure',     route: '/procedure',     name: 'Procedure',          sub: 'Passo-passo illustrate',              icon: 'syringe',        c: '--c-procedure',     count: 'proc' },
  { id: 'provette',      route: '/provette',      name: 'Provette ed esami',  sub: 'Colori, additivi, ordine di prelievo', icon: 'test-tubes',     c: '--c-provette',      count: 'exam' },
  { id: 'dispositivi',   route: '/dispositivi',   name: 'Drenaggi e dispositivi', sub: 'Cateteri, drenaggi, accessi',      icon: 'cable',          c: '--c-dispositivi',   count: 'dev' },
  { id: 'patologie',     route: '/patologie',     name: 'Patologie',          sub: 'Dalla fisiopatologia all’assistenza', icon: 'stethoscope',    c: '--c-patologie',     count: 'patho' },
  { id: 'specialistiche',route: '/specialistiche',name: 'Specialistiche',     sub: 'Dalla medicina alla sala operatoria', icon: 'hospital',       c: '--c-specialistiche',count: 'spec' },
  { id: 'emergenze',    route: '/emergenze',     name: 'ABCDE ed emergenze', sub: 'Algoritmi didattici',                 icon: 'siren',          c: '--c-emergenze',     count: 'emerg' },
  { id: 'farmaci',       route: '/farmaci',       name: 'Farmacologia',       sub: 'Classi, vie, 10 G, high-alert',       icon: 'pill',           c: '--c-farmaci',       count: 'drug' },
  { id: 'calcolatore',   route: '/calcolatore',   name: 'Calcolatore',        sub: 'Dosi, diluizioni, mL/h, bilancio',    icon: 'calculator',     c: '--c-calcolatore',   count: 'calc' },
  { id: 'terminologia',  route: '/glossario',     name: 'Terminologia',       sub: 'Dizionario medico collegato',         icon: 'languages',      c: '--c-terminologia',  count: 'term+sign' },
  { id: 'schemi',        route: '/schemi',        name: 'Schemi',             sub: 'Mappe, flussi e tabelle per studiare', icon: 'network',        c: '--c-schemi',        count: 'schema' },
  { id: 'scale',         route: '/scale',         name: 'Scale e valutazione',sub: 'Glasgow, NEWS2, Braden, Barthel…',    icon: 'gauge',          c: '--c-scale',         count: 'scale' },
];
