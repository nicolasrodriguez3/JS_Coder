export function eventListenerSubmit() {
	document.addEventListener("submit", (e) => {
		if (!e.target.matches(".form-lista-tareas")) return false;
		e.preventDefault();
		agregarTareas();
	});
}

// Esta funcion escribe las tareas en el DOM
export function mostrarTareas() {
	const $resultado = document.getElementById("resultado");
	let tareas = JSON.parse(localStorage.getItem("listaTareas")) || [];

	if (tareas.length === 0) {
		$resultado.textContent = "No hay tareas pendientes!";
		return;
	}

	// limpiar el contenido del div donde se agregan las tareas
	$resultado.textContent = "";

	const $ul = document.createElement("ul");
	tareas.forEach((i) => {
		const $li = document.createElement("li");

		if (i.completada) $li.classList.add("tachado");
		$li.classList.add("tarea");
		$li.setAttribute("data-id", i.id);
		$li.draggable = true;
		$li.textContent = i.tarea;

		$ul.appendChild($li);
	});

	//agregar las tareas
	$resultado.appendChild($ul);
}

export function agregarTareas() {
	const $d = document,
		$form = $d.querySelector(".form-lista-tareas"),
		$inputTarea = $d.getElementById("tarea"),
		tarea = $inputTarea.value.trim();

	let tareas = JSON.parse(localStorage.getItem("listaTareas")) || [];

	// Solo agregar tareas si no estan en blanco
	if (tarea !== "") {
		//agregar la tarea como un objeto al array tareas
		tareas.unshift({
			tarea: tarea,
			id: Date.now(),
			completada: false,
		});
		localStorage.setItem("listaTareas", JSON.stringify(tareas));

		mostrarTareas();
	}
	// limpiar el input y focusearlo
	$form.reset();
	$inputTarea.focus();
}
