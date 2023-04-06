function crearProducto(nombre, descripcion, codigo, precio, stock, categoria) {
  return {
    nombre,
    descripcion,
    codigo: parseInt(codigo),
    precio: parseFloat(precio),
    stock: parseInt(stock),
    categoria
  };
}

function validarTexto(input) {
  let texto = "";
  while (!texto) {
    texto = prompt(input);
    if (!/^[a-zA-Z ]+$/.test(texto)) {
      alert("Ingrese solo letras");
      texto = "";
    }
  }
  return texto;
}

function validarNumero(input) {
  let numero = "";
  while (!numero) {
    numero = prompt(input);
    if (isNaN(numero)) {
      alert("Ingrese solo numeros");
      numero = "";
    }
  }
  return numero;
}

function guardarProductoEnJson(producto) {
  let productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
  productosGuardados.push(producto);
  localStorage.setItem('productos', JSON.stringify(productosGuardados));
  alert('Producto guardado con éxito!');
}

let continuar = true;
while (continuar) {
  const nombre = validarTexto("Ingrese el nombre del producto:");
  const descripcion = validarTexto("Ingrese la descripcion del producto:");
  const codigo = validarNumero("Ingrese el codigo del producto:");
  const precio = validarNumero("Ingrese el precio del producto:");
  const stock = validarNumero("Ingrese el stock del producto:");
  const categoria = validarTexto("Ingrese la categoria del producto:");
  
  const producto = crearProducto(nombre, descripcion, codigo, precio, stock, categoria);
  guardarProductoEnJson(producto);

  continuar = confirm("¿Desea continuar agregando productos?");
}

alert("¡Hasta luego!"); 

