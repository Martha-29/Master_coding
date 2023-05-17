

alert("Esta es una funcion de alerta"); // Ventanas emergentes, advertencias o errores


/*Funcion que muestra una ventana emergente con
 un mensaje y un campo de entrada de texto */ 

var nombre =  prompt("¿Cuál es tu nombre?");

var apellidos= prompt("¿Cuáles son tus apellidos?");

var nacionalidad= prompt("¿Cuál es tu nacionalidad?");

var gatos=Number(prompt("¿Cuántos gatos tienes?"));

var perros=Number(prompt("¿Cuántos perros tienes?"));

document.write("Hola, el usuario es: " + nombre + " " +  apellidos + " tiene la nacionalidad " + nacionalidad);

document.write(" tiene " + gatos + " gatos y " +  perros + " perros");

//var total=parseInt(perros) + parseInt(gatos);
var total = perros + gatos;

document.write(" en total tiene " + total + " mascotas");





// Pedirle al usuario su nombre, ambos apellidos y nacionalidad
// Preguntar cuantos gatos tiene
// Preguntar cuantos perros tiene
// Van a mostrar toda su informacion
// Su nombre del usuario es Nombre, Apellido paterno + Apellido materno y tiene la nacionalidad...
// Tine x cantidad perros y x cantidad de gatos
// En total tiene x mascotas