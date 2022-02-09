const resultado = document.getElementById("resultado");
const btn = document.getElementById("btn").addEventListener("click", (e) => {
	const tarea = document.getElementById("tarea").value;
	console.log(tarea);
	tareas.push(tarea.trim());
	mostrarTareas();
});
const tareas = [];
const mostrarTareas = function () {
	let ul = document.createElement("ul");
	resultado.textContent = "";

	tareas.forEach((i) => {
		const p = document.createElement("p");
		p.classList.add(tarea)
		p.textContent = i;
		ul.appendChild(p);
	});

	resultado.appendChild(ul);
};
