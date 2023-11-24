const fs = require('fs');
const path = require('path');

const controller = {
	// Detail - Detail from one product
	detail: (req, res) => {
		res.render('detail');
	}
};

module.exports = controller;