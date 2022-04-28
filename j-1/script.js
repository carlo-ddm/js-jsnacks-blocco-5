//   Jsnack 1
// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
console.log('test');
const zucchine = [
  {
    varieta: 'zucchina verde',
    peso: 10,
    lunghezza: 'corta'
  },
  {
    varieta: 'zucchina rossa',
    peso: 20,
    lunghezza: 'lunga'
  },
  {
    varieta: 'zucchina gialla',
    peso: 12,
    lunghezza: 'corta'
  },
  {
    varieta: 'zucchina marrone',
    peso: 16,
    lunghezza: 'lunga'
  },
  {
    varieta: 'zucchina nera',
    peso: 33,
    lunghezza:'corta'
  },
  {
    varieta: 'zucchina zafferano',
    peso: 55,
    lunghezza: 'lunga'
  },
  {
    varieta: 'zucchina viola',
    peso: 88,
    lunghezza: 'corta'
  },
  {
    varieta: 'zucchina arancione',
    peso: 44,
    lunghezza: 'lunga'
  },
  {
    varieta: 'zucchina grigia',
    peso: 77,
    lunghezza: 'lunga'
  },
  {
    varieta: 'zucchina rosa',
    peso: 77,
    lunghezza: 'lunga'
  }
];

let somma = 0;
for (let i = 0; i < zucchine.length; i++){
  console.log(zucchine[i].peso);
  somma += zucchine[i].peso;
}
console.log('Questa è la somma -->', somma);

