// Requires

// Services
const productsService = require("../services/productsService");

const productsController = {
	// Detail - Detail de un producto
	detail: (req, res) => {
		res.render('products/detail');
	},

	// Products List - Listado de todos los Productos
	list: (req, res) => {
		const productos = productsService.productos;
		res.render('products/productsList', { productos });
	},

	// create - Crear un nuevo producto
	create: (req, res) => {
		const { marca, nombre, precio, imagen, codigo, stock, tag, detalle, color, material, talle } = req.body;
		const nuevoProducto = {
			marca,
			nombre,
			precio,
			imagen,
			codigo,
			stock,
			tag,
			descripcion: {
				detalle,
				color,
				material,
				talle
			}
		};
		productsService.crear(nuevoProducto);
		console.log(nuevoUsuario);
		res.redirect('/products');
	}
};

module.exports = productsController;