// ***** INCLUDES
// Nos pemite saber si hay un elemento dentro de este valor

let numbers = [1,2,3,7,8];

if (numbers.includes(9)) { // Si hay un valor dentro de un string o un arreglo
    console.log('Si se encuentra el valor 7');
} else {
    console.log('No se encuentra')
}

// ***** FUNCION EXPONENCIAL

let base = 4;
let exponent = 4;
let result = base ** exponent;

console.log(result);