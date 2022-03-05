function clock() {
	const today = new Date();
	let hr = today.getHours();
	let min = today.getMinutes();
	let seg = today.getSeconds();

	//Agregar un cero adelante del numero si es menor a 10
	min = agregarCero(min);
	seg = agregarCero(seg);
	document.getElementById("clock").innerHTML = hr + ":" + min + ":" + seg;

	setTimeout(clock, 1000);
}
function agregarCero(i) {
	return i < 10 ? (i = "0" + i) : i;
}

/*********** Snippets  ***********/
const inicio = "/pages/app-index.html"
const listaTareas = "/pages/app-listatareas.html";
const temporizador = "/pages/app-temporizador.html";

/*********** Detectar click  ***********/
const detectarApp = (e) => {
	let app = null;

	switch (e.target.dataset.name) {
		case "lista-tareas":
			app = listaTareas;
			break;
		case "temporizador":
			app = temporizador;
			break;
		case "volver":
			app = inicio;
			break;
		default:
			app = null;
			break;
	}
	return app;
};

const insertarApp = (e) => {
	e.preventDefault();
	app = detectarApp(e);
	if (!app) return; //si no si hizo clic en un link, salimos de la función

	const contenedor = document.querySelector("#contenido");
	console.log(app, contenedor);
	console.log(app);
	fetch(app)
		.then((res) => res.text())
		.then(data => contenedor.innerHTML = data)
		
};

document.addEventListener("DOMContentLoaded", insertarApp);
document.addEventListener("click", insertarApp);

