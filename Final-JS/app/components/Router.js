import { Apps } from "./Apps.js";
import { Clock } from "./Clock.js";
import { Home } from "./Home.js";
import { ListaTareas } from "./ListaTareas.js";
import { Loader } from "./Loader.js";
import { logicaListaTareas } from "./logicaListaTareas.js";
import { mostrarTareas } from "./mostrarTareas.js";
import { Title } from "./Title.js";

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
		console.log("Clima");
	} else if (hash === "#/temporizador") {
		$root.innerHTML = "temporizador";
	} else {
		Home();
	}
}
