// Jsnack 2
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
console.log('test');
const zucchine = [
  {
    varieta: 'zucchina verde',
    peso: 10,
    lunghezza: 10
  },
  {
    varieta: 'zucchina rossa',
    peso: 20,
    lunghezza: 12
  },
  {
    varieta: 'zucchina gialla',
    peso: 12,
    lunghezza: 20
  },
  {
    varieta: 'zucchina marrone',
    peso: 16,
    lunghezza: 40
  },
  {
    varieta: 'zucchina nera',
    peso: 33,
    lunghezza: 3
  },
  {
    varieta: 'zucchina zafferano',
    peso: 55,
    lunghezza: 6
  },
  {
    varieta: 'zucchina viola',
    peso: 88,
    lunghezza: 8
  },
  {
    varieta: 'zucchina arancione',
    peso: 44,
    lunghezza: 11
  },
  {
    varieta: 'zucchina grigia',
    peso: 77,
    lunghezza: 16
  },
  {
    varieta: 'zucchina rosa',
    peso: 77,
    lunghezza: 17
  }
];

const gruppoMagg = [];
const gruppoMin = [];
const limit = 15;

for(let i = 0; i < zucchine.length; i++){
  console.log(zucchine[i]);
  if(zucchine[i].lunghezza < limit){
    gruppoMin.push(zucchine[i].lunghezza);
  } else {
    gruppoMagg.push(zucchine[i].lunghezza);
  }
};

console.log('piccole -->',gruppoMin);
console.log('grandi -->',gruppoMagg);

let resultMin = 0;
for(let i = 0; i < gruppoMin.length; i++){
  resultMin += gruppoMin[i];
}
console.log('Somma del peso delle zucchine piccole --> ',resultMin);

let resultMax = 0;
for(let i = 0; i < gruppoMagg.length; i++){
  resultMax += gruppoMagg[i];
}
console.log('Somma del peso delle zucchine grandi --> ',resultMax);