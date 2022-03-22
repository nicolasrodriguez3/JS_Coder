export function TemporizadorDOM() {
	return `
<div id="temporizador">
	<label for="minutos" class="label-temporizador">
		Min:<input type="number" id="minutos" min="0" max="99" value="1" placeholder="00"/>
	</label>
	<label for="segundos" class="label-temporizador">
		Seg:<input type="number" id="segundos" min="0" max="60" placeholder="00" />
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
		$btnParar = $botonesTemporizador.children[2]

	let timer, segundosRestantes

	//ocultar botones pausar y parar
	$btnParar.style.display = "none"
	$btnPausar.style.display = "none"

	// evento para iniciar el temporizador
	d.addEventListener("click", (e) => {
		if (!e.target.matches("#iniciar-temporizador")) return false

		let minutos = $minutos.value,
		segundos = $segundos.value

		// si el temporizador esta en pausa, no recalcular los segundos restantes
		if($temporizador.style.display == ""){
			segundosRestantes = minutos * 60 + segundos
		}

		$displayTemporizador.style.display = ""
		$temporizador.style.display = "none"
		$btnIniciar.style.display = "none"
		$btnParar.style.display = ""
		$btnPausar.style.display = ""
		
		//segundosRestantes = minutos * 60 + segundos 
		console.log("hola")

		$displayTemporizador.innerHTML = segundosRestantes
		timer = setInterval(() => {
			segundosRestantes -= 1
			$displayTemporizador.innerHTML = segundosRestantes
			if (segundosRestantes < 0) {
				clearInterval(timer)
				console.log("fin")
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
}
