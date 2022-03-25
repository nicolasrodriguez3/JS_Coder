import { Clock } from "./Clock.js"

export function Home() {
	const $root = document.getElementById("root"),
		$h1 = document.createElement("h1")

	// Titulo
	$h1.classList.add("titulo")
	$h1.innerHTML = "Mini apps!"
	$h1.appendChild(Clock())

	// Links con las apps
	const $div = document.createElement("div"),
		apps = [
			{ nombre: "Lista de tareas", hash: "#/lista-tareas" },
			{ nombre: "Clima", hash: "#/clima" },
			{ nombre: "Temporizador", hash: "#/temporizador" },
		]

	apps.forEach(({ nombre, hash }) => {
		const $a = document.createElement("a")
		$a.href = hash
		$a.textContent = nombre

		$div.appendChild($a)
	})

	$div.classList.add("apps")
	$root.appendChild($h1)
	$root.appendChild($div)
}
