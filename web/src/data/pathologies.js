export default [
  { id: 'iperkaliemia', type: 'patho', title: 'Iperkaliemia', aliases: ['potassio alto', 'K+ elevato'], cat: 'Nefrologia', spec: ['nefrologia'],
    summary: 'Aumento del potassio sierico oltre 5,0–5,5 mmol/L: emergenza potenziale per il rischio di aritmie.',
    sections: { fisio: ['Il potassio è il principale catione intracellulare.', 'La **dispnea** può comparire nei casi gravi.'], assist: [{ ol: ['**Monitora** ECG', 'Controlla il potassio'] }, { warn: 'Verifica prescrizione.' }] },
    rel: ['rene', 'dispnea'] },
];
