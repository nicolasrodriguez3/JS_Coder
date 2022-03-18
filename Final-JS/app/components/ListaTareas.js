export function ListaTareas() {
	return `
	<div class="container column">
		<h1 class="titulo">Lista de tareas</h1>
		<form class="form">
			<input type="text" id="tarea" autofocus autocomplete="off" />
			<button type="submit" id="btn" class="btn-primary">Agregar</button>
		</form>
		<div id="resultado"></div>
		<div id="papelera">Borrar</div>
	</div>
	<div><a href="#/"><img src="./app/assets/arrow-circulo-96.png"></a></div>
	`;
}
