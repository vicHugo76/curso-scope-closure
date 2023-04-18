// Reasignación y redeclaración

// var

var firstName; // Estoy declarando, inicando con un valor undefined
firstName = 'Victor'; // Asignado valor a la variable
console.log(firstName);

var lastName = 'Ortiz'; // Aqui declaramos y asignamos valor al inicio
lastName = 'Ana'; // Aqui reasignamos valor a la variable
console.log(lastName);

var secondName = 'Hugo'; // Aqui declaramos y asignamos valor al inicio
var secondName = 'Ana'; // Aqui redeclaramos y reasiganmos la variable
console.log(secondName);

// Aqui se puede utilizar practicamente todo por la forma de declarar con var, todas las variables pasan a ser globales con esta forma

// let

let fruit = 'Apple'; // En esta declaracion, tambien asignamos
fruit = 'Kiwi'; // reasignamos la variable con otro valor
console.log(fruit);

let fruit = 'Banana'; // Aqui marca un error porque con let no se puede redeclarar y reasignar una variable
console.log(fruit);

// Aqui con la declaracion let existe mas protecion de variable porque no permite que se vuelvan a declarar la misma variable.

// const

const animal = 'dog'; // Asignacion y declaramos a la vez
animal = 'cat'; // reasignado
const animal = 'Snake'; // Aqui nol se puede redeclarar ni reasignar a la misma varible, no solamente que sea una constante, si no este ambito no lo permite
console.log(animal);

// Pero no siempre quiere decir que una costante sea termino de inmutabiliaddad, hay casos en donde una constate apunta a una referencia como los arrays, donde se puede manupalar su informacion por medio de sus metodos. 
const vehicles = []; // Declaramos la constante haciendo referencia a un array
vehicles.push('🚗'); // Asignamos un valor a la referencia por medio de un metodo, push
console.log(vehicles); 

vehicles.pop(); // Eliminamos el ultimo valor de la referencia, por medio de el metodo, pop
console.log(vehicles);

