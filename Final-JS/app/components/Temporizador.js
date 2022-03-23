export function TemporizadorDOM() {
	return `
<div id="temporizador">
	<label for="minutos" class="label-temporizador">
		<p>Min:</p>
		<input type="number" id="minutos" min="0"  placeholder="00"/>
	</label>
	<label for="segundos" class="label-temporizador">
		<p>Seg:</p>
		<input type="number" id="segundos" min="0" max="59" placeholder="00" />
	</label>
</div>

<div id="temporizador-reloj"></div>

<div id="botones-temporizador">
	<button type="button" class="btn-primary" id="iniciar-temporizador">Iniciar</button>
	<button type="button" class="btn-primary" id="pausar-temporizador">Pausar</button>
	<button type="button" class="btn-primary" id="parar-temporizador">Parar</button>
</div>`
}

export function temporizador() {
	const d = document,
		$minutos = d.getElementById("minutos"),
		$segundos = d.getElementById("segundos"),
		$temporizador = d.getElementById("temporizador"),
		$displayTemporizador = d.getElementById("temporizador-reloj"),
		$botonesTemporizador = d.getElementById("botones-temporizador"),
		$btnIniciar = $botonesTemporizador.children[0],
		$btnPausar = $botonesTemporizador.children[1],
		$btnParar = $botonesTemporizador.children[2],
		sonido = new Audio("./app/assets/SD_ALERT.mp3");

	let timer, segundosRestantes

	//ocultar botones pausar y parar
	$btnParar.style.display = "none"
	$btnPausar.style.display = "none"

	// evento para iniciar el temporizador
	d.addEventListener("click", (e) => {
		if (!e.target.matches("#iniciar-temporizador")) return false

		let minutos = Number($minutos.value),
			segundos = Number($segundos.value)

		// si el temporizador estaba en pausa, no recalcular los segundos restantes
		if ($temporizador.style.display === "") {
			segundosRestantes = minutos * 60 + segundos
		}

		$displayTemporizador.style.display = ""
		$temporizador.style.display = "none"
		$btnIniciar.style.display = "none"
		$btnParar.style.display = ""
		$btnParar.textContent = "Parar"
		$btnPausar.style.display = ""

		let min = Math.floor(Math.abs(segundosRestantes) / 60),
					seg = ("0" + Math.abs(segundosRestantes) % 60).slice(-2)
		$displayTemporizador.innerHTML = `${min}:${seg}`

		timer = setInterval(() => {
			segundosRestantes -= 1
			let min = Math.floor(Math.abs(segundosRestantes) / 60),
					seg = ("0" + Math.abs(segundosRestantes) % 60).slice(-2)
			
			if (segundosRestantes <= 0) {
				//clearInterval(timer)
				$displayTemporizador.innerHTML = `<p>Tiempo cumplido</p>-${min}:${seg}`
				$btnPausar.style.display = "none"
				$btnParar.textContent = "Volver"
				//return
				if (Math.abs(segundosRestantes) % 4 === 0 && segundosRestantes > -30) sonido.play()
			} else {
				$displayTemporizador.innerHTML = `${min}:${seg}`
			}
		}, 1000)
	})

	// evento para pausar el temporizador
	d.addEventListener("click", (e) => {
		if (!e.target.matches("#pausar-temporizador")) return false
		$btnIniciar.style.display = ""
		$btnParar.style.display = ""
		$btnPausar.style.display = "none"

		clearInterval(timer)
	})

	// evento para parar el temporizador
	d.addEventListener("click", (e) => {
		if (!e.target.matches("#parar-temporizador")) return false

		$temporizador.style.display = ""
		$displayTemporizador.style.display = "none"
		$btnIniciar.style.display = ""
		$btnParar.style.display = "none"
		$btnPausar.style.display = "none"

		clearInterval(timer)
	})
	window.addEventListener("hashchange", ()=>{
		clearInterval(timer)
	})
}
