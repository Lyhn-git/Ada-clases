//Crear un programa que ofrezca a elegir entre 3 marcas distintas para un producto. 
//Una vez elegida la marca debe ofrecer elegir entre dos modelos distintos de la marca. 
//Finalmente debe mostrar el producto elegido. Cada marca debe tener modelos distintos a
//los de otras marcas (no pueden tener el mismo nombre). P. ej: Philip 3000, Philip 5000, Sony XA, Sony X100, etc.

alert("¡Elige la marca de celulares de tu preferencia!");
let marca = prompt("Escribe Samsung, iPhone o Xiaomi;");

if (marca === "Samsung" || marca === "samsung") {
    alert("Elija el modelo:");
    let modelo = prompt("Elige entre Galaxy A2 o  Galaxy A10");
    console.log(modelo);
} else if (marca === "iPhone" || marca === "iphone") {
    alert("Elija el modelo:");
    let modelo = prompt("Elige entre X o  Xpro");
    console.log(modelo);
} else if (marca === "Xiaomi" || marca === "xiaomi") {
    alert("Elija el modelo:");
    let modelo = prompt("Elige entre  Mi 9 o Redmi 8 ");
    console.log(modelo);
} else { alert("Por favor escribir textualmente la marca del producto."); }