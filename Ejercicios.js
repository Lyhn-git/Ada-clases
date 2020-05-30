/**
 *  Crear un programa que pida ingresar nombres separados por espacios y
 * devuelva un mensaje que contenga un saludo a cada persona. Ejemplo:}
 * 
 * Ingrese nombres: Ada Greta Grace
 * ¡Hola Ada!
 * ¡Hola Greta!
 * ¡Hola Grace!
 * */

function dividirCadena(cadenaADividir, separador) {
    var arrayDeCadenas = cadenaADividir.split(separador);
    console.log('Ingrese nombres: "' + cadenaADividir + '"');

    for (var i = 0; i < arrayDeCadenas.length; i++) {
        console.log("¡Hola " + arrayDeCadenas[i] + "! ");
    }
}

let arraynombres = prompt("Ingresa los nombres");
var espacio = " ";
dividirCadena(arraynombres, espacio);





//02
/**
 * Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:
 * 
 * Ingrese números: 5 7 99 34 54 2 12
 * El menor número es: 2
 */


let numeros = prompt("Ingresa los numeros");
let array = numeros.split(" ");
menor = array[0];
for (i = 0; i < array.length; i++) {
    if (parseInt(array[i]) < menor) {
        menor = parseInt(array[i]);
    }
}
console.log("El menor número es: " + menor);


// 03
/**
 * Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de todos los números. Ejemplo:
 * Ingrese números: 5 7 10 12 24
 * La suma de todos los números es: 58
 */
let numeros = prompt("Ingresa los numeros");
let array = numeros.split(' ');
console.log('Ingrese números: "' + array + '"');
let suma = 0;
for (i = 0; i < array.length; i++) {
    suma = suma + parseInt(array[i]);
}
console.log("La suma de todos los números es: " + suma);


// 04        ///////////////////////////////////MALOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO///////////////////////////////////////////
/**
 * Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea averiguar si existe. El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no. Ejemplo:
 * Ingrese valores: 5 7 99 34 54 2 12
 * Ingrese valor a buscar: 54
 * El valor 54 se encuentra entre los valores originales
 */
let numeros = prompt("Ingresa los numeros");
let array = numeros.split(' ');
let encuentra = false;
let busca = parseInt(prompt("Ingrese valor a buscar:"));

console.log('Ingrese números: "' + array + '"');
console.log("Ingrese valor a buscar: " + busca);

for (i = 0; i < array.length; i++) {
    if (array[i] === busca) {
        encuentra = true;
    } else { encuentra = false; }
}

if (encuentra = true) {
    console.log("El valor " + busca + " se encuentra entre los valores originales");
} else {
    console.log("El valor " + busca + " no se encuentra entre los valores originales");
}

// 05
/**
 * Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea encontrar el índice. El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, o indicar si no se ha encontrado. Ejemplo:
 * Ingrese valores: 5 7 12 34 54 2 12
 * Ingrese valor a buscar: 12
 * El valor 12 se encuentra en el índice 12
 */

// 06
/**
 * Crear un programa que permita saber si Sam y Frodo están juntos. El programa debe permitir ingresar nombres separados por espacios, y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después. Ejemplo:
 * Ingresar nombres: Sam Frodo Legolas
 * Sam y Frodo están juntos, ¡Frodo está a salvo!
 * Ingresar nombres: Sam Orco Frodo
 * Sam y Frodo están separados, ¡Frodo está en peligro!
 */

let str = prompt("Ingrese los nombres de la comunidad del anillo");
let comunidad = str.split(' ');



for (i = 0; i < comunidad.length; i++) {

    if (comunidad[i] == "sam") {
        if (comunidad[i + 1] == "frodo" || comunidad[i - 1] == "frodo") {
            alert("Frodo esta a salvo!");
        } else {

            alert("Frodo esta en peligro!");
        }
    }

}


// 07
/**
 * Crear un programa que pida ingresar "manzana", "pera"y "durazno" y devuelva un mensaje 
 * con la cantidad que hay de cada una. Ejemplo:
 * Ingrese frutas: manzana manzana pera durazno pera durazno manzana
 * Hay 3 🍎, 2 🍐 y 2 🍑
 */


// ///////////07 
let str = prompt("Contador de ensalada de frutas");
let ensalada = str.split(' ');
let countPera = 0;
let countDurazno = 0;
let countManzana = 0;

for (i = 0; i < ensalada.length; i++) {
    if (ensalada[i] == "manzana") {
        countManzana++;
    } else if (ensalada[i] == "durazno") {
        countDurazno++;
    } else if (ensalada[i] == "pera") {
        countPera++;
    } else {
        alert("Ingresaste una fruta podrida!");

    }

}


console.log(`Hay ${countManzana} 🍎, ${countPera} 🍐 y ${countDurazno} 🍑`);




// //////////////////////////// 07 - con Switch 

let str = prompt("Contador de ensalada de frutas");
let ensalada = str.split(' ');
let countPera = 0;
let countDurazno = 0;
let countManzana = 0;

for (i = 0; i < ensalada.length; i++) {


    switch (ensalada[i]) {
        case "manzana":
            countManzana++;
            break;
        case "durazno":
            countDurazno++;
            break;
        case "pera":
            countPera++;
            break;
        default:
            alert("Ingresaste una fruta podrida!");
            //i=ensalada.length;
            break;
    }


}


console.log(`Hay ${countManzana} 🍎, ${countPera} 🍐 y ${countDurazno} 🍑`);