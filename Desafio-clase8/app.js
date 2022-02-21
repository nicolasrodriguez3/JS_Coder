const resultado = document.getElementById("resultado")

let datos 
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
		datos = json
		mostrarDatos()
	})

const select = document.getElementById("items")
select.addEventListener("change", mostrarDatos)

function mostrarDatos(){
	resultado.textContent = ""
	const elementosAMostrar = select.value
	const fragment = document.createDocumentFragment()
	for(let i = 0; i < elementosAMostrar; i++){
		const h2 = document.createElement("h2")
		const p = document.createElement("p")
		h2.textContent = datos[i].title
		p.textContent = datos[i].body
		fragment.appendChild(h2)
		fragment.appendChild(p)
	}
	resultado.appendChild(fragment)
}