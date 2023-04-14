// Block Scope

// El alcance de bloque, es utilizado cuando defines las variables dentro de un bloque de codigo, solo se puede utilizar dentro del ese mismo bloque, donde se puede utilizar let y const dentro de este concepto y var cuando queramos acceder a todos los elementos o contextos que necesitemos como en global teniendo cuidado a la hora de utilizar este tipo de variable porque se puede cometer el error de redefiner o reasignar la misma variable y cometer errores que puede hacer que una aplicacion deje de funcionar, asi pues en este concepto es donde se empieza dejar de utilizar var, para solo utilizar lo que es let y const 

function fruits() {
  if (true) {
    var fruit1 = 'Apple'; // function scope
    // esta varible fruit1 al ser declarada con var, trabaja como una variable de function scope, trabajando dentro de toda la funcion
    let fruit2 = 'Kiwi';  // block scope
    const fruit3 = 'Banana';  // block scope
    // en cambio con let y const solo funciona dentro del bloque donde se declararon las variables, osea dentro del bloque if, es por eso que el console.log no puede acceder a ellas como la varible declarada var.
    console.log(fruit2);  // Dentro del bloque ya funcionan
    console.log(fruit3);
  }
  console.log(fruit1); // es por eso la recomendacion de esta declaracion
  // console.log(fruit2);
  // console.log(fruit3);
}

fruits();