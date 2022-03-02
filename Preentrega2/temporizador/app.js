"use strict";
/* ************ DOM ************ */
const temporizador = document.querySelector("#temporizador");
const resultado = document.querySelector("#temporizador-reloj");
const btnStart = temporizador[2];
const btnReset = temporizador[3];
const sonido = new Audio("./sound/SD_ALERT.mp3");

/* ************ Variables iniciales ************ */
let timer;
let segundosRestantes = null;

/* ************ Funciones ************ */
const actualizarTimer = () => {
	if (segundosRestantes >= 0) {
		resultado.textContent = `${Math.floor(segundosRestantes / 60)}:${agregarCero(segundosRestantes)}`;
	} else {
		resultado.textContent = `-${Math.floor(Math.abs(segundosRestantes) / 60)}:${agregarCero(segundosRestantes)}`;
	}
};

function agregarCero(i) {
	if (i < 10) return (i = "0" + i);
	return i;
}

const cuentaRegresiva = () => {
	if (timer) clearInterval(timer);
	return setInterval(() => {
		segundosRestantes -= 1;
		actualizarTimer();
		if (segundosRestantes < 1 && Math.abs(segundosRestantes) % 4 === 0 && segundosRestantes > -30) sonido.play();
	}, 1000);
};

const iniciarTemporizador = (e) => {
	e.preventDefault();

	if (!timer) {
		const minutos = parseInt(document.querySelector("#minutos").value) || 0;
		const segundos = parseInt(document.querySelector("#segundos").value) || 0;
		segundosRestantes = minutos * 60 + segundos;
		actualizarTimer();
		timer = cuentaRegresiva();

		btnStart.textContent = "Pausar";
	} else if (timer === "pausa") {
		resultado.classList.remove("parpadear");
		actualizarTimer();
		timer = cuentaRegresiva();
		btnStart.textContent = "Pausar";
	} else {
		btnStart.textContent = "Iniciar";
		pararTemporizador();
	}
};

const pararTemporizador = () => {
	// si existe el temporizador lo pausamos
	if (timer) {
		clearInterval(timer);
		//removemos el id del temporizador
		timer = "pausa";
		resultado.classList.add("parpadear");
	} else {
		timer = cuentaRegresiva();
		resultado.classList.remove("parpadear");
	}
};

const resetTemporizador = () => {
	clearInterval(timer);
	timer = null;
	resultado.textContent = "";
	btnStart.textContent = "Iniciar";
};

/* ************ Eventos ************ */
temporizador.addEventListener("submit", iniciarTemporizador);
btnReset.addEventListener("click", resetTemporizador);
