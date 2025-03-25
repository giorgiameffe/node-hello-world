// Modificare app Node in modo da passare dal terminale una frase diversa da “Hello Boolean”.

// console.log(process.argv);

// se il valore è undefined o null stampo 'Hello Boolean'
// altrimenti il valore viene modificato dal terminale

const newText = process.argv[2] ?? 'Hello Boolean';
console.log(newText);
