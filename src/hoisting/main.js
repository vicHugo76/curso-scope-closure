// var nameOfDog; // Aqui javascript eleva la declaracion de la variable que se asigna despues de su llamado, pero la variable contiene el valor undefined

// console.log(nameOfDog);
// var nameOfDog = 'Elmo'
// console.log(nameOfDog);

// var elmo; // Se volvio a elevar con un valor undefined

nameOfDog();

function nameOfDog() {
  console.log(`El mejor perrito es ${elmo}`); // Error: elmo no es definida
}

// var elmo = 'Elmito';

// El hoisting consiste en que javascript eleva internamente tanto las variables como las funciones antes de su llamado donde la varibles se ven afectadas en la asignacion porque automaticamente les asigna el valor undefined