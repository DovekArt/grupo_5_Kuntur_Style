const db = require('../database/models');
const {Op} = require('sequelize')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		let productsFeatured = db.Product.findAll({
			where : {
				descuento : {
					[Op.lt] : 20
				}
			},
			order : [['id','DESC']],
			limit : 4,
			include : ['images']
		})
		let productsInSale = db.Product.findAll({
			where : {
				descuento : {
					[Op.gte] : 20
				}
			},
			include : ['images']
		})
		let products = db.Product.findAll({
			include : ['category','images']
		})
		Promise.all([productsFeatured,productsInSale, products])
			.then(([productsFeatured,productsInSale, products]) => {
				return res.render('indexx',{
					productsFeatured,
					productsInSale,
					products,
					toThousand
				})
			})
			.catch(error => console.log(error))
	},
	search: (req, res) => {
		const keywords = req.query.q;
		db.Product.findAll({
			where : {
				[Op.or] : [
					{
						nombre : {
							[Op.substring] : keywords
						}
					},
					{
						descripcion : {
							[Op.substring] : keywords
						}
					}
				]
			},
			include : ['images']
		}).then(result => {
			return res.render('results',{
				result,
				keywords,
				toThousand
			})
		}).catch(error => console.log(error))
	},
};

module.exports = controller;