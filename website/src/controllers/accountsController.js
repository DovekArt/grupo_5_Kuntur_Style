const fs = require('fs');
const path = require('path');

const controller = {
	// Register - Register form
	register: (req, res) => {
		res.render('register');
	},

	// Login - Login form
	login: (req, res) => {
		res.render('login');
	}
};

module.exports = controller;