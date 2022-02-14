const tareas = [];

const btn = document.getElementById("btn").addEventListener("click", (e) => {
	e.preventDefault();
	const tarea = document.getElementById("tarea");

	// Solo agregar tareas si no estan en blanco
	if (tarea.value !== "") {
		//agregar la tarea como un objeto al array tareas
		tareas.unshift({
			tarea: tarea.value.trim(),
			id: Date.now(),
			completada: false,
		});

		mostrarTareas();
	}
	// limpiar el input y focusearlo
	tarea.value = "";
	tarea.focus();
});

const mostrarTareas = function () {
	// obtener el div donde se agregan las tareas y limpiar el contenido
	const resultado = document.getElementById("resultado");
	resultado.textContent = "";

	let ul = document.createElement("ul");
	tareas.forEach((i) => {
		const li = document.createElement("li");
		li.classList.add("tarea");
		li.setAttribute("data-id", i.id);
		li.textContent = i.tarea;
		ul.appendChild(li);
	});

	//agregar las tareas
	resultado.appendChild(ul);
};

//Tachar tareas
resultado.addEventListener("click", (e) => {
	e.target.classList.toggle("tachado");
	const id = e.target.dataset.id;
	const tachar = (id) => {
		tareas.forEach((tarea) => {
			if (tarea.id == id) tarea.completada ? (tarea.completada = false) : (tarea.completada = true);
		});
	};
	tachar(id);
});
