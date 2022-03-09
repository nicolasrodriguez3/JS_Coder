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
const inicio = "/pages/app-index.html";
const listaTareas = "/pages/app-listatareas.html";
const timer = "/pages/app-temporizador.html";

const links = document.getElementById("links-desafios")

/*********** Detectar click  ***********/
const detectarApp = (e) => {
	let app = {};

	switch (e.target.dataset.name) {
		case "lista-tareas":
			app.ruta = listaTareas;
			app.script = "../preentrega3-listatareas.js"
			break;
		case "temporizador":
			app.ruta = timer;
			app.script = "../preentrega3-temporizador.js"
			break;
		default:
			app.ruta = inicio;
			app.script = "../js/preentrega3.js"
			break;
	}
	return app;
};

const insertarApp = (e) => {
	console.log(e);
	e.preventDefault();
	if (!e.target.dataset.name) return; //si no si hizo clic en un link, salimos de la función
	let app = detectarApp(e);

	const contenedor = document.querySelector("#contenido");
	console.log(app, contenedor);
	console.log(app);
	fetch(app.ruta)
		.then((res) => res.text())
		.then((data) => {
			contenedor.innerHTML = data;
			document.appendChild = app.script
		});
};

document.addEventListener("DOMContentLoaded", clock);
links.addEventListener("click", insertarApp)
