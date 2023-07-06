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

// Filtrar números pares:
// Crea una función que tome un array de números y devuelva un nuevo array que contenga sólo los números pares.
function NumerosPares(numeros2) {
  let numeroPar = numeros2.filter((numero) => numero % 2 === 0);
  return numeroPar;
}
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeroPar = NumerosPares(numeros2);
console.log(numeroPar); 

// Filtrar palabras largas:
// Crea una función que tome un array de palabras y devuelva un nuevo array que contenga sólo las palabras que tienen más de 4 letras.
 
function filtrarPalabrasLargas(arrayPalabras) {
  return arrayPalabras.filter(palabra => palabra.length > 4);
}
let arrayPalabras = ["hola", "buenos", "días", "adiós", "hasta", "luego"];
let resultado = filtrarPalabrasLargas(arrayPalabras);
console.log(resultado);

// Filtrar palabras que empiezan con una letra específica:
// Crea una función que tome un array de palabras y una letra. La función debería devolver un nuevo array que contenga sólo las palabras que comienzan con esa letra.
function palabrasConLetra(array, letra) {
  let palabrasFiltradas = array.filter(function(palabra) {
    return palabra.charAt(0).toLowerCase() === letra.toLowerCase();
  });
  return palabrasFiltradas;
}
let palabras = ["Manzana", "Banana", "Cereza", "Durazno", "Fresa"];
let letra = "C";
let palabrasFiltradas = palabrasConLetra(palabras, letra);
console.log(palabrasFiltradas);

// Sumar números:
// Crea una función que tome un array de números y devuelva la suma de todos los números en el array.
function sumarNumeros(array) {
  var suma = array.reduce(function(acumulador, numero) {
    return acumulador + numero;
  }, 0);

  return suma;
}
let numeros1 = [1, 2, 3, 4, 5];
let resultado1 = sumarNumeros(numeros1);
console.log(resultado1);

// Concatenar cadenas:
// Crea una función que tome un array de palabras y las combine todas en una sola cadena.
function concatenarPalabras(array) {
  let cadenaConcatenada = array.reduce(function(acumulador, palabra) {
    return acumulador + palabra;
  }, "");

  return cadenaConcatenada;
}
let palabras2 = ["Hola", " mundo ", "!", " Esto", " es", " una", " cadena"];
let resultado2 = concatenarPalabras(palabras2);
console.log(resultado2);
// Producto de números:
// Crea una función que tome un array de números y devuelva el producto de todos los números en el array.
function productoNumeros(array) {
  let producto = array.reduce(function(acumulador, numero) {
    return acumulador * numero;
  }, 1);

  return producto;
}

let numeros3 = [2, 3, 4, 5];
let resultado3 = productoNumeros(numeros3);
console.log(resultado3);
// Contar ocurrencias de una letra:
// Crea una función que tome una cadena de texto y una letra, y devuelva el número de veces que aparece esa letra en la cadena.

function contarLetra(cadena, letra) {
  let cadenaMinusculas = cadena.toLowerCase();
  let letraMinuscula = letra.toLowerCase();

  let contador = cadenaMinusculas.split('').reduce(function(acumulador, caracter) {
    if (caracter === letraMinuscula) {
      return acumulador + 1;
    }
    return acumulador;
  }, 0);

  return contador;
}

let texto = "Hola mundo! Esto es una cadena de texto.";
let letra1 = "o";
let resultado4= contarLetra(texto, letra1);
console.log(resultado4);







