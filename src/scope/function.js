// Function Scope

// El scope local de función (function scope) es el entorno donde las variables locales solo se pueden acceder desde una función del programa.
// En este scope no importa que las variables sean declaradas con var, let o const. Sin embargo, ten presente que se puede redeclarar una variable con var, pero no con let y const.

// ejemplo
function greeting() {
  let userName = 'Amy';
  console.log(userName);

  if (userName === 'Amy') {
    console.log(`Hello ${userName}!`); // Uso de templete strings y handle bars para pasar variables
  }
}

greeting();
console.log(userName); // Nota!!! userName, Genera error por no estar declarada fuera de la funcion, no se puede acceder fuera de ella

// Esto sucede porque la variable userName tiene un scope de función, por lo que solo se puede acceder dentro de la misma.
// Según la cadena de scope, si existe una función dentro de otra función, la función hijo podrá acceder a las variables de la función padre, pero no en viceversa. Recuerda esto en el tema de los Closures.