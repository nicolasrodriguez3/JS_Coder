// IDEA:
/*
Crear una lista de productos menores al precio seleccionado por el usuario
*/

const productos = [];

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = Date.now();
  }
}
const prueba = new Producto("termo", 500);
console.log(prueba);

for (let i = 0; i < 5; i++) {
  const items = [
    "termo",
    "mate",
    "yerbera",
    "azucarera",
    "celular",
    "notebook",
  ];
  const precios = [900, 500, 300, 200, 50000, 120000];

  const producto = new Producto(items[i], precios[i]);
  productos.push(producto);
}
console.log(productos);

function mostrarProductos() {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < productos.length; i++) {
    const item = document.createElement("div");
    item.className = 'producto'
    const title = document.createElement("h2");
    const precio = document.createElement("p");
    console.log(productos[i]);
    let producto = productos[i];
    title.textContent = producto.nombre;
    precio.textContent = producto.precio;
    item.appendChild(title);
    item.appendChild(precio);
    fragment.appendChild(item);
  }
  const container = document.getElementById("container");
  container.appendChild(fragment);
}
mostrarProductos()