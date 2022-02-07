/*let nombre = prompt("Ingrese su nombre");
if (nombre != null && nombre != "") {
	document.write("<h2>Hola " + nombre + "</h2>");
}

let multiplicador = parseInt(prompt("¿La tabla de multiplicar de que número desea conocer?"));
let number = parseInt(prompt("¿Hasta que valor?"));

for (let i = 0; i <= number / multiplicador; i++) {
	document.write(`<p>${i} * ${multiplicador} = ${i * multiplicador}</p>`);
}
*/

// Ejercicio 1: imprima la suma de todos los números impares entre 1 y 100
let min = 1;
let max = 100;
let resultado = null;
for (let i = min; i <= max; i++) {
	if (i % 2 != 0) {
		resultado += i;
	}
}
console.log("La suma de los números impares entre " + min + " y " + max + " es " + resultado);

function validar() {
	if (palabra == undefined || palabra == "") {
		alert("Mala onda");
		palabra = "";
	} else {
		palabra = palabra.toLowerCase();
	}
}

let palabra = prompt("Adivina mi nombre:");
validar();
let contador = 1;

while (palabra != "nicolas" && palabra != "nico") {
	if (palabra === "") break;
	alert("Nop");
	if (contador === 3) alert("Una ayudita: empieza con N");
	contador++;
	palabra = prompt("Adivina mi nombre:");
	validar();
}
if (palabra == "nico" || palabra == "nicolas") {
	alert("Sii!");
}


document.getElementById("recargar").addEventListener("click", () => location.reload())
