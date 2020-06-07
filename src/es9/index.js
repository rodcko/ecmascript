// OPERADOR DE REPOSO
// Puede extraer propiedades de un objeto que aun no se ha construido

import { resolve } from "dns";
import { rejects } from "assert";

const obj = {
    name: 'rodcko',
    age: 32,
    country: 'GT'
};

let { country, ...all } = obj;
console.log(all); // Con all encapsulo lo demas del objeto
// Tambien podemos filtrar ciertas propiedades, es decir destructurarlas para quitarlas y me traigo el all y solo me muestra las que necesito


// ***** UNION DE OBJETOS, METODO DE PROPAGACION

const obj = {
    name: 'rodcko',
    age: 32
}

const obj1 = {
    ...obj,
    country: 'GT' // Unimos el obj con el obj1
}

console.log(obj1);

// ***** PROMISES FINALLY
// Saber cuando ha terminado una promesa y a partir de ahi ejecutar otra funcion

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

// ***** AGRUPAR BLOQUES DE REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);