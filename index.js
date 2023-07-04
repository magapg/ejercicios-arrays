// Doblar números:
// Crea una función que tome un array de números y devuelva un nuevo array donde cada número sea el doble del original.
function dobleNumero(numero) {
    let dobleArray = numero.map((numero) => numero * 2);
    return dobleArray;
  }

let numero = [1, 2, 3, 4, 5];
let doblesNumero= dobleNumero(numero);
console.log(doblesNumero); 
// Nombre a mayúsculas:
// Crea una función que tome un array de nombres y los transforme todos a mayúsculas.
    function cambiarMayuscula(names) {
        let cambiarAMayuscula = names.map((names) => names.toUpperCase());
        return cambiarAMayuscula;
      }
      names = ["lucas", "ivan", "emiliano"];
      cambiarAMayuscula = cambiarMayuscula(names)
      console.log(cambiarAMayuscula);

// Cuadrado de números:
//Crea una función que tome un array de números y devuelva un nuevo array donde cada número sea el cuadrado del original.
function obtenerCuadrados(numeros) {
    let arrayCuadrados = numeros.map((numero) => numero ** 2);
    return arrayCuadrados;
  }
let numeros = [1, 2, 3, 4, 5];
let cuadrados = obtenerCuadrados(numeros);
console.log(cuadrados); 

// Primera letra de cada palabra:
// Dado un array de palabras, crea una función que devuelva un nuevo array donde cada elemento sea la primera letra de cada palabra.
function obtenerPrimerasLetras(palabras) { 
//recorrer array de palabras y asi obtener cada palabra a trabajar
// una vez obtenida la palabra a trabajar, obtener su primer letra
// colocar la letra en un array a devolver 
console.log(palabras.map( palabra => palabra[0]));// devuelvo un array con la primer letra de cada palabra
}

obtenerPrimerasLetras(["Hola", "Nico", "Romi"]);
