"use strict";
/* ************ DOM ************ */
const temporizador = document.querySelector("#temporizador");
const resultado = document.querySelector("#temporizador-reloj");
const btnStart = temporizador[2];
const btnReset = temporizador[3];
const sonido = new Audio("../sound/SD_ALERT.mp3");
const iconPausa = "<i class='fa-solid fa-pause'></i>"
const iconPlay = "<i class='fa-solid fa-play'></i>"


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
	return ((i % 60) < 10) ? (i = "0" + (i % 60)) : (i % 60);
}

const cuentaRegresiva = () => {
	if (timer) clearInterval(timer);
	return setInterval(() => {
		segundosRestantes -= 1;
		actualizarTimer();
		if (segundosRestantes < 1 && Math.abs(segundosRestantes) % 4 === 0 && segundosRestantes > -30) sonido.play();
		if(segundosRestantes < 1) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...'
		})
	}
});
}
const iniciarTemporizador = (e) => {
	e.preventDefault();

	if (!timer) {
		const minutos = parseInt(document.querySelector("#minutos").value) || 0;
		const segundos = parseInt(document.querySelector("#segundos").value) || 0;
		segundosRestantes = minutos * 60 + segundos;
		actualizarTimer();
		timer = cuentaRegresiva();

		btnStart.innerHTML = iconPausa;
	} else if (timer === "pausa") {
		resultado.classList.remove("parpadear");
		actualizarTimer();
		timer = cuentaRegresiva();
		btnStart.innerHTML = iconPausa;
	} else {
		btnStart.innerHTML = iconPlay;
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
	resultado.innerHTML = "";
	btnStart.innerHTML = iconPlay;
};

/* ************ Eventos ************ */
temporizador.addEventListener("submit", iniciarTemporizador);
btnReset.addEventListener("click", resetTemporizador);
