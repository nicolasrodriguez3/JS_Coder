export function eventListenerSubmit() {
	const d = document
	d.addEventListener("submit", (e) => {
		if (!e.target.matches(".form-lista-tareas")) return false
		e.preventDefault()
		agregarTareas()
	})

	d.addEventListener("click", e => {
		if ( !e.target.matches(".tarea") ) return false
		console.log(e.target);
		let tareas = JSON.parse(localStorage.getItem("listaTareas"))

		e.target.classList.toggle("tachado")
		const id = e.target.dataset.id
		
		tareas.forEach((tarea) => {
			if (tarea.id == id) {
				tarea.completada ? (tarea.completada = false) : (tarea.completada = true)
			}
		})
		localStorage.setItem("listaTareas", JSON.stringify(tareas))
		mostrarTareas(tareas)
	})
}

// Esta funcion escribe las tareas en el DOM
export function mostrarTareas(tareas) {
	const $resultado = document.getElementById("resultado")
	// Si no se pasan las tareas por parametro (esto ocurre al entrar a la app), obtenerlas del localStorage
	if ( !tareas ) tareas = JSON.parse(localStorage.getItem("listaTareas")) || []
	
	if (tareas.length === 0) {
		$resultado.textContent = "No hay tareas pendientes!"
		return
	}

	// limpiar el contenido del div donde se agregan las tareas
	$resultado.textContent = ""

	const $ul = document.createElement("ul")
	tareas.forEach((i) => {
		const $li = document.createElement("li")

		if (i.completada) $li.classList.add("tachado")
		$li.classList.add("tarea")
		$li.setAttribute("data-id", i.id)
		$li.draggable = true
		$li.textContent = i.tarea

		$ul.appendChild($li)
	})

	//agregar las tareas al DOM
	$resultado.appendChild($ul)
}

export function agregarTareas() {
	const d = document,
		$form = d.querySelector(".form-lista-tareas"),
		$inputTarea = d.getElementById("tarea"),
		tarea = $inputTarea.value.trim()

	let tareas = JSON.parse(localStorage.getItem("listaTareas")) || []

	// Solo agregar tareas si no estan en blanco
	if (tarea !== "") {
		//agregar la tarea como un objeto al array tareas
		tareas.unshift({
			tarea: tarea,
			id: Date.now(),
			completada: false,
		})

		localStorage.setItem("listaTareas", JSON.stringify(tareas))
		mostrarTareas(tareas)
	}
	// limpiar el input y focusearlo
	$form.reset()
	$inputTarea.focus()
}