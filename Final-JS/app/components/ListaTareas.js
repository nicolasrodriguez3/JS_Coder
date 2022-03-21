export function ListaTareas() {
	return `
	<div class="container column">
		<h1 class="titulo">Lista de tareas</h1>
		<form class="form-lista-tareas">
			<input type="text" id="tarea" autofocus autocomplete="off" />
			<button type="submit" id="btn" class="btn-primary">Agregar</button>
		</form>
		<div id="resultado"></div>
		<div id="papelera">Borrar</div>
	</div>`;
}