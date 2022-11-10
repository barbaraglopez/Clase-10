/* Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente. Este capítulo de la Guía de JavaScript presenta las diferentes declaraciones de iteración disponibles para JavaScript.

Puedes pensar en un bucle como una versión computarizada del juego en la que le dices a alguien que dé X pasos en una dirección y luego Y pasos en otra. Por ejemplo, la idea "Ve cinco pasos hacia el este" se podría expresar de esta manera como un bucle: */

/* for (let step = 0; step < 5; step++) {
  // Se ejecuta 5 veces, con valores del paso 0 al 4.
    console.log("Camina un paso hacia el este");
}
 */

/* Hay muchos diferentes tipos de bucles, pero esencialmente, todos hacen lo mismo: repiten una acción varias veces. (¡Ten en cuenta que es posible que ese número sea cero!). */

/* En el siguiente ejemplo utilizamos un for para contar de 0 a 9. */
/* for (let vuelta = 1; vuelta <= 5; vuelta++) {
    console.log('Dando la vuelta número ' + vuelta);
}; */


/* Ahora usamos for para contar de 1 a 10. */
/* for (let i = 1; i <= 10; i++) {
    console.log(i);
} */


/* for (let i = 0; i < 10; i++) {
    console.log(i);
} */

/* ------------------- EJEMPLO ----------------------*/
//Algoritmo para calcular la tabla de multiplicar de un número
// Solicitamos un valor al usuario
/* let ingresarNumero = parseInt(prompt("Ingresar Numero")); */
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
/* for (let i = 1; i <= 10; i++){
    let resultado = ingresarNumero * i;
    console.log(ingresarNumero + " x " + i + " = " + resultado);
}; */

/* ------------------- DO WHILE ----------------------*/
/* let i = 0;
do {
    console.log("Valor de i: ", i);
    i = i + 1;
} while (i < 5); */


/* -------------------MAP ----------------------*/
/* El método map() se utiliza para crear un nuevo Array con todos los elementos
del Array original transformados según las operaciones de la función enviada
por parámetro. El nuevo Array obtenido tiene la misma cantidad de
elementos que el array original pero con los valores modificados. */

/* let numeros = [2, 4, 6];
let elDoble = numeros.map(function(num){ */
 // Multiplicamos por 2 cada número
/*  return num * 2;
});
console.log(elDoble) */; // [4,8,12]


/* -------------------FILTER ----------------------*/
/* Al igual que map recibe una función con tres argumentos. Pero en este caso, se usa para filtrar elementos. En este caso, el resultado serán los elementos mayores a 5.  */

/* let numeros = [2, 5, 6, 18, 201];
let filter = numeros.filter(n => {
return n > 5
}); 

console.log(filter) */

/* let edades = [22, 8, 17, 14, 30];
let mayores = edades.filter(function(edad){
    return edad > 18;
});
console.log(`los numeros mayores del array edades son ${mayores}`); */ // [22, 30]


/* -------------------ForEach ----------------------*/
/* let objetos = ["Varita", "Libro", "Lechuza", "Caldero"];
objetos.forEach((objeto) => {
    console.log(objeto);
}); */

/* -------------------Find ----------------------*/
/* const numeros = [1, 2, 3, 4, 5];
//La función parámetro generalmente es una función flecha sin cuerpo.
const encontrado = numeros.find(elemento => elemento > 3);
console.log(encontrado) */