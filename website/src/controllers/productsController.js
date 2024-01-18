const productsService = require('../services/productsService');
const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    const products = productsService.productos.map(product => {
      const images = productsService.obtenerImages().filter(image => image.productId == product.id);
      return {
        ...product,
        images: images
      };
    });
  
    res.render('products/products', {
      products,
      toThousand
    });
  },
  detail: (req, res) => {
    const product = productsService.buscar(req.params.id);
    const images = productsService.obtenerImagenes(req.params.id);
    console.log(product);
    console.log(images);
    if (product) {
      res.render('products/detail', {
        product,
        images,
        toThousand
      });
    } else {
      res.send('Producto no encontrado');
    }
  },
  create: (req, res) => {
    const categories = productsService.obtenerCategory();
    res.render('products/create', {
      categories
    });
  },
  store: (req, res) => {
    const { nombre, marca, precio, descuento, descripcion, categoryId, codigo, color, material, xs, s, m, l, xl, unico } = req.body;
    const newProduct = {
      marca: marca.trim(),
      nombre: nombre.trim(),
      precio: +precio,
      descuento: +descuento,
      codigo: codigo.trim(),
      categoryId,
      descripcion: {
        detalle: descripcion.trim(),
        color: color.trim(),
        material: material.trim()
      },
      talles: {
        XS: +xs,
        S: +s,
        M: +m,
        L: +l,
        XL: +xl,
        "Único": +unico
      },
      activo: true
    };
    const createdProduct = productsService.crear(newProduct);
    if (req.files.length > 0) {
      const images = req.files.map(({ filename }, i) => ({
        file: filename,
        productId: createdProduct.id,
        primary: i === 0 ? 1 : 0
      }));
      productsService.agregarImagenes(images);
    }
    res.redirect('/products');
  },
  edit: (req, res) => {
    const product = productsService.buscar(req.params.id);
    const images = productsService.obtenerImagenes(req.params.id);
    const categories = productsService.obtenerCategory();
    if (product) {
      res.render('products/edit', {
        product,
        images,
        categories
      });
    } else {
      res.send('Producto no encontrado');
    }
  },
  update: (req, res) => {
    const { nombre, marca, precio, descuento, descripcion, categoryId, codigo, color, material, xs, s, m, l, xl, unico } = req.body;
    const updatedProduct = {
      id: +req.params.id,
      marca: marca.trim(),
      nombre: nombre.trim(),
      precio: +precio,
      descuento: +descuento,
      codigo: codigo.trim(),
      categoryId,
      descripcion: {
        detalle: descripcion.trim(),
        color: color.trim(),
        material: material.trim()
      },
      talles: {
        XS: +xs,
        S: +s,
        M: +m,
        L: +l,
        XL: +xl,
        "Único": +unico
      },
      activo: true
    };
    productsService.actualizar(updatedProduct);
    if (req.files.length > 0) {
      const images = req.files.map(({ filename }, i) => ({
        file: filename,
        productId: createdProduct.id,
        primary: i === 0 ? 1 : 0
      }));
      productsService.actualizarImagen(images);
    }
    res.redirect('/products');
  },
  delete: (req, res) => {
    productsService.eliminar(req.params.id);
    res.redirect('/products');
  },
  recycle: (req, res) => {
    const products = productsService.obtenerProductosEliminados();
    const imagenes = productsService.obtenerImages();
    res.render('products/recycle', {
      products,
      imagenes,
      toThousand
    });
  },
  restore: (req, res) => {
    productsService.restaurar(req.params.id);
    res.redirect('/products');
  },
  destroy: (req, res) => {
    productsService.eliminarDefinitivamente(req.params.id);
    res.redirect('/products');
  },
};

module.exports = controller;