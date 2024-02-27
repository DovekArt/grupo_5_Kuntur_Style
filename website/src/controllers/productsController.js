const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {Op} = require('sequelize')

const controller = {
	// Root - Show all products
	index: (req, res) => {

		db.Product.findAll({
			include : ['images']
		})
			.then(products => {
				return res.render('products/products',{
					products,
					toThousand
				})
			})
			.catch(error => console.log(error))
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		
		db.Product.findByPk(req.params.id,{
			include : ['images']
		})
			.then(product => {
				if (!product) {
					return res.status(404).send('Producto no encontrado');
				}
				return res.render('products/detail',{
					product,
					toThousand
				})
			})
			.catch(error => console.log(error));
	},

	// Create - Form to create
	create: (req, res) => {
		db.Category.findAll()
			.then(categories => {
				return res.render('products/create',{
					categories
				})
			})
			.catch(error => console.log(error))		
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const { nombre, marca, precio, descuento, descripcion, categoryId, codigo, color, material, xs, s, m, l, xl, unico } = req.body;

		db.Product.create({
			marca: marca.trim(),
      nombre: nombre.trim(),
      precio: +precio,
      descuento: +descuento,
      codigo: codigo.trim(),
      categoryId: +categoryId || 10,
      descripcion: descripcion.trim(),
      color: color.trim(),
      material: material.trim(),
      xs: +xs,
      s: +s,
      m: +m,
      l: +l,
      xl: +xl,
      unico: +unico,
      activo: true
		})
			.then(product => {
				if(req.files.length > 0){
					let images = req.files.map(({filename},i) => {
						let image = {
							file: filename,
							productId: product.id,
							order: +i
						}
						return image
					})
					db.Image.bulkCreate(images,{validate: true})
						.then( (result) => console.log(result))		
				}
				return res.redirect('/products')
			})
			.catch(error => console.log(error))	
	},

	// Update - Form to edit
	edit: (req, res) => {

		let product = db.Product.findByPk(req.params.id,{
			include : ['images']
		})
		let categories = db.Category.findAll()

		Promise.all([product,categories])
			.then(([product,categories]) => {
				if (!product) {
					return res.status(404).send('Producto no encontrado');
				}
				return res.render('products/edit',{
					product,
					categories
				})
			})
			.catch(error => console.log(error))		
	
	},
	// Update - Method to update
	update: (req, res) => {

		const { nombre, marca, precio, descuento, descripcion, categoryId, codigo, color, material, xs, s, m, l, xl, unico } = req.body;
		
		db.Product.update(
			{
				marca: marca.trim(),
        nombre: nombre.trim(),
        precio: +precio,
        descuento: +descuento,
        codigo: codigo.trim(),
        categoryId,
        descripcion: descripcion.trim(),
        color: color.trim(),
        material: material.trim(),
        xs: +xs,
        s: +s,
        m: +m,
        l: +l,
        xl: +xl,
        unico: +unico,
        activo: true
			},
			{
				where : {
					id : req.params.id
				}
			}
		).then(async () => {
			if (req.files.length > 0) {
        const images = req.files.map(({ filename }, i) => ({
          file: filename,
          productId: createdProduct.id,
          order: +i
        }));
      
        for (const image of images) {
          try {
            await db.Image.update(
              { file: image.file },
              { where: { productId: image.productId, order: image.order } }
            );
          } catch (error) {
            console.log(error);
          }
        }
      }
			return res.redirect('/products');

		}).catch(error => console.log(error))
	},

	// Delete - Delete one product from DB
	delete : (req, res) => {

		db.Product.destroy({
			where : {
				id : req.params.id
			}
		})
			.then((info) => {
				return res.redirect('/products');
			})
			.catch(error => console.log(error))
	},
	recycle : (req,res) => {
		db.Product.findAll({
			where : {
				deletedAt : {
					[Op.not] : null
				}
			},
			paranoid : false,
			include : ['images']
		})
			.then(products => res.render('products/recycle', {
				products,
				toThousand
			}))
			.catch(error => console.log(error))
	},
	restore : (req,res) => {
		db.Product.restore({
			where : {
				id : req.params.id
			}
		})
		.then((info) => {
			console.log('>>>>>>>>>>>>>>>>>>>>>>>>',info);
			return res.redirect('/products');
		})
		.catch(error => console.log(error))
	},
	destroy : (req, res) => {

		db.Image.findAll({
			where : {
				productId : req.params.id
			}
		})
			.then(images => {
				images.forEach(image => {
					if(fs.existsSync(path.resolve(__dirname,'../../public/img/productos/' + image.file))){
						console.log(image.file)
						fs.unlinkSync(path.resolve(__dirname,'../../public/img/productos/' + image.file))
					}
				});
				db.Product.destroy({
					where : {
						id : req.params.id
					},
					force : true
				})
					.then((info) => {
						console.log('>>>>>>>>>>>>>>>>>>>>>>>>',info);
						return res.redirect('/products');
					})
			})
			.catch(error => console.log(error))
	},
};

module.exports = controller;