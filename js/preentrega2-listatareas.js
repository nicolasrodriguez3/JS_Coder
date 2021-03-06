"use strict";
const resultado = document.getElementById("resultado");
const inputTarea = document.getElementById("tarea");
const form = document.querySelector("form");

let tareas = [];

// obtener tareas de local storage si existen
tareas = JSON.parse(localStorage.getItem("listaTareas")) || tareas
mostrarTareas();

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let tarea = inputTarea.value.trim();

	// Solo agregar tareas si no estan en blanco
	if (tarea !== "") {
		//agregar la tarea como un objeto al array tareas
		tareas.unshift({
			tarea: tarea,
			id: Date.now(),
			completada: false,
		});

		mostrarTareas();
	}
	// limpiar el input y focusearlo
	form.reset();
	inputTarea.focus();
});

function mostrarTareas() {
	// limpiar el contenido del div donde se agregan las tareas
	resultado.textContent = "";
	let ul = document.createElement("ul");

	tareas.forEach((i) => {
		const li = document.createElement("li");

		if (i.completada) li.classList.add("tachado");
		li.classList.add("tarea");
		li.setAttribute("data-id", i.id);
		li.draggable = true;
		li.textContent = i.tarea;

		ul.appendChild(li);
	});

	//agregar las tareas
	resultado.appendChild(ul);

	localStorage.setItem("listaTareas", JSON.stringify(tareas))
}

//Tachar tareas
resultado.addEventListener("click", (e) => {
	// Verificar si el elemento clickeado es uno de los LI
	if (e.target.toString() == "[object HTMLLIElement]") {
		e.target.classList.toggle("tachado");
		const id = e.target.dataset.id;

		actualizarEstadoTarea(id);
	}
});

function actualizarEstadoTarea(id) {
	tareas.forEach((tarea) => {
		if (tarea.id == id)	tarea.completada ? (tarea.completada = false) : (tarea.completada = true);
		mostrarTareas()
	});
}

// obtener el div donde se borraran las tareas
const papelera = document.getElementById("papelera");
//identificar la tarea arrastrada
let elementoArrastrado;

resultado.addEventListener("dragstart", (e) => {
	elementoArrastrado = e.target;
	e.target.style.opacity = 0.5;
	elementoArrastrado.style.transform = "scale(.5)";
});
resultado.addEventListener("dragend", (e) => {
	e.target.style.opacity = 1;
	elementoArrastrado.style.transform = "scale(1)";
});
// evita el comportamiento por defecto que impide ejecutar el evento DROP
papelera.addEventListener("dragover", (e) => {
	e.preventDefault();
	papelera.style.opacity = 0.5;
});
papelera.addEventListener("dragleave", () => {
	papelera.style.opacity = 1;
});


papelera.addEventListener("drop", (e) => {
	papelera.style.opacity = 1;
	tareas.forEach((tarea, i) => {
		if(tarea.id == elementoArrastrado.dataset.id) tareas.splice(i, 1)
	})
	let timerInterval
Swal.fire({
  text: 'Tarea eliminada',
  timer: 2000,
  timerProgressBar: true,
  willClose: () => clearInterval(timerInterval)
})
	mostrarTareas()
});

function agregarBorrador() {
	tareas.length > 0 ? (papelera.style.display = "flex") : (papelera.style.display = "none");
}
