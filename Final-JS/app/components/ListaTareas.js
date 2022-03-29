export function ListaTareas() {
	return `
	<div class="container column">
		<h2 class="titulo">Lista de tareas</h2>
		<div class="contenedor">
			<form class="form-lista-tareas">
				<input type="text" id="tarea" autofocus autocomplete="off" />
				<button type="submit" id="btn" class="btn-primary">Agregar</button>
			</form>
			<div id="resultado"></div>
		</div>
		
	</div>`
}
export function eventListenerSubmit() {
	const d = document

	// Event listener para el formulario
	d.addEventListener("submit", (e) => {
		if (!e.target.matches(".form-lista-tareas")) return false
		e.preventDefault()
		agregarTareas()
	})

	// marcar tareas como completada y agregarle la clase "tachada"
	d.addEventListener("click", (e) => {
		if (!e.target.matches(".btn-ok") && !e.target.matches(".btn-img-ok")) return false
		e.stopImmediatePropagation()
		let tareas = JSON.parse(localStorage.getItem("listaTareas"))
		const id = e.target.dataset.id

		tareas.forEach((tarea) => {
			if (tarea.id == id) {
				tarea.completada ? (tarea.completada = false) : (tarea.completada = true)
			}
		})
		localStorage.setItem("listaTareas", JSON.stringify(tareas))
		mostrarTareas(tareas)
	})

	// borrar tareas
	d.addEventListener("click", (e) => {
		if (!e.target.matches(".btn-borrar")) return false 
		e.stopImmediatePropagation()
		let tareas = JSON.parse(localStorage.getItem("listaTareas"))
		const id = e.target.dataset.id

		let tareaborrar = tareas.find((tarea) => tarea.id == id)
		Swal.fire({
			title: `¿Estás seguro de borrar la tarea ${tareaborrar.tarea}?`,
			icon: 'question',
			showCancelButton: true,
			cancelButtonText: 'Cancelar',
			confirmButtonText: 'Si, borrar',
			customClass: {
				confirmButton: 'swal-button-confirm',
				cancelButton: 'swal-button-cancel',
			}
		}).then((result) => {
			if (result.isConfirmed) {
				tareas.forEach((tarea, index) => { if (tarea.id == id) tareas.splice(index, 1)	})
				localStorage.setItem("listaTareas", JSON.stringify(tareas))
				mostrarTareas(tareas)
				Swal.fire({
					title: 'Confirmado!',
					text: 'La tarea fue borrada.',
					icon: 'success',
					customClass: {
						confirmButton: 'swal-button-confirm'
					}
				})
			}
		})
	})
}

// Esta funcion escribe las tareas en el DOM
export function mostrarTareas(tareas) {
	const $resultado = document.getElementById("resultado"),
		$ul = document.createElement("ul"),
		$fragment = document.createDocumentFragment()
	// Si no se pasan las tareas por parametro (esto ocurre al entrar a la app), obtenerlas del localStorage
	if (!tareas) tareas = JSON.parse(localStorage.getItem("listaTareas")) || []
	if (tareas.length === 0) {
		$resultado.textContent = "No hay tareas pendientes!"
		return
	}

	// limpiar el contenido del div donde se agregan las tareas
	$resultado.textContent = ""

	tareas.forEach((i) => {
		const $li = document.createElement("li"),
			$ok = document.createElement("img"),
			$borrar = document.createElement("img"),
			$botones = document.createElement("span"),
			$tarea = document.createElement("span")

		// si la tarea esta completada, agregarle la clase "tachado"
		if (i.completada) $tarea.classList.add("tachado")

		$tarea.textContent = i.tarea

		$ok.src = "./app/assets/check.png"
		$ok.classList.add("btn-ok")
		$borrar.src = "./app/assets/cancel.png"
		$borrar.classList.add("btn-borrar")

		i.completada ? ($ok.src = "./app/assets/history.png") : ($ok.src = "./app/assets/check.png")

		// agregar el atributo data-id para poder identificar la tarea
		$ok.setAttribute("data-id", i.id)
		$borrar.setAttribute("data-id", i.id)

		$botones.classList.add("botones")
		$botones.appendChild($ok)
		$botones.appendChild($borrar)

		$li.classList.add("tarea")
		$li.appendChild($tarea)
		$li.appendChild($botones)

		$fragment.appendChild($li)
	})
	
	//agregar las tareas al DOM
	$ul.appendChild($fragment)
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
