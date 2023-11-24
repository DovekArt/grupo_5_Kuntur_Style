const fs = require('fs');
const path = require('path');

const controller = {
	index: (req, res) => {
		res.render('index');
	},
	prueba: (req, res) => {
		res.render('KunturStyle');
	}
};

module.exports = controller;
