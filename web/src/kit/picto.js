// Pittogrammi: associa a un testo clinico un'icona e un colore (regole su parole chiave). Nessuna immagine esterna.
import { secIcon } from './digest.js';

const R = (re, icon, color) => ({ re, icon, color });
const RULES = [
  R(/ipotermi|cute fredda|brivid|freddo/i, 'thermometer-snowflake', '#0284c7'),
  R(/febbr|ipertermi|temperatur|piress/i, 'thermometer', '#dc2626'),
  R(/emorragi|sanguin|ematom|sangue|ematur|melena|emottisi/i, 'droplet', '#dc2626'),
  R(/dolor|algia|crampi|colica|fastidio|bruciore|prurito/i, 'zap', '#e11d48'),
  R(/dispnea|respir|tosse|ossigen|spo|polmon|apnea|stridore|sibil|ventilaz|bronc/i, 'wind', '#0284c7'),
  R(/cuore|cardi|tachicard|bradicard|aritm|polso|pressione arter|ipotens|ipertens|ecg|palpitaz|coronar/i, 'heart-pulse', '#e11d48'),
  R(/cervell|neurolog|confusion|coscienza|vertigin|cefalea|ictus|convulsion|cognit|delirium|agitaz|sonnolenz|glasgow/i, 'brain', '#7c3aed'),
  R(/occhi|vista|visiv|pupill|ittero|sclera/i, 'eye', '#d97706'),
  R(/orecch|udito|acufen/i, 'ear', '#0d9488'),
  R(/glicem|glucos|zucchero|diabet|insulin|iper?glic|ipoglic/i, 'candy', '#c026d3'),
  R(/urin|uria\b|diuresi|oliguri|vescic|minzion|catetere vescicale|renal|reni|nicturia|disuria/i, 'droplets', '#0891b2'),
  R(/dipsia|sete\b|bocca secca|disidrataz/i, 'droplet', '#0284c7'),
  R(/fagia|fame\b|ponderale|dimagr|calo di peso|aumento di peso|obesit/i, 'scale', '#65a30d'),
  R(/visione|offuscat|vista|diplopia|retinopat/i, 'eye', '#d97706'),
  R(/nausea|vomit|digest|stomac|gastr|addom|intestin|alvo|feci|diarre|stipsi|reflusso|deglutiz/i, 'stomach', '#16a34a'),
  R(/appetito|peso|dimagr|obes|aliment|dieta|nutri|idrataz|bere|liquidi/i, 'utensils', '#65a30d'),
  R(/cute|eritema|rash|lesion|ferit|piaga|ulcer|medicazion|cicatri|edema|gonfior|tumefaz/i, 'bandage', '#ea580c'),
  R(/farmac|antibiotic|terapia|compress|somministr|analges|antidolor|dose|rcp/i, 'pill', '#2563eb'),
  R(/iniezion|endoven|puntura|prelievo|vena|venos|accesso|catetere|ago\b|infusion|fleb|garrott/i, 'syringe', '#2563eb'),
  R(/esam|laborator|analis|coltur|campion|provett|marcator|emocromo|lattati|referto/i, 'test-tube', '#0d9488'),
  R(/microscop|biops|citolog|istolog|patologia/i, 'microscope', '#0d9488'),
  R(/infezion|batter|virus|germi|sepsi|microrganism|contagi|isolamento|colonizz|streptococc|staphylococc|haemophil|klebsiella|escherichia|pseudomonas|gram-|sars|influenz|funghi|candida|patogen/i, 'bug', '#16a34a'),
  R(/igiene|lavagg|disinfett|asep|steril|guanti|dpi|clorexidina|barriera|mani\b/i, 'shield-check', '#0ea5e9'),
  R(/stanchezz|debolezza|astenia|affatic|riposo|sonno|allett|letto|malessere/i, 'bed', '#64748b'),
  R(/mobilizz|cadut|deambul|postura|posizion|cammin|movimento|alzar/i, 'person-standing', '#7c3aed'),
  R(/mano|dita|presa|arto/i, 'hand', '#d97706'),
  R(/osso|ossa|frattur|articol|scheletr|artrit|colonna/i, 'bone', '#a16207'),
  R(/educazion|spiega|consigli|informa|insegna|counsel/i, 'graduation-cap', '#0b7285'),
  R(/document|cartella|registr|scrivi|firma|checklist|segnal/i, 'clipboard-check', '#0b7285'),
  R(/monitor|controll|valuta|parametri|misura|sorveglian|osserva|frequenz/i, 'activity', '#0ea5e9'),
  R(/chiama|allarm|avvis|emergenz|critic|grave|shock|urgent|subito|escalation/i, 'siren', '#dc2626'),
  R(/minuti|ore\b|tempo|entro|giorni|settiman|durata/i, 'clock', '#64748b'),
  R(/fumo|sigaret|alcol|tabagis/i, 'cigarette', '#78716c'),
  R(/bambin|neonat|pediatr|gravid|gestaz|latte/i, 'baby', '#db2777'),
  R(/ansia|stress|umore|depress|paura|emotiv|psicolog/i, 'frown', '#7c3aed'),
  R(/anzian|persona|paziente|famigli|caregiver|assistit/i, 'users', '#0b7285'),
  R(/materiale|occorrente|kit|set\b|dispositiv|presidi/i, 'layers', '#475569'),
  R(/errore|evita|vietato|non \w+ mai|mai /i, 'ban', '#dc2626'),
];

/** {icon, color} per una voce di testo; se nessuna regola corrisponde si usa l'icona della sezione. */
const FALLBACK = { sintomi: 'stethoscope', segni: 'activity', cause: 'search', tratt: 'syringe', assist: 'clipboard-list', monit: 'activity', compl: 'triangle-alert', edu: 'graduation-cap' };
export function pictoFor(text, secKey = '', fallbackColor = '#0b7285') {
  const t = String(text || '');
  for (const r of RULES) if (r.re.test(t)) return { icon: r.icon, color: r.color };
  return { icon: FALLBACK[secKey] || secIcon(secKey) || 'circle', color: fallbackColor };
}
