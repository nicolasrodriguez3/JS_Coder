export function clock() {
	const clock = document.createElement("div")
	const today = new Date();
	let hr = today.getHours();
	let min = today.getMinutes();
	let seg = today.getSeconds();

	//Agregar un cero adelante del numero si es menor a 10
	min = agregarCero(min);
	seg = agregarCero(seg);

	clock.innerHTML = hr + ":" + min + ":" + seg;


	function agregarCero(i) {
		return i < 10 ? (i = "0" + i) : i;
	}

	return clock
}
