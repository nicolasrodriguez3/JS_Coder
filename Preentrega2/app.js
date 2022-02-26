const temporizador = document.querySelector("#temporizador");
const resultado = document.querySelector("#temporizador-reloj");
const parar = document.querySelector("#parar-temporizador");
const sonido = new Audio("./sound/SD_ALERT.mp3");

let timer;
let segundosRestantes;
let funcionando = false;

const cuentaRegresiva = () => {
	if (timer) clearInterval(timer);
	return setInterval(() => {
		segundosRestantes -= 1;
		resultado.textContent = segundosRestantes;
		if (Math.abs(segundosRestantes) % 4 === 0 && segundosRestantes < 1) sonido.play();
	}, 1000);
};

// Iniciar temporizador
temporizador.addEventListener("submit", (e) => {
	e.preventDefault();

	const horas = parseInt(document.querySelector("#horas").value) || 0;
	const minutos = parseInt(document.querySelector("#minutos").value) || 0;
	const segundos = parseInt(document.querySelector("#segundos").value) || 0;
	segundosRestantes = horas * 60 * 60 + minutos * 60 + segundos;
	resultado.textContent = segundosRestantes;

	timer = cuentaRegresiva();
});

// Parar temporizador
parar.addEventListener("click", () => {
	// si existe el temporizador lo pausamos
	if (timer) {
		clearInterval(timer);
		resultado.classList.add("parpadear");
		//removemos el id del temporizador
		timer = null;
	} else {
		timer = cuentaRegresiva();
		resultado.classList.remove("parpadear");
	}
});
