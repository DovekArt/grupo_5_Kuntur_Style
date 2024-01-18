const productsService = require('../services/productsService');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    res.render('index');
  }
  // index: (req, res) => {
  //   const productsVisited = productsService.productos.filter(product => product.descuento < 20)
  //     .sort((a, b) => b.id - a.id)
  //     .slice(0, 4)
  //     .map(product => ({
  //       ...product,
  //       images: product.images
  //     }));
  //   const productsInSale = productsService.productos.filter(product => product.descuento >= 20)
  //     .map(product => ({
  //       ...product,
  //       images: product.images
  //     }));
  //   const products = productsService.productos.map(product => ({
  //     ...product,
  //     category: product.category,
  //     images: product.images
  //   }));
  //   res.render('index', {
  //     productsVisited,
  //     productsInSale,
  //     products,
  //     toThousand
  //   });
  // },
  // search: (req, res) => {
  //   const { keywords } = req.query;
  //   const result = productsService.productos.filter(product => (
  //     product.title.toLowerCase().includes(keywords.toLowerCase()) ||
  //     product.description.toLowerCase().includes(keywords.toLowerCase())
  //   )).map(product => ({
  //     ...product,
  //     images: product.images
  //   }));
  //   res.render('results', {
  //     result,
  //     keywords,
  //     toThousand
  //   });
  // },
  // prueba: (req, res) => {
	//   res.render('KunturStyle');
  // }
};

module.exports = controller;