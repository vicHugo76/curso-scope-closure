// variables

var a; // delarando
var b = 'b'; // declaramaos, inicialisamos o asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaramos e inicialiasamos

// Global Scope
// Cualquier variable que se encuentran en el documento pasan a ser variables globales y se instancian en el objeto windows, pudiendo acceder a ella en cualquier parte, osea cualquier variable o funcion

var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

// Cuidado al no declarar una variable, hace que una variable solo al asignarle el valor sin antes haberla declarado funcionara como una variable global, funcionara en cualquier parte
function countries() {
  country = 'México'; // Cuidado!!! Declaracion global en la funcion, necesita var, let y const
  console.log(country);
}

countries();
console.log(country);