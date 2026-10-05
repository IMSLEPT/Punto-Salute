// Specialistiche: hub con collegamenti alle patologie (espansione progressiva).
const SP = (id, title, summary, rel) => ({ id, type: 'spec', title, aliases: [], summary, cat: 'Specialità', sections: { cos: summary }, rel, sources: ['textbooks'], rev: '2026-10', v: '1.0', verify: false });
export default [
  SP('medicina-interna', 'Medicina interna', 'Approccio globale al paziente adulto con patologie multiple.', ['ipertensione-arteriosa', 'diabete-mellito', 'scompenso-cardiaco', 'polmonite', 'iponatriemia', 'sepsi']),
  SP('cardiologia', 'Cardiologia', 'Malattie del cuore e del circolo.', ['infarto-miocardico', 'scompenso-cardiaco', 'fibrillazione-atriale', 'ipertensione-arteriosa', 'ecg']),
  SP('pneumologia', 'Pneumologia', 'Malattie dell’apparato respiratorio.', ['bpco', 'asma', 'polmonite', 'embolia-polmonare', 'pneumotorace', 'insufficienza-respiratoria']),
  SP('neurologia', 'Neurologia', 'Malattie del sistema nervoso.', ['ictus', 'cervello', 'glasgow', 'cpss']),
  SP('nefrologia', 'Nefrologia', 'Funzione renale, elettroliti e dialisi.', ['iperkaliemia', 'ipokaliemia', 'iponatriemia', 'insufficienza-renale-acuta', 'insufficienza-renale-cronica']),
  SP('gastroenterologia', 'Gastroenterologia', 'Apparato digerente, fegato e pancreas.', ['emorragia-digestiva', 'cirrosi-epatica']),
  SP('endocrinologia', 'Endocrinologia e diabetologia', 'Ormoni e metabolismo.', ['diabete-mellito', 'ipoglicemia', 'chetoacidosi-diabetica', 'tiroide']),
  SP('urologia', 'Urologia', 'Vie urinarie e apparato genitale maschile.', ['infezione-vie-urinarie', 'calcolosi-renale', 'ritenzione-urinaria', 'ipb']),
  SP('malattie-infettive', 'Malattie infettive', 'Infezioni e prevenzione delle ICA.', ['sepsi', 'polmonite', 'infezione-vie-urinarie', 'igiene-mani']),
  SP('emergenza-urgenza', 'Emergenza-urgenza', 'Riconoscimento e stabilizzazione del paziente critico.', ['abcde', 'bls', 'anafilassi', 'shock', 'sepsi']),
  SP('terapia-intensiva', 'Terapia intensiva', 'Supporto delle funzioni vitali.', ['insufficienza-respiratoria', 'sepsi', 'chetoacidosi-diabetica']),
  SP('chirurgia', 'Chirurgia', 'Assistenza peri-operatoria e drenaggi.', ['drenaggio-toracico-gestione', 'lesioni-da-pressione', 'pneumotorace']),
  SP('geriatria', 'Geriatria', 'Assistenza all’anziano fragile.', ['lesioni-da-pressione', 'barthel', 'rischio-cadute']),
  SP('ematologia', 'Ematologia', 'Sangue e coagulazione.', ['tvp', 'emocromo', 'anticoagulanti']),
  SP('dermatologia', 'Dermatologia', 'Cute e ferite.', ['lesioni-da-pressione', 'cute', 'medicazione-ferita']),
  SP('ortopedia', 'Ortopedia', 'Apparato muscolo-scheletrico.', ['femore', 'colonna', 'bacino']),
];
