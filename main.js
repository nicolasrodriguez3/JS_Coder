let resultado = document.getElementById("desafios");
fetch("./desafios.json")
	.then((response) => response.json())
	.then((data) => {
		let desafios = data;
		console.log(desafios);
		let fragment = document.createDocumentFragment();
		for (const desafio of desafios) {
			const anchor = document.createElement("a");
			anchor.textContent = desafio.titulo;
			anchor.href = desafio.ruta;
			anchor.className = "btn";
			fragment.appendChild(anchor);
			resultado.appendChild(fragment);
		}
	});
