export function CronometroUI(){
	return `
	<div class="cronometro">
		<div>
			<span>Horas</span>
			<span id="cronometro-horas"></span>
		</div>
		<div>
			<span>Minutos</span>
			<span id="cronometro-minutos"></span>
		</div>
		<div>
			<span>Segundos</span>
			<span id="cronometro-segundos"></span>
		</div>
	</div>
	<div class="cronometro-botones">
		<button type="button" class="btn-primary" id="cronometro-iniciar">Iniciar</button>
		<button type="button" class="btn-primary" id="cronometro-pausar">Pausar</button>
		<button type="button" class="btn-primary" id="cronometro-parar">Parar</button>
	</div>
`
}

export function Cronometro(){
	const d = document,
		$root = d.getElementById("root")
	$root.innerHTML = CronometroUI()

	const $cronometroHoras = d.getElementById("cronometro-horas"),
		$cronometroMinutos = d.getElementById("cronometro-minutos"),
		$cronometroSegundos = d.getElementById("cronometro-segundos"),
		$cronometroIniciar = d.getElementById("cronometro-iniciar"),
		$cronometroPausar = d.getElementById("cronometro-pausar"),
		$cronometroParar = d.getElementById("cronometro-parar")

		$cronometroParar.style.display = "none"
		$cronometroPausar.style.display = "none"

		$cronometroHoras.innerHTML = "00"
		$cronometroMinutos.innerHTML = "00"
		$cronometroSegundos.innerHTML = "00"

		let cronometro = null

		$cronometroIniciar.addEventListener("click", () => {
			if (cronometro === null) {
				cronometro = setInterval(() => {
					let horas = parseInt($cronometroHoras.innerHTML),
						minutos = parseInt($cronometroMinutos.innerHTML),
						segundos = parseInt($cronometroSegundos.innerHTML)

					if (segundos === 59) {
						segundos = 0
						minutos++
					} else {
						segundos++
					}

					if (minutos === 59) {
						minutos = 0
						horas++
					}
					

					$cronometroHoras.innerHTML = ("0" + horas).slice(-2)
					$cronometroMinutos.innerHTML = ("0" + minutos).slice(-2)
					$cronometroSegundos.innerHTML = ("0" + segundos).slice(-2)

					$cronometroIniciar.style.display = "none"
					$cronometroPausar.style.display = ""
					$cronometroParar.style.display = ""
				}, 1000)
			}
		})

		$cronometroPausar.addEventListener("click", () => {
			clearInterval(cronometro)
			cronometro = null
			$cronometroIniciar.style.display = ""
			$cronometroPausar.style.display = "none"
		})

		$cronometroParar.addEventListener("click", () => {
			clearInterval(cronometro)
			cronometro = null
			$cronometroHoras.innerHTML = "00"
			$cronometroMinutos.innerHTML = "00"
			$cronometroSegundos.innerHTML = "00"

			$cronometroIniciar.style.display = ""
			$cronometroPausar.style.display = "none"
			$cronometroParar.style.display = "none"
		}
	)
}