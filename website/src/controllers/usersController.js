const uuid = require("uuid");

// const usersController = {
//   processRegister: (req, res) => {
//     const randomNum = Math.floor(Math.random() * 5) + 1;
//     const nuevoUsuario = {
//       uuid: uuid.v4(),
//       nombre: req.body.nombre,
//       apellido: req.body.apellido,
//       email: req.body.email,
//       password: bcrypt.hashSync(req.body.password, 10),
//       telefono: req.body.telefono,
//       domicilio: req.body.domicilio,
//       ciudad: req.body.ciudad,
//       codigo_postal: req.body.codigo_postal,
//       avatar: "avatar-" + randomNum + ".jpg",
//       role: "cliente",
//     };
//     usersService.crear(nuevoUsuario);
//     console.log(nuevoUsuario);
//     res.redirect("/");
//   }
// };

const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const usersService = require("../services/usersService");

module.exports = {
  register: (req, res) => {
    return res.render("users/register");
  },
  processRegister: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      let { nombre, apellido, email, password } = req.body;
      const randomNum = Math.floor(Math.random() * 5) + 1;
      const nuevoUsuario = {
        uuid: uuid.v4(),
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        email: email.trim(),
        password: bcrypt.hashSync(password, 10),
        telefono: "",
        avatar: "avatar-" + randomNum + ".jpg",
        role: 2,
      };
      usersService.crear(
        nuevoUsuario
        )
        .then(() => {
          usersService.crearAddress({
              userUUID : nuevoUsuario.uuid,
              typeId : 1
          }).then( () => {
            return res.redirect("/users/login");
          })
        })
        .catch(error => console.log(error));

    } else {
      return res.render("users/register", {
        old: req.body,
        errors: errors.mapped(),
      });
    }
  },
  login: (req, res) => {
    return res.render("users/login");
  },
  // processLogin: async (req, res) => {
  //   const errors = validationResult(req);
  //   if (errors.isEmpty()) {
  //     const { email } = req.body;
  //     try {
  //       const user = await usersService.buscarPorEmail(email);
  //       let order = await usersService.getActiveOrder(user.uuid);
  //       req.session.userLogin = {
  //         uuid: user.uuid,
  //         name: user.nombre,
  //         image: user.avatar,
  //         rol: user.role,
  //         order,
  //       };
  //       if (req.body.remember) {
  //         res.cookie('KunturStyle', req.session.userLogin, { maxAge: 1000 * 60 * 2 });
  //       }
  //       return res.redirect('/?user=true');
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     return res.render("userLogin", {
  //       old: req.body,
  //       errors: errors.mapped(),
  //     });
  //   }
  // },
  // profile: async (req, res) => {
  //   try {
  //     const user = await usersService.buscar(req.session.userLogin.uuid);
  //     const types = await usersService.getAddressTypes();
  //     res.render("userProfile", {
  //       user,
  //       types,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  // update: async (req, res) => {
  //   const { nombre, apellido, password, domicilio, ciudad, codigo_postal, telefono } = req.body;
  //   try {
  //     const user = await usersService.buscar(req.session.userLogin.uuid);
  //     await usersService.actualizar(user.uuid, nombre.trim(), apellido.trim(), password, telefono, req.avatarId);
  //     await usersService.actualizarAddress(user.uuid, domicilio.trim(), ciudad, codigo_postal);
  //     res.redirect('/account/profile');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  // logout: (req, res) => {
  //   req.session.destroy();
  //   res.cookie('KunturStyle', null, { maxAge: -1 });
  //   res.redirect('/');
  // },
  // checkEmail: async (req, res) => {
  //   try {
  //     const email = req.body.email;
  //     const user = await usersService.buscarPorEmail(email);
  //     let response = {
  //       ok: true,
  //       data: user ? true : false,
  //     };
  //     return res.status(200).json(response);
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(error.status || 500).json({
  //       ok: false,
  //       msg: error.message || 'Comuníquese con el administrador del sitio',
  //     });
  //   }
  // }
};