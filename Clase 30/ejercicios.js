// 01
/*****************************************************************
 * Completar las condiciones
 */
// === o !==
if (1 !== 2) {
    console.log("Debe entrar");
}
// === o !==
if (2 !== 2) {
    console.log("NO debe entrar");
}
// >, >= o <
if (1 >= 1) {
    console.log("Debe entrar");
}

if (
    1 !== 2 // >, >=, !==
    &&
    5 >= 5 // <, <=, >, >=
) {
    console.log("Debe entrar");
}


// 02
/*************************************************************************************
 * Pedir dos prompts, deben ser largoPelo y barba.
 * Largo pelo pueden ser dos valores, "largo" o "corto". 
 * Barba puede ser true o false.
 * Hacer if-elseif-else para ofrecer corte de pelo si el pelo es largo, y afeitada si
 * barba es true. 
 * alert("Corte y afeitada") o alert("Corte").
 * Poner un alert en caso de que no se haga ni corte ni afeitada.
 ****************************************************************************************/

const largoPelo = prompt("Tienes el cabello largo o corto?");
const barba = prompt("Tiene barba?");

if (largoPelo === "largo") {
    pregun1 = prompt("Quisiera hacerse un corte?");
    if (pregun1 === "si") {
        corte = true;
    } else { corte = false }
} else if (largoPelo === "corto") {
    corte = false;
}

if (barba === "si") {
    pregun2 = prompt("Quisiera afeitarse?");
    if (pregun2 === "si") {
        afeitarse = true;
    } else { afeitarse = false }
} else if (barba === "no") { afeitarse = false; }

if (corte === true && afeitarse === true) {
    alert("Corte y afeitada");
} else if (afeitarse === true && corte === false) {
    alert("Afeitada");
} else if (afeitarse === false && corte === true) {
    alert("Corte");
} else {
    alert("No hacer ni corte ni afeitada");
}

// 03
/******************************************************************************
 * 
 * 1. Pedir un mes del año por prompt en números 
 *    (ej: 12)
 * 2. Devolver el mes del año en texto (ej: "Diciembre")
 * 3. Hacer 2 veces, una con SWITCH Y otra 
 *    con IF-ELSE IF-ELSE
 * 
 ****************************************************************************/

// 04
/******************************************************************************
 * 
 * 1. Pedir un día de la semana por prompt en texto 
 * (ej: "Lunes")
 * 2. Devolver el número del día (ej: 2)
 * 3. En caso de que el día ingresado no exista, tirar
 *    un error y agarrarlo, e imprimirlo.
 * 
 ****************************************************************************/