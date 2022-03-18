export function mostrarTareas(tareas) {
	const $resultado = document.getElementById("resultado");
	console.log(tareas);
	// limpiar el contenido del div donde se agregan las tareas
	//resultado.textContent = "";
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
	localStorage.setItem("listaTareas", JSON.stringify(tareas));

	//agregar las tareas
	$resultado.appendChild($ul)

}