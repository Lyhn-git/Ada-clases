//Crear un programa que pregunte por el día, el mes, y el hemisferio (norte/sur) y devuelva la estación del año correspondiente

const dia = prompt("Inserte el día");
const mes = prompt("Inserte el mes");
const hemisferio = prompt("Escriba si se encuentra en el hemisferio norte o sur");

if ((dia >= 20 && mes == "marzo") || mes == "abril" || mes == "mayo" || (dia < 20 && mes == "junio")) {
    if (hemisferio == "norte") {
        alert("Estamos en primavera.");
    } else { alert("Estamos en Otoño"); }
} else if ((dia >= 20 && mes == "junio") || mes == "julio" || mes == "agosto" || (dia < 20 && mes == "septiembre")) {
    if (hemisferio == "norte") {
        alert("Estamos en Verano.");
    } else { alert("Estamos en Invierno"); }
} else if ((dia >= 20 && mes == "septiembre") || mes == "octubre" || mes == "noviembre" || (dia < 20 && mes == "diciembre")) {
    if (hemisferio == "norte") {
        alert("Estamos en Otoño.");
    } else { alert("Estamos en Primavera."); }
} else {
    if (hemisferio == "norte") {
        alert("Estamos en Invierno.");
    } else { alert("Estamos en Verano."); }
}

//Hacer un programa que permita cambiar la contraseña de usuario. Para eso tiene que responder las tres preguntas de seguridad. 
//Si las tres preguntas son respondidas correctamente, tiene que pedir por la nueva contraseña y luego mostrar un mensaje que fue cambiada.
//En caso de que al menos alguna pregunta fue respondida incorrectamente debe mostrar un mensaje advirtiéndolo. 
//Definir de antemano (hardcodear) preguntas y respuestas.

alert("Indique sus respuestas de seguridad");
let preg1 = prompt("Pregunta 1: ¿2+2?");
let preg2 = prompt("Pregunta 2: ¿5*5?");
let preg3 = prompt("Pregunta 3: ¿3/3?");

if (preg1 == 4 && preg2 == 25 && preg3 == 1) {
    let newpass = prompt("Corecto, introduzca nueva contraseña: ");
    if (newpass != "") {
        alert("Contraseña cambiada satisfactoriamente.");
    } else { alert("No se pudo cambiar la contraseña"); }
} else {
    alert("Tuvo una o más respuestas incorrectas, inténtelo de nuevo.")
}