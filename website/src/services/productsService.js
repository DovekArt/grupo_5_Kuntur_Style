const fs = require("fs");
const path = require("path");
const productosFilePath = path.join(__dirname, "../data/products.json");

function obtenerProductosArray() {
  const productosData = fs.readFileSync(productosFilePath, "utf-8");
  return JSON.parse(productosData);
}

const productos = obtenerProductosArray();

function buscar(id) {
  const productoEncontrado = productos.find(
    (producto) => producto.id === id
  );
  return productoEncontrado || null;
}

function guardarCambios() {
  fs.writeFile(
    productosFilePath,
    JSON.stringify(productos, null, 2),
    (err) => {
      if (err) {
        console.error(
          'Error al guardar los cambios en el archivo "products.json":',
          err
        );
      } else {
        console.log(
          'Se han guardado los cambios en el archivo "products.json"'
        );
      }
    }
  );
}

function vender(id) {
  const productoEncontrado = buscar(id);
  if (productoEncontrado) {
    if (productoEncontrado.stock > 0) {
      productoEncontrado.stock -= 1;
      guardarCambios();
      return productoEncontrado;
    } else {
      return "No hay stock disponible para vender este producto";
    }
  } else {
    return "Producto no encontrado";
  }
}

function cancelarVenta(id) {
  const productoEncontrado = buscar(id);
  if (productoEncontrado) {
    productoEncontrado.stock += 1;
    guardarCambios();
    return productoEncontrado;
  } else {
    return "Producto no encontrado";
  }
}

function productosParaLaVenta() {
  return productos.filter((producto) => producto.stock > 0);
}

function totalDeVentasProducto(id) {
  let total = 0;
  const stock = buscar(id).stock;
  const cantidadVentas = stock - buscar(id).stock;
  total = cantidadVentas;
  return total;
}

function totalDeVentas() {
  let total = 0;
  for (let i = 0; i < productos.length; i++) {
    const cantidadVentas = totalDeVentasProducto(i + 1);
    total += cantidadVentas;
  }
  return total;
}

function totalGanancias() {
  let total = 0;
  for (let i = 0; i < productos.length; i++) {
    const stock = buscar(i + 1).stock;
    const cantidadVendida = stock - productos[i].stock;
    total += cantidadVendida * productos[i].precio;
  }
  return total;
}

function descuentoProducto(porcentaje) {
  productos.forEach((producto) => {
    const descuento = producto.precio * (porcentaje / 100);
    const nuevoPrecio = producto.precio - descuento;
    producto.precio = nuevoPrecio;
  });
  guardarCambios();
  return productos;
}

function productosPorMarca(marca) {
  const marcaMinusculas = marca.toLowerCase();
  return productos.filter(
    (producto) => producto.marca.toLowerCase() === marcaMinusculas
  );
}

function productosPorTag(tag) {
  const tagMinusculas = tag.toLowerCase();
  return productos.filter((producto) =>
    producto.tag.some((t) => t.toLowerCase() === tagMinusculas)
  );
}

function crear(producto) {
  const nuevoProducto = { id: productos.length + 1, ...producto };
  productos.push(nuevoProducto);
  guardarCambios();
  return nuevoProducto;
}

function eliminar(id) {
  const index = productos.findIndex((producto) => producto.id === id);
  if (index !== -1) {
    const productoEliminado = productos.splice(index, 1);
    guardarCambios();
    return productoEliminado;
  } else {
    return "Producto no encontrado";
  }
}

module.exports = {
  buscar,
  vender,
  cancelarVenta,
  productosParaLaVenta,
  totalDeVentasProducto,
  totalDeVentas,
  totalGanancias,
  descuentoProducto,
  productosPorMarca,
  productosPorTag,
  productos,
  crear,
  eliminar,
};