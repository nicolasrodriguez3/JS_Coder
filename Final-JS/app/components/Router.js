import { Home } from "./Home.js";
import { ListaTareas } from "./ListaTareas.js";
import { logicaListaTareas } from "./logicaListaTareas.js";
import { mostrarTareas } from "./mostrarTareas.js";
import { Temporizador } from "./Temporizador.js";

export function Router() {
	const d = document,
		w = window,
		{ hash } = location,
		$root = d.getElementById("root")

	console.log(hash);

	if (!hash || hash === "#/") {
		$root.innerHTML = null;
		Home();
	} else if (hash === "#/lista-tareas") {
		$root.innerHTML = ListaTareas();
		const $form = d.querySelector(".form"),
		$resultado = d.getElementById("resultado");
		let tareas = JSON.parse(localStorage.getItem("listaTareas")) || [];

		$resultado.appendChild = mostrarTareas(tareas);
		$form.addEventListener("submit", logicaListaTareas);

	} else if (hash === "#/clima") {
		$root.innerHTML = Temporizador()
	} else if (hash === "#/temporizador") {
		$root.innerHTML = Temporizador()
	} else {
		Home();
	}


}
