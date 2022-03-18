import { mostrarTareas } from "./mostrarTareas.js";

export function logicaListaTareas(e) {
	e.preventDefault()
	let tareas = JSON.parse(localStorage.getItem("listaTareas")) || [{
		tarea: "tarea",
		id: 1,
		completada: false,
	}];

	const inputTarea = document.getElementById("tarea");
	const form = document.querySelector("form");

	
	mostrarTareas()

		let tarea = inputTarea.value.trim();

		// Solo agregar tareas si no estan en blanco
		if (tarea !== "") {
			//agregar la tarea como un objeto al array tareas
			tareas.unshift({
				tarea: tarea,
				id: Date.now(),
				completada: false,
			});

			mostrarTareas(tareas);
		}
		// limpiar el input y focusearlo
		form.reset();
		inputTarea.focus();
	

	

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
			if (tarea.id == id) {
				tarea.completada ? (tarea.completada = false) : (tarea.completada = true);
			}
			mostrarTareas();
		});
	}
/*
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
	papelera.addEventListener("dragleave", () => {
		papelera.style.opacity = 1;
	});

	papelera.addEventListener("drop", (e) => {
		papelera.style.opacity = 1;
		console.log(elementoArrastrado.dataset.id);
		tareas.forEach((tarea, i) => {
			console.log(tarea.id, elementoArrastrado.dataset.id);
			if (tarea.id == elementoArrastrado.dataset.id) tareas.splice(i, 1);
		});
		mostrarTareas();
	});

	function agregarBorrador() {
		tareas.length > 0 ? (papelera.style.display = "flex") : (papelera.style.display = "none");
	}

	*/
}

