const fs = require("fs");
const path = require("path");
const productosFilePath = path.join(__dirname, "../data/products.json");
<<<<<<< HEAD
const categoryFilePath = path.join(__dirname, "../data/category.json");
const addressFilePath = path.join(__dirname, "../data/address.json");
const imagesFilePath = path.join(__dirname, "../data/images.json");
=======
>>>>>>> b330e3c84a429cc6f9ce89629c81bda91d3b8ab2

function obtenerProductosArray() {
  const productosData = fs.readFileSync(productosFilePath, "utf-8");
  return JSON.parse(productosData);
}

<<<<<<< HEAD
function obtenerCategory() {
  const categoryData = fs.readFileSync(categoryFilePath, "utf-8");
  return JSON.parse(categoryData);
}

function obtenerAddress() {
  const addressData = fs.readFileSync(addressFilePath, "utf-8");
  return JSON.parse(addressData);
}

function obtenerImages() {
  const imagesData = fs.readFileSync(imagesFilePath, "utf-8");
  return JSON.parse(imagesData);
}

const productos = obtenerProductosArray();
const categorias = obtenerCategory();
const direcciones = obtenerAddress();
const imagenes = obtenerImages();

function buscar(id) {
  const productoEncontrado = productos.find(producto => producto.id === +id);
=======
const productos = obtenerProductosArray();

function buscar(id) {
  const productoEncontrado = productos.find(
    (producto) => producto.id === id
  );
>>>>>>> b330e3c84a429cc6f9ce89629c81bda91d3b8ab2
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

<<<<<<< HEAD
function guardarAddress() {
  fs.writeFile(
    addressFilePath,
    JSON.stringify(direcciones, null, 2),
    (err) => {
      if (err) {
        console.error(
          'Error al guardar los cambios en el archivo "address.json":',
          err
        );
      } else {
        console.log(
          'Se han guardado los cambios en el archivo "address.json"'
        );
      }
    }
  );
}

function guardarImages() {
  fs.writeFile(
    imagesFilePath,
    JSON.stringify(imagenes, null, 2),
    (err) => {
      if (err) {
        console.error(
          'Error al guardar los cambios en el archivo "images.json":',
          err
        );
      } else {
        console.log(
          'Se han guardado los cambios en el archivo "images.json"'
        );
      }
    }
  );
}

=======
>>>>>>> b330e3c84a429cc6f9ce89629c81bda91d3b8ab2
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

<<<<<<< HEAD
function crearAddress(address) {
  const nuevaAddress = { id: productos.length + 1, domicilio: "", ciudad: "", codigo_postal: "", ...address };
  direcciones.push(nuevaAddress);
  guardarAddress();
  return nuevaAddress;
}

function actualizar(productoActualizado) {
  const index = productos.findIndex(producto => producto.id == productoActualizado.id);
  if (index !== -1) {
    productos[index] = productoActualizado;
    guardarCambios();
    return productoActualizado;
  } else {
    return null;
  }
}

function eliminar(id) {
  const producto = buscar(id);
  if (producto) {
    producto.activo = false;
    guardarCambios();
    return producto;
  } else {
    return null;
  }
}

function obtenerProductosEliminados() {
  return productos.filter(producto => producto.activo === false);
}

function restaurar(id) {
  const producto = buscar(id);
  if (producto) {
    producto.activo = true;
    guardarCambios();
    return producto;
  } else {
    return null;
  }
}

function eliminarDefinitivamente(id) {
  const index = productos.findIndex(producto => producto.id === id);
  if (index !== -1) {
    const productoEliminado = productos.splice(index, 1)[0];
    
    // Eliminar imágenes asociadas al producto
    const images = imagenes.filter(image => image.productId === id);
    images.forEach(image => {
      const imagePath = path.resolve(__dirname, '..', '..', 'public', 'img', 'productos', image.file);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    });
    
    // Eliminar imágenes del array `imagenes`
    imagenes = imagenes.filter(image => image.productId !== id);
    
    guardarCambios();
    guardarImages();
    return productoEliminado;
  } else {
    return null;
  }
}

function agregarImagenes(images) {
  for (let i = 0; i < images.length; i++) {
    imagenes.push(images[i]);
  }
  guardarImages();
  return imagenes;
}

function obtenerImagenes(productId) {
  return imagenes.filter(
    (imagen) => imagen.productId === productId
  );
}

function actualizarImagen(imagenesNuevas) {
  const imagenesFiltradas = imagenes.filter(imagen => {
    return !imagenesNuevas.some(nuevaImagen => nuevaImagen.productId === imagen.productId);
  });
  imagenesFiltradas.forEach(imagen => {
    const imagePath = path.resolve(__dirname, '..', '..', 'public', 'img', 'productos', imagen.file);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
  });
  imagenes = imagenesFiltradas.concat(imagenesNuevas);
  guardarImages();
}

=======
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

>>>>>>> b330e3c84a429cc6f9ce89629c81bda91d3b8ab2
module.exports = {
  buscar,
  vender,
  cancelarVenta,
<<<<<<< HEAD
  obtenerCategory,
  obtenerAddress,
  obtenerImages,
  crearAddress,
  agregarImagenes,
  obtenerImagenes,
  actualizarImagen,
=======
>>>>>>> b330e3c84a429cc6f9ce89629c81bda91d3b8ab2
  productosParaLaVenta,
  totalDeVentasProducto,
  totalDeVentas,
  totalGanancias,
  descuentoProducto,
  productosPorMarca,
  productosPorTag,
  productos,
  crear,
<<<<<<< HEAD
  actualizar,
  eliminar,
  eliminarDefinitivamente,
  obtenerProductosEliminados,
  restaurar
=======
  eliminar,
>>>>>>> b330e3c84a429cc6f9ce89629c81bda91d3b8ab2
};