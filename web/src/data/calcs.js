// Calcolatore infermieristico: ogni risultato mostra il procedimento. inputs: [{id,label,unit,def}]
import { fmt } from '../core/dom.js';

const C = (id, title, aliases, summary, inputs, run, extra = {}) => ({
  id, type: 'calc', title, aliases, summary, cat: extra.cat || 'Terapia', sections: { cos: extra.desc || summary }, rel: extra.rel || [], sources: ['mn-rac'], rev: '2026-10', v: '1.0', verify: true,
  verifyText: 'Il calcolo è di supporto: verifica sempre prescrizione, unità di misura e dose con il doppio controllo secondo il protocollo aziendale.', calc: { inputs, run },
});
const f = (n, d = 2) => fmt(n, d);

export default [
  C('calc-dose', 'Dose da mg/kg', ['dosaggio per peso', 'mg/kg'], 'Calcola la dose totale a partire dalla dose per chilo prescritta.',
    [{ id: 'dk', label: 'Dose prescritta', unit: 'mg/kg' }, { id: 'p', label: 'Peso', unit: 'kg' }],
    (v) => { const r = v.dk * v.p; return { result: `${f(r)} mg`, steps: [`Dose = dose per kg × peso`, `${f(v.dk)} mg/kg × ${f(v.p)} kg = ${f(r)} mg`] }; },
    { rel: ['calc-volume', 'farmaci-principi'] }),
  C('calc-volume', 'Volume da somministrare', ['mL da prelevare', 'dose e concentrazione'], 'Quanti mL servono per ottenere la dose prescritta, data la concentrazione della fiala/soluzione.',
    [{ id: 'd', label: 'Dose da somministrare', unit: 'mg' }, { id: 'c', label: 'Concentrazione', unit: 'mg/mL' }],
    (v) => { const r = v.d / v.c; return { result: `${f(r)} mL`, steps: ['Volume = dose richiesta ÷ concentrazione', `${f(v.d)} mg ÷ ${f(v.c)} mg/mL = ${f(r)} mL`] }; },
    { rel: ['calc-dose', 'calc-percentuale'] }),
  C('calc-diluizione', 'Diluizione (C₁V₁ = C₂V₂)', ['diluire', 'C1V1'], 'Quanto prelevare dalla soluzione concentrata per ottenere un volume a concentrazione desiderata.',
    [{ id: 'c1', label: 'Concentrazione disponibile (C₁)', unit: 'mg/mL' }, { id: 'c2', label: 'Concentrazione desiderata (C₂)', unit: 'mg/mL' }, { id: 'v2', label: 'Volume finale desiderato (V₂)', unit: 'mL' }],
    (v) => { const v1 = (v.c2 * v.v2) / v.c1; return { result: `Prelevare ${f(v1)} mL e portare a ${f(v.v2)} mL (solvente: ${f(v.v2 - v1)} mL)`, steps: ['C₁ × V₁ = C₂ × V₂  →  V₁ = (C₂ × V₂) ÷ C₁', `V₁ = (${f(v.c2)} × ${f(v.v2)}) ÷ ${f(v.c1)} = ${f(v1)} mL`, `Solvente = V₂ − V₁ = ${f(v.v2)} − ${f(v1)} = ${f(v.v2 - v1)} mL`] }; }),
  C('calc-infusione', 'Velocità di infusione (mL/h)', ['mL/h', 'pompa infusionale'], 'Velocità da impostare sulla pompa per infondere un volume in un dato tempo.',
    [{ id: 'v', label: 'Volume da infondere', unit: 'mL' }, { id: 't', label: 'Durata', unit: 'ore' }],
    (v) => { const r = v.v / v.t; return { result: `${f(r)} mL/h`, steps: ['Velocità = volume ÷ tempo', `${f(v.v)} mL ÷ ${f(v.t)} h = ${f(r)} mL/h`] }; },
    { rel: ['calc-gocce', 'terapia-ev'] }),
  C('calc-gocce', 'Gocce al minuto (set a gravità)', ['gtt/min', 'deflussore'], 'Frequenza delle gocce per un’infusione a gravità. Fattore di caduta del deflussore: tipicamente 20 gtt/mL (macrogocce) o 60 gtt/mL (microgocce); controlla la confezione.',
    [{ id: 'v', label: 'Volume da infondere', unit: 'mL' }, { id: 't', label: 'Durata', unit: 'minuti' }, { id: 'k', label: 'Fattore del deflussore', unit: 'gtt/mL', def: 20 }],
    (v) => { const r = (v.v * v.k) / v.t; return { result: `${f(r, 1)} gtt/min`, steps: ['gtt/min = (volume × fattore) ÷ tempo (min)', `(${f(v.v)} mL × ${f(v.k)} gtt/mL) ÷ ${f(v.t)} min = ${f(r, 1)} gtt/min`, 'Conta le gocce per 60 secondi e regola il roller.'] }; },
    { rel: ['calc-infusione', 'terapia-ev'] }),
  C('calc-mcgkgmin', 'Infusione in mcg/kg/min → mL/h', ['dopamina', 'farmaci in infusione continua', 'mcg/kg/min'], 'Converte una dose in mcg/kg/min nella velocità di pompa in mL/h.',
    [{ id: 'd', label: 'Dose prescritta', unit: 'mcg/kg/min' }, { id: 'p', label: 'Peso', unit: 'kg' }, { id: 'c', label: 'Concentrazione della soluzione', unit: 'mcg/mL' }],
    (v) => { const r = (v.d * v.p * 60) / v.c; return { result: `${f(r)} mL/h`, steps: ['mL/h = (dose × peso × 60) ÷ concentrazione', `(${f(v.d)} × ${f(v.p)} × 60) ÷ ${f(v.c)} = ${f(r)} mL/h`, 'Ricorda: 1 mg = 1000 mcg; controlla le unità di concentrazione.'] }; },
    { rel: ['calc-infusione', 'calc-percentuale'], desc: 'Farmaci ad alto rischio: doppio controllo e protocollo aziendale.' }),
  C('calc-percentuale', 'Percentuale → mg/mL', ['soluzioni percentuali', '% p/v'], 'Una soluzione all’1% (p/v) contiene 1 g in 100 mL = 10 mg/mL.',
    [{ id: 'pc', label: 'Concentrazione', unit: '%' }],
    (v) => { const r = v.pc * 10; return { result: `${f(r)} mg/mL`, steps: ['1% = 1 g/100 mL = 1000 mg/100 mL = 10 mg/mL', `${f(v.pc)}% × 10 = ${f(r)} mg/mL`] }; },
    { rel: ['calc-volume'] }),
  C('calc-conversioni', 'Conversioni di unità', ['mg g mcg', 'gradi', 'glicemia mmol'], 'Conversioni frequenti (peso, volume, temperatura, pressione, glicemia).',
    [{ id: 'x', label: 'Valore', unit: '' }, { id: 'm', label: 'Conversione (1 mg→mcg, 2 g→mg, 3 mL→L, 4 °C→°F, 5 °F→°C, 6 mmHg→kPa, 7 mg/dL glucosio→mmol/L, 8 mmol/L→mg/dL)', unit: 'n°', def: 1 }],
    (v) => {
      const m = Math.round(v.m); const x = v.x;
      const T = { 1: [x * 1000, 'mcg', '1 mg = 1000 mcg'], 2: [x * 1000, 'mg', '1 g = 1000 mg'], 3: [x / 1000, 'L', '1 L = 1000 mL'], 4: [(x * 9) / 5 + 32, '°F', '°F = °C × 9/5 + 32'], 5: [((x - 32) * 5) / 9, '°C', '°C = (°F − 32) × 5/9'], 6: [x * 0.133322, 'kPa', '1 mmHg ≈ 0,1333 kPa'], 7: [x / 18.016, 'mmol/L', 'glucosio: mg/dL ÷ 18,016'], 8: [x * 18.016, 'mg/dL', 'glucosio: mmol/L × 18,016'] }[m];
      if (!T) return { result: '—', steps: ['Scegli un numero di conversione da 1 a 8'] };
      return { result: `${f(T[0], 3)} ${T[1]}`, steps: [T[2], `${f(x, 3)} → ${f(T[0], 3)} ${T[1]}`] };
    }),
  C('calc-bilancio-idrico', 'Bilancio idrico', ['entrate uscite', 'bilancio liquidi'], 'Differenza tra liquidi introdotti e persi nelle 24 ore, con stima delle perdite insensibili.',
    [{ id: 'e', label: 'Entrate (orali + EV + enterali)', unit: 'mL' }, { id: 'u', label: 'Uscite misurate (diuresi, drenaggi, vomito, feci liquide)', unit: 'mL' }, { id: 'i', label: 'Perdite insensibili stimate (es. 500–800 mL/die; di più con febbre)', unit: 'mL', def: 500 }],
    (v) => { const r = v.e - (v.u + v.i); return { result: `${r > 0 ? '+' : ''}${f(r, 0)} mL (${r > 0 ? 'positivo' : r < 0 ? 'negativo' : 'in pareggio'})`, steps: ['Bilancio = entrate − (uscite + perdite insensibili)', `${f(v.e, 0)} − (${f(v.u, 0)} + ${f(v.i, 0)}) = ${f(r, 0)} mL`, 'Confronta con peso giornaliero, edemi e parametri vitali.'] }; },
    { cat: 'Liquidi', rel: ['bilancio-idrico', 'scompenso-cardiaco', 'insufficienza-renale-acuta'] }),
  C('calc-bmi', 'BMI e superficie corporea', ['indice di massa corporea', 'BSA', 'Mosteller'], 'BMI = peso ÷ altezza²; superficie corporea con formula di Mosteller.',
    [{ id: 'p', label: 'Peso', unit: 'kg' }, { id: 'h', label: 'Altezza', unit: 'cm' }],
    (v) => { const m = v.h / 100; const bmi = v.p / (m * m); const bsa = Math.sqrt((v.h * v.p) / 3600); return { result: `BMI ${f(bmi, 1)} kg/m² · BSA ${f(bsa, 2)} m²`, steps: [`BMI = ${f(v.p)} ÷ (${f(m, 2)})² = ${f(bmi, 1)}`, `BSA (Mosteller) = √((altezza × peso) ÷ 3600) = √(${f(v.h)} × ${f(v.p)} ÷ 3600) = ${f(bsa, 2)} m²`, 'Adulti: < 18,5 sottopeso; 18,5–24,9 normopeso; 25–29,9 sovrappeso; ≥ 30 obesità.'] }; },
    { cat: 'Valutazione', rel: ['must', 'malnutrizione'] }),
];
