// ***** ARRAY FLAT
// Devolver una submatriz aplanada

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2)); // Este es el valor de la profundidad donde queremos trabajar con flat...

// ***** FLAT MAP

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2])); // Multiplicamos nuestro arreglo * 2, lo transformamos

// ***** TRIM START

let hello = '      hello world';

console.log(hello);
console.log(hello.trimStart());

// ***** TRIM END

let hello = 'hello World        ';
console.log(hello);
console.log(hello.trimEnd());

// ***** OPTIONAL CATCH

try {

} catch {
    error
};

// ***** OBJECT FROM ENTRIES

let entries = [[ "name", "rodcko"], ["age", 32]];
console.log(Object.fromEntries(entries)) // Transformar de arreglo a objeto

// ***** OBECT TYPE SIMBOL

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description); // Ver que elementos se encuentran dentro de este tipo

