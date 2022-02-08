"use strict";

let $costo = document.getElementById("costo");
let $porcentaje = document.getElementById("propina");
let $personas = document.getElementById("personas");

let costo = Number($costo.value);
let porcentaje = Number($porcentaje.value) / 100;
let personas = parseInt($personas.value);

let error;
let resultados = [];

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
		// Guardando los resultados para mostrar una lista de las consultas realizadas
		resultados.push({"costo": costo, "porcentaje": porcentaje, "personas": personas})
		resultado.innerHTML = `<small>Dejando el ${porcentaje*100}% de propina de $${costo} </small><p>Cada uno debe pagar <span>$${valor}</span></p>`;
		console.log(resultados);
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
