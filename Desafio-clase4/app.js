"use strict";
/*
let costo = Number(prompt("Costo de la comida: (ej: 500)"));
let propina = parseInt(prompt("Porcentaje de propina a dejar: (sin el %)"));

let costoTotal = ( costo + (costo * propina) / 100 ).toFixed(2);

let personas = parseInt(prompt("¿Cuantas personas pagan?"));

if (!isNaN(costoTotal) && !isNaN(personas)) {
  alert(`Precio total ${costoTotal}
Cada uno debe pagar ${costoTotal / personas}`);
} else{
  alert("Faltan ingresar datos")
}
*/

let $costo = document.getElementById("costo");
let $porcentaje = document.getElementById("propina");
let $personas = document.getElementById("personas");

let costo = Number($costo.value);
let porcentaje = Number($porcentaje.value) / 100;
let personas = parseInt($personas.value);

let error;

let calcular = document.getElementById("calcular");
calcular.addEventListener("click", (e) => {
	e.preventDefault();
	costo = Number($costo.value);
	porcentaje = Number($porcentaje.value) / 100;
	personas = parseInt($personas.value);

	let costoTotal = costo + costo * porcentaje;
	let aPagar = parseFloat((costoTotal / personas).toFixed(2));
	console.log(aPagar);
	mostrarResultado(aPagar);
});

function mostrarResultado(valor) {
	const resultado = document.getElementById("resultado");
	if (costo == "" || porcentaje == "") {
		resultado.textContent = "Faltan ingresar datos";
	} else if (!isNaN(valor)) {
		resultado.textContent = `Debe pagar $${valor} cada uno`;
	} else {
		resultado.textContent = "Ocurrio un error: " + error;
	}
}

$personas.addEventListener("change", () => {
	personas = parseInt($personas.value);
	if (personas < 1) {
		error = "Debe haber al menos una persona";
	}
});
