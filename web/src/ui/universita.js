// Università: percorso di laurea in Infermieristica, contenuti per anno e materie di base. Tutte le schede sono quelle dell'app, raggruppate per materia.
import { esc, icon } from '../core/dom.js';
import { ALL, get } from '../core/data.js';
import { pageHead, itemRow } from './common.js';

const PROF = ['codice-deontologico', 'profilo-normativo', 'responsabilita-professionale', 'consenso-dat', 'privacy-segreto', 'contenzione', 'tso-salute-mentale', 'rischio-clinico', 'sicurezza-operatore', 'isolamento-precauzioni', 'calendario-vaccinale', 'contraccezione', 'assistenza-territoriale', 'cure-palliative'];
const GROUPS = [
  ['Il percorso di laurea', (e) => e.cat === 'Percorso di laurea'],
  ['Scienze di base e fisiologia', (e) => e.type === 'physio' && e.cat === 'Scienze di base'],
  ['Microbiologia, patologia, igiene, farmacologia, nutrizione', (e) => e.type === 'care' && ['Scienze di base', 'Prevenzione', 'Farmacologia', 'Prevenzione e assistenza'].includes(e.cat)],
  ['Scienze umane, teorie e organizzazione', (e) => e.type === 'care' && ['Scienze umane', 'Fondamenti dell’infermieristica', 'Organizzazione'].includes(e.cat)],
  ['Etica, diritto e professione', (e) => (e.type === 'care' && e.cat === 'Etica e diritto') || PROF.includes(e.id)],
  ['Metodologia, lingua e informatica', (e) => e.type === 'care' && e.cat === 'Metodologia'],
  ['Area critica, valutazione clinica e calcoli', (e) => e.type === 'care' && ['Area critica', 'Valutazione clinica', 'Calcoli'].includes(e.cat)],
];

export function renderUniversita(root) {
  const used = new Set();
  const sections = GROUPS.map(([label, fn]) => {
    const list = ALL.filter((e) => !used.has(e.id) && fn(e)).sort((a, b) => a.title.localeCompare(b.title, 'it'));
    if (label === 'Il percorso di laurea') { const order = ['percorso-laurea', 'anno-1-contenuti', 'anno-2-contenuti', 'anno-3-contenuti', 'tirocinio-guida', 'prova-finale-abilitazione', 'dopo-la-laurea']; list.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id)); }
    list.forEach((e) => used.add(e.id));
    return list.length ? `<div><div class="sec-title"><h2>${esc(label)}</h2><span class="badge">${list.length}</span></div><div class="list">${list.map((e) => itemRow(e)).join('')}</div></div>` : '';
  }).join('');
  const start = get('percorso-laurea');
  root.innerHTML = `<div class="page stack-lg">
    ${pageHead({ title: 'Università', sub: 'Laurea in Infermieristica: percorso, materie e tirocinio', icon: 'graduation-cap', c: '--c-studio' })}
    <div class="callout note">${icon('info')}<div><b>Mappa indicativa.</b> I contenuti seguono il quadro nazionale della classe L/SNT1 (180 CFU). Il piano di studi ufficiale, i programmi e le propedeuticità dell’Università di Firenze sono sul sito del corso: per l’esame vale il programma del docente.</div></div>
    ${start ? `<button class="btn block" data-go="/e/percorso-laurea">${icon('graduation-cap')}Inizia dal percorso di laurea</button>` : ''}
    <div class="row wrap"><button class="btn sm ghost" data-go="/studio">${icon('graduation-cap')}Quiz e flashcard</button><button class="btn sm ghost" data-go="/studio/casi">${icon('clipboard-list')}Casi clinici</button><button class="btn sm ghost" data-go="/assistente">${icon('robot')}Chiedi all’assistente</button></div>
    ${sections}
  </div>`;
  return { title: 'Università', tab: 'home' };
}
