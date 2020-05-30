// Funciones solas.
//1.
/***********************************************
 * 
 * 1. Hacer una funcion llamada "saludo"
 * 2. Cada vez llamo la funcion me 
 *    pide un nombre
 * 3. Toma ese nombre y me dice 
 *    "Hola <nombre>" en un alert. 
 * 
 ***********************************************/

function saludo() {

}

//2.
/***********************************************
 *
 * Hacer una funcion para elevar un 
 * número al cuadrado, pidiendo el valor
 * por prompt y mostrnadolo por alert.
 * 
 ***********************************************/


//3.
/***********************************************
 *
 * 1. Crear un array vacío
 * 2. Hacer una funcion para llenar
 *    el array, pidiendo por prompt. Cada vez
 *    que invoco la función, me muestra UN prompt y
 *    lo carga en el array.
 * 3. Hacer una función que muestre en un alert
 *    el último valor agregado al array. 
 * 4. Hacer una función para imprimir la lista
 *    de valores del array en un console.log.
 * 
 ************************************************/



let arreglo = [];

function llenar() {
    let datos = prompt("Agregar elemento");
    arreglo.push(datos);
}

llenar();

function ultimo() {
    let res = arreglo[arreglo.length - 1]; /*resultado*/
    console.log("El ultimo elemento del array es: " + res);
}

function imprimir() {
    console.log(arreglo);
} /*Listo*/