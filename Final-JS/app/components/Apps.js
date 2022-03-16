export function Apps() {
	const $div = document.createElement("div"),
		apps = ["Lista de tareas", "Clima", "Temporizador"];

	apps.forEach((app) => {
		const $a = document.createElement("a");
		$a.href = "#";
		$a.textContent = app;

		$div.appendChild($a);
	});
	return $div;
}
