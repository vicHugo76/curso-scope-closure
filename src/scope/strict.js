// var pi; undefined, esto lo hace automaticamente Javascript, osea lo declara
'use strict';
pi = 3.1416;
console.log(pi);
// aqui ya no se utiliza hosting, la elevacion de las variables en tiempo de compilacion, si no que se tiene que declarar y asignar un valor a la variable, primero puedes declarar y despues asignar el valor o puede declarar y asignar el valor al mismo tiempo, asi es como entra el modo estricto

function myFunction() {
  'use strict';
  return pi = 3.1416;
}

console.log(myFunction()); 
// Aqui pasa los mismo si no declaras la variable , nos marca el mismo error y esto sirve para forzanos ha delcarar de manera correcta las variable o constantes dentro del programa