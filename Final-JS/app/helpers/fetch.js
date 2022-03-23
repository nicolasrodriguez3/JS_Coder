export function obtenerDatos(props) {
	const { url, funcion } = props;
	fetch(url)
		.then((res) => (res.ok ? res.json() : Promise.reject()))
		.then((datos) => {
			funcion(datos);
		})
		.catch((err) => {
			console.log("Ocurrio un error: ", err);
		});
}
