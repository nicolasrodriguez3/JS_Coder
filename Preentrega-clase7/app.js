const resultado = document.getElementById("resultado");
const btn = document.getElementById("btn").addEventListener("click", (e) => {
	e.preventDefault()
	const tarea = document.getElementById("tarea").value;
	console.log(tarea);
	tareas.unshift({
		tarea: tarea.trim(),
		id: Date.now(),
		completada: false
	});
	mostrarTareas();
});
const tareas = [];
const mostrarTareas = function () {
	let ul = document.createElement("ul");
	resultado.textContent = "";

	tareas.forEach((i) => {
		const li = document.createElement("li");
		li.classList.add("tarea")
		li.setAttribute("data-id", i.id)
		li.textContent = i.tarea;
		ul.appendChild(li);
	});

	resultado.appendChild(ul);
};

//Tachar tareas
resultado.addEventListener('click', (e) => {
	console.log(e.composedPath()[0].classList.toggle('tachado'));
	
})