import { ClimaUI, mostrarClima } from "./Clima.js"
import { GoBack } from "./GoBack.js"
import { Home } from "./Home.js"
import { ListaTareas } from "./ListaTareas.js"
import { mostrarTareas, eventListenerSubmit } from "./mostrarTareas.js"
import { temporizador, TemporizadorDOM } from "./Temporizador.js"

export function Router() {
	const d = document,
		{ hash } = location,
		$root = d.getElementById("root")

	console.log(hash)

	if (!hash || hash === "#/") {
		$root.innerHTML = null
		Home()
	} else if (hash === "#/lista-tareas") {
		$root.innerHTML = ListaTareas()
		eventListenerSubmit()
		mostrarTareas()
	} else if (hash === "#/clima") {
		$root.innerHTML = ClimaUI()
		mostrarClima()
	} else if (hash === "#/temporizador") {
		$root.innerHTML = TemporizadorDOM()
		temporizador()
	} else {
		Home()
	}

	GoBack()

}
