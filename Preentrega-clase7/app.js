"use strict";
const resultado = document.getElementById("resultado");
const inputTarea = document.getElementById("tarea");

const tareas = [
	{
		tarea: "prueba",
		id: Date.now(),
		completada: false,
	},
	{
		tarea: "prueba true",
		id: Date.now(),
		completada: true,
	}
];
mostrarTareas();

const form = document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
	let tarea = inputTarea.value.trim()

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
	inputTarea.value = "";
	inputTarea.focus();
});

function mostrarTareas() {
	// limpiar el contenido del div donde se agregan las tareas
	resultado.textContent = "";
	let ul = document.createElement("ul");

	tareas.forEach((i) => {
		const li = document.createElement("li");
<<<<<<< HEAD

		if (i.completada) li.classList.add("tachado")
=======
>>>>>>> origin/main
		li.classList.add("tarea");
		li.setAttribute("data-id", i.id);
		li.draggable = true;
		li.textContent = i.tarea;
		
		ul.appendChild(li);
	});

	//agregar las tareas
	resultado.appendChild(ul);
}

//Tachar tareas
resultado.addEventListener("click", (e) => {
	// Verificar si el elemento clickeado es uno de los LI
	if (e.target.toString() == "[object HTMLLIElement]") {
		e.target.classList.toggle("tachado");
		const id = e.target.dataset.id;

		actualizarEstadoTarea(id)
	}
})

function actualizarEstadoTarea(id) {
	tareas.forEach((tarea) => {
		if (tarea.id == id) {
			tarea.completada ? (tarea.completada = false) : (tarea.completada = true);
		}
	});
}

// obtener el div donde se borraran las tareas
const papelera = document.getElementById("papelera");
//identificar la tarea arrastrada
let elementoArrastrado;

resultado.addEventListener("dragstart", (e) => {
	console.log(e);
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
papelera.addEventListener("dragleave", (e) => {
	papelera.style.opacity = 1;
});

papelera.addEventListener("drop", (e) => {
	console.log(e);
	//document.querySelector("#resultado>ul").removeChild(elementoArrastrado);
});

function agregarBorrador() {
	tareas.length > 0 ? (papelera.style.display = "flex") : (papelera.style.display = "none");
}
