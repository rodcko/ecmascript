// ***** OBJECT ENTRYS
// Devolver la clave y valores de una matriz

const data = {
    frontend: 'Rodcko',
    backend: 'Fer',
    design: 'Sofi',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length); // Nos dice cuantos elementos existen

// ***** OBJECT VALUES
// Devuelve los valores de un objeto a un arreglo

const data = {
    frontend: 'Rodcko',
    backend: 'Fer',
    design: 'Sofi', // Se pueden anadir las comas aca sin tener un error
}

const values = Object.values(data);
console.log(values); // Hicimos un arreglo de strings, ignorando las asignaciones
console.log(values.length);

// ***** PADDING

const string = 'hello';
console.log(string.padStart(7,'hi')); // Anade hi antes de cualquier otro string
console.log(string.padEnd(12, ' ----'))
console.log('food'.padEnd(12, '  ----'))
// Nos puede servir para presentar una lista de elementos

// ***** COMAS AL FINAL

const obj = {
    name: 'rodcko', // Puede existir un valor despues o no, no hay problema
}