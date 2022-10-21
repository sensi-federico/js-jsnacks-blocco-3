// Snack 2 
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

const strings = [ 'mike', 'JOSHUA', 'Tyler' ];

const formattedStrings = strings.map(function(name){
    const firstChar = name.charAt(0).toUpperCase();
    const string = name.slice(1).toLowerCase();
    const nameFormatted = firstChar + string;

    return nameFormatted;
});

console.log(formattedStrings);