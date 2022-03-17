export function Apps() {
	const $div = document.createElement("div"),
		apps = [
			{ nombre: "Lista de tareas", hash: "#/lista-tareas" },
			{ nombre: "Clima", hash: "#/clima" },
			{ nombre: "Temporizador", hash: "#/temporizador" },
		];

	apps.forEach(({nombre, hash}) => {
		const $a = document.createElement("a");
		$a.href = hash;
		$a.textContent = nombre;

		$div.appendChild($a);
	});
	return $div;
}
