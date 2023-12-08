// Requires
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

// Services
const usersService = require("../services/usersService");

const usersController = {
  // Register - Register form
  register: (req, res) => {
    res.render("users/register");
  },

  // Process - Register form
  processRegister: (req, res) => {
    const randomNum = Math.floor(Math.random() * 5) + 1;
    const nuevoUsuario = {
      uuid: uuid.v4(),
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      telefono: req.body.telefono,
      domicilio: req.body.domicilio,
      ciudad: req.body.ciudad,
      codigo_postal: req.body.codigo_postal,
      avatar: "avatar-" + randomNum + ".jpg",
      role: "cliente",
    };
    usersService.crear(nuevoUsuario);
    console.log(nuevoUsuario);
    res.redirect("/");
  },

  // Login - Login form
  login: (req, res) => {
    res.render("users/login");
  },

  // Process - Login form
  processLogin: (req, res) => {
    res.redirect("/");
  },

  // Logout - Logout
  logout: (req, res) => {
    res.redirect("/");
  },

  // Detail - Detail de un usuario
  detail: (req, res) => {
    res.render("users/detail");
  },

  // Update - Form para editar usuario
  edit: (req, res) => {
    res.render("users/edit");
  },

  // Update - Procesar formulario de edición
  update: (req, res) => {
    res.redirect("/users/detail");
  },

  // Delete - Deletea un usuario
  delete: (req, res) => {
    res.redirect("/users/list");
  },

  // List - Listado de todos los usuarios
  list: (req, res) => {
    const usuarios = usersService.usuarios;
    res.render("users/usersList", { usuarios });
  }
};

module.exports = usersController;