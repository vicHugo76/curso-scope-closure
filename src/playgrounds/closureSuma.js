// En este desafío recibirás dos números aleatorios por parámetros.

// Usando las closures deberás crear una función a la cual se pueda llamar en primer lugar con un solo número y secuencialmente volver a llamarla para completar la suma con el siguiente número:

// La solución deberá tener un input y output como la siguiente, en algunos casos puede que no se mande el segundo número por lo que deberás pensar en como manejar ese tipo de casos.

function sumWithClosure(firstNum = 0) {
  // Tu código aquí 👈
  return function (secondNumber = 0) {
    return firstNum + secondNumber;
  }
}

// Input:

console.log(sumWithClosure(2)(3));

// Output:

// 5

// Input:

console.log(sumWithClosure(90)());

// Output:

// 90


console.log(sumWithClosure(5)(8));
console.log(sumWithClosure(5)());
console.log(sumWithClosure()(15));