import { ClimaUI, mostrarClima } from "./Clima.js"
import { Cronometro } from "./Cronometro.js"
import { Footer } from "./Footer.js"
import { GoBack } from "./GoBack.js"
import { Home } from "./Home.js"
import { ListaTareas, mostrarTareas, eventListenerSubmit } from "./ListaTareas.js"
import { temporizador, TemporizadorDOM } from "./Temporizador.js"

export function Router() {
	const d = document,
		{ hash } = location,
		$root = d.getElementById("root")

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
	} else if (hash === "#/cronometro") {
		Cronometro()
	} else {
		Home()
	}
	
	GoBack()
	Footer()
	//d.querySelector("footer").classList.toggle("desaparecer")
}