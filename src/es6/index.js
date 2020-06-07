function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = conuntry || 'MX';
    console.log(name, age, country)
}

// es6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
};

// Parametros por defecto de es6
newFunction2();
newFunction2('Ricardo', '23', 'CO');


// Template literal antiguo
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Template literal es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


// Multilineas antiguo
let lorem = "Aal;skdfadfaa;ldsfksad asdlkf akdsjf \n"
+ "otra frase as;ldkfjakd"

// Multilineas es6
let lorem2 = `otra frase epica
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);


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


let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

// Crear un nuevo elemento, agregando mas elementos con el metodo de propagacion
let education = ['David', ...team1, ...team2];

console.log(education);

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