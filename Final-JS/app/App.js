import { Router } from "./components/Router.js"
import { Loader } from "./components/Loader.js"

export function App() {
	const $root = document.getElementById("root"),
		tiempoAleatorio = Math.random() * 500 + 500

	$root.innerHTML = null
	$root.appendChild(Loader())
	
	setTimeout(Router, tiempoAleatorio)

	document.addEventListener("keydown", (e) => {
		let { hash } = location
		if (e.keyCode === 27 && (hash !== "#/" || !hash)) {
			location.hash = "#/"
		}
	})
}
