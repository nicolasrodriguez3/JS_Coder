const temporizador = document.querySelector("#temporizador");
const resultado = document.querySelector("#temporizador-reloj");
const parar = document.querySelector("#parar-temporizador");
const sonido = new Audio("./sound/SD_ALERT.mp3");

let timer;
let tiempoInicial;
let segundosRestantes;


const actualizarTimer = () => {
	if (segundosRestantes >= 0) {
		resultado.textContent = `${Math.floor(segundosRestantes / 60)}:${
			segundosRestantes % 60 < 10 ? "0" + (segundosRestantes % 60) : segundosRestantes % 60
		}`;
	} else {
		resultado.textContent = `-${Math.floor(Math.abs(segundosRestantes) / 60)}:${
			Math.abs(segundosRestantes) < 10 ? "0" + Math.abs(segundosRestantes) : Math.abs(segundosRestantes) % 60
		}`;
	}
};

const cuentaRegresiva = () => {
	if (timer) clearInterval(timer);
	return setInterval(() => {
		segundosRestantes -= 1;
		actualizarTimer();
		if (segundosRestantes < 1 && Math.abs(segundosRestantes) % 4 === 0 && segundosRestantes > -30) sonido.play();
	}, 1000);
};

// Iniciar temporizador
temporizador.addEventListener("submit", (e) => {
	e.preventDefault();

	if (!timer) {
		const minutos = parseInt(document.querySelector("#minutos").value) || 0;
		const segundos = parseInt(document.querySelector("#segundos").value) || 0;
		segundosRestantes = minutos * 60 + segundos;
		tiempoInicial = segundosRestantes

		resultado.classList.remove("parpadear");
		actualizarTimer();

		timer = cuentaRegresiva();
		parar.addEventListener("click", pararTemporizador);
		temporizador[2].textContent = "Reset"
	}else{
		resultado.textContent = ""
		temporizador[2].textContent = "Iniciar"
		pararTemporizador()
		resultado.classList.remove("parpadear");
		parar.textContent = "Parar";
		
	}
});

// Parar temporizador
function pararTemporizador() {
	// si existe el temporizador lo pausamos
	if (timer) {
		clearInterval(timer);
		//removemos el id del temporizador
		timer = null;
		resultado.classList.add("parpadear");
		parar.textContent = "Reanudar";
	} else {
		timer = cuentaRegresiva();
		resultado.classList.remove("parpadear");
		parar.textContent = "Parar";
	}
}
