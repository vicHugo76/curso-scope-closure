// En este desafío tendrás que crear un closure que nos permita almacenar datos de mascotas en cualquier momento.

// Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. En el primer llamado a la función nos servirá para crear nuestra lista en un inicio mientras que los demás llamados nos ayudará a agregar elementos al final de la lista.

// Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos devolverá el array con los datos de todos las mascotas introducidas.

function createPetList() {
  // Tu código aquí 👈
  const pets = [];
  function pet(name) {
    if (!name) {
      return pets;      
    } else {
      pets.push(name);
    }
  }
  return pet;
}

// **** Alternativa ****

// function createPetList() {
//   const pets = []
//   return (info) => info ? pets.push(info): pets
// }

// Input:

const myPetList = createPetList();

console.log(myPetList("michi"));

console.log(myPetList("firulais"));

console.log(myPetList());

// Output:

// ["michi", "firulais"]