export function Clock() {
	const $clock = document.createElement("div"),
		mostrarReloj = () => {
			let today = new Date(),
				hr = today.getHours(),
				min = today.getMinutes(),
				seg = today.getSeconds()

			//Agregar un cero adelante del numero si es menor a 10
			min = ("0" + min).slice(-2)
			seg = ("0" + seg).slice(-2)

			$clock.innerHTML = hr + ":" + min + ":" + seg
		}
		
	mostrarReloj()
	setInterval(mostrarReloj, 1000)
	return $clock
}
