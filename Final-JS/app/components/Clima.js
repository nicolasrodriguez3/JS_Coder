import { obtenerDatos } from "../helpers/fetch.js"

export function ClimaUI() {
	return `
		<div class="elegir-ciudad">
			<label for="ciudades">
				<input type="search" name="ciudades" id="ciudades" list="lista-ciudades">
			</label>
			<datalist id="lista-ciudades"></datalist>
			<input type="button" value="Consultar" id="consultar">
		</div>
		<div id="resultado"></div>
	`
}
export function mostrarClima() {
	const d = document
	let ciudadesAPI

	obtenerDatos({
		url: "https://ws.smn.gob.ar/map_items/weather",
		//agregar las ciudades como opciones del input
		funcion: (ciudades) => {
			ciudadesAPI = ciudades
			const $datalist = d.getElementById("lista-ciudades"),
				$fragment = d.createDocumentFragment()
			ciudades.forEach(ciudad => {
				const $option = d.createElement("option")
				$option.value = ciudad.name
				$fragment.appendChild($option)
			});
			$datalist.appendChild($fragment)
			console.log("listo");
		},
	})

	d.addEventListener("click", (e) => {
		if (!e.target.matches("#consultar")) return false
		const d = document,
			$inputUsuario = d.getElementById("ciudades").value,
			$resultado = d.getElementById("resultado")

		const ciudadSeleccionada = ciudadesAPI.filter((ciudad)=> ciudad.name === $inputUsuario)
		const {name, weather} = ciudadSeleccionada[0],
			plantillaHTML = `
			<h2>${name}</h2>
			<div class="grados">${weather.tempDesc}</div>
			<div class="descripcion">${weather.description}</div>
			<div class="mas-datos">
				<div class="humedad">Humedad: ${weather.humidity}%</div>
				<div class="visibilidad">Visibilidad: ${weather.visibility}Km</div>
				<div class="viento">Viento: ${weather.wind_speed}Km/h ${weather.wing_deg}</div>
			</div>
		`
		$resultado.innerHTML = plantillaHTML
	})

	
}
