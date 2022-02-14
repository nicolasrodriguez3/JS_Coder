const resultado = document.getElementById("resultado");
const btn = document.getElementById("btn").addEventListener("click", (e) => {
	e.preventDefault()
	let tarea = document.getElementById("tarea");
	tareas.unshift({
		tarea: tarea.value.trim(),
		id: Date.now(),
		completada: false
	});
	tarea.value = "";
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
	console.log(e.target.dataset.id);
	//console.log(e.target.completada ? e.target.completada = false : e.target.completada = true)
	e.target.classList.toggle('tachado');
	
})