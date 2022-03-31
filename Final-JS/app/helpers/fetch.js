export function obtenerDatos(props) {
	const { url, funcion } = props
	fetch(url)
		.then((res) => (res.ok ? res.json() : Promise.reject()))
		.then((datos) => {
			funcion(datos)
		})
		.catch((err) => {
			const d = document,
				$div = d.createElement("div"),
				$bntRecargar = d.createElement("button")

			$div.innerHTML = `<div>Ocurrio un error: ${err}.</div>`
			$div.classList.add("div-error")
			$bntRecargar.textContent = "Recargar"
			$bntRecargar.classList.add("btn-recargar")

			d.body.innerHTML = null
			d.body.appendChild($div)
			$div.insertAdjacentElement("beforeend", $bntRecargar)

			d.addEventListener("click", (e) => {
				if (!e.target.matches(".btn-recargar")) return false
				location.reload()
			})
		})
}
