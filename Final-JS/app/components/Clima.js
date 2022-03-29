import { obtenerDatos } from "../helpers/fetch.js"

export function ClimaUI() {
	return `
	<div id="clima-ui">
		<div id="el-clima">
				<label for="ciudades">
					<input type="text" name="ciudades" id="ciudades" list="lista-ciudades" autofocus autocomplete="off">
				</label>
				<datalist id="lista-ciudades"></datalist>
				<input type="button" value="Consultar" id="consultar">
			</div>
			<div id="resultado"></div>
	</div>
	`
}
export function mostrarClima() {
	const d = document,
		$resultado = d.getElementById("resultado")
	let ciudadesAPI

	$resultado.style.display = "none"
	obtenerDatos({
		url: "https://ws.smn.gob.ar/map_items/weather",
		//agregar las ciudades como opciones del input
		funcion: (ciudades) => {
			ciudadesAPI = ciudades

			const $datalist = d.getElementById("lista-ciudades"),
				$fragment = d.createDocumentFragment()

			ciudades.forEach((ciudad) => {
				const $option = d.createElement("option")
				$option.value = ciudad.name
				$fragment.appendChild($option)
			})

			$datalist.appendChild($fragment)
		},
	})

	setTimeout(() => {
		d.addEventListener("click", (e) => {
			if (!e.target.matches("#consultar")) return false
			const $inputCiudad = d.getElementById("ciudades"),
				ciudad = $inputCiudad.value.trim()
			if (!ciudad) return false
			const ciudadAPI = ciudadesAPI.find((c) => c.name === ciudad)
			if (!ciudadAPI) return false

			let { name, weather } = ciudadAPI,
				plantillaHTML = `
			<h2>${name}</h2>
			<p class="descripcion">${weather.description}</p>
			<div class="datos">
				<div class="grados">${weather.tempDesc}</div>
				<div class="mas-datos">
					<div class="humedad" title="Humedad">💧 <span>${weather.humidity}%</span></div>
					<div class="visibilidad" title="Visibilidad">👀 <span>${weather.visibility}Km</span></div>
					<div class="viento" title="Viento">🍃 <span>${weather.wing_deg}</span><br>💨 <span>${weather.wind_speed}Km/h</span> </div>
				</div>
			</div>
			
		`
			$resultado.innerHTML = plantillaHTML
			$resultado.style.display = ""

			$inputCiudad.value = ""
		})
	}, 100)
}
