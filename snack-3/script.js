// Snack 3


// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]
// Crea un nuovo array con la lista dei mammiferi.


const animals = [
   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
   { nome: 'puma', famiglia: 'felidi', classe: 'mammiferi' },
   { nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },
   { nome: 'corvo', famiglia: 'boh', classe: 'uccelli' }
]


const mammiferi = animals.filter(function(animal){
    if (animal.classe === 'mammiferi'){
        return true
    }
    return false
});

console.log(mammiferi)