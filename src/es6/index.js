// ***** DEFAULT PARAMS Y CONCATENACION

// Forma antigua
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = conuntry || 'MX';
    console.log(name, age, country)
}

// ES6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
};

// Parametros por defecto de es6
newFunction2();
newFunction2('Ricardo', '23', 'CO');


// ***** TEMPLATE LITERAL
// Template literal antiguo
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Template literal es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


// ***** MULTILINEA
// Multilineas antiguo
let lorem = "Aal;skdfadfaa;ldsfksad asdlkf akdsjf \n"
+ "otra frase as;ldkfjakd"

// Multilineas es6
let lorem2 = `otra frase epica
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);


// ***** DESTRUCTURACION
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

// Destructuracion antigua
console.log(person.name, person.age);

// Destructuracion de objetos es6
let { name, age } = person;
console.log(name, age);


//  ***** SPREAD OPERATOR (METODO DE PROPAGACION)
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

// ES6 - crear un nuevo elemento, agregando mas elementos con el metodo de propagacion
let education = ['David', ...team1, ...team2];

console.log(education);


// ***** LET, CONST y VAR
// Disponible forma global
var hola = 'hola';

// Let disponible en el scope asignado (bloque de codigo)

{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet); // Dentro del scope si podremos acceder a esta variable
}

console.log(globalVar);
//console.log(globalLet);

// Const nos permite proteger a los datos, no permitira hacer una reasignacion

const a = 'b';
a = 'a';

console.log(a);

// ***** ASIGNACION EN OBJETOS
let name = 'rodcko';
let age = 27;

// Forma antigua
obj = { name: name, age: age };

// ES6
obj2 = { name, age };
console.log(obj2);

// ***** ARROW FUNCTION
const names = [
    { name: 'rodcko', age: 27 },
    { name: 'josue', age: 32 }
]

//  Iterar cada elemento con map
let listOfNames = names.map(function (item) {
    console.log(item.name);
})

// Las arrow function son funciones anonimas - ES6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    //
}

const listOfNames4 = name => {
    //
}

const square = num => num * num; // Evitamos generar un return, lo asignamos directamente

// ***** PROMESAS para trabajar asincronismo

// La promesa es algo que va a pasar...
// La promesa puede resolver o sera rechazada
const helloPromise = () => {    
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey! todo bien')
        } else {
            reject('Oops! algo salio mal');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola')) // Podemos agregar mas then como necesitemos
    .catch(error => console.log(error));

// ***** CLASES

class calculator {
    constructor() {
        this.valueA = 0; // Asigna desde el scope global estas 2 variables
        this.valueB = 0;
    }
    sum(valueA, valueB) { // Metodo
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator(); // Nueva instancia, creamos un objeto
console.log(calc.sum(2,2));

// ***** MODULOS

import { hello } from './module';  

hello(); // Ya es una funcion disponible dentro de este archivo
// Podemos separar nuestra logica por modulos...

// ***** GENERATORS (GENERADORES)
// Funcion especial que retorna valores segun el algoritmo definido

function* helloWorld() {
    if (true) {
        yield 'Hello, '; // Guarda este estado de forma interna
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
// Podria utilizarse para Fibonacci




