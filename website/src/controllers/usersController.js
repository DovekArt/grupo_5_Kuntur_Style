const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require('../database/models');

module.exports = {
  register: (req, res) => {
    return res.render("users/register");
  },
  processRegister: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      let { nombre, apellido, email, password } = req.body;
      const randomNum = Math.floor(Math.random() * 5) + 1;

      db.User.create({
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        email: email.trim(),
        password: bcryptjs.hashSync(password, 10),
        telefono: "",
        image: "avatar-" + randomNum + ".jpg",
        rolId: 2,
      })
        .then(user => {
            db.Address.create({
                userId : user.id,
                typeId : 1
            }).then( () => {
              return res.redirect("/account/login");
            })
        })
        .catch(error => console.log(error))
  
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
  processLogin: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      
      const { email } = req.body

      db.User.findOne({
        where : {
          email
        }
      }).then( async ({id,nombre,image, rolId}) => {

        let order = await db.Order.findOne({
          where : {
            userId : id,
            statusId : 1
          },
          include : [
            {
              association : 'carts',
              attributes : ['id','quantity'],
              include : [
                {
                  association : 'product',
                  include : ['images'],
                  attributes : ['id', 'marca','nombre','precio','descuento']
                }
              ]
            }
          ]
        })
        req.session.userLogin = {
          id: +id,
          nombre,
          image,
          rol: +rolId,
          order
      }
      if(req.body.remember){
        res.cookie('KunturStyle',req.session.userLogin,{maxAge:1000*60*2})
      }
      return res.redirect('/?user=true')
      })
      
    } else {
      return res.render("users/login", {
        old: req.body,
        errors: errors.mapped(),
      });
    }
  },
  profile: (req, res) => {
    const provincias = [
      "Buenos Aires",
      "Capital Federal",
      "Catamarca",
      "Chaco",
      "Chubut",
      "Córdoba",
      "Corrientes",
      "Entre Ríos",
      "Formosa",
      "Jujuy",
      "La Pampa",
      "La Rioja",
      "Mendoza",
      "Misiones",
      "Neuquén",
      "Río Negro",
      "Salta",
      "San Juan",
      "San Luis",
      "Santa Cruz",
      "Santa Fe",
      "Santiago del Estero",
      "Tierra del Fuego",
      "Tucumán"
    ];
    let user = db.User.findByPk(req.session.userLogin.id,{
      include : ['addresses']
    })
    let types = db.Type.findAll()
    Promise.all([user,types])
      .then(([user,types]) => res.render("users/profile", {
        user,
        provincias,
        types
      }))
  },
  update : (req,res) => {
    const { nombre, apellido, password, domicilio, ciudad, codigo_postal, telefono, avatar, type } = req.body;
    db.User.findByPk(req.session.userLogin.id,{
      attributes : ['password']
    })
      .then(user => {
        db.User.update(
          {
            nombre: nombre.trim(),
            apellido: apellido.trim(),
            password: password ? bcryptjs.hashSync(password, 10) : user.password,
            telefono: telefono.trim(),
            image : `avatar-${avatar}.jpg`
          },
          {
            where : {
              id : req.session.userLogin.id
            }
          }
        )
          .then( () => {
            db.Address.update(
              {
                domicilio: domicilio.trim(),
                ciudad: ciudad.trim(),
                codigo_postal: codigo_postal.trim(),
                typeId: +type
              },
              {
                where : {
                  userId : req.session.userLogin.id
                }
              }
            ).then( () => res.redirect('/account/profile'))
          })
      }).catch(error => console.log(error))
  
  },
  logout : (req,res) => {
    req.session.destroy();
    res.cookie('KunturStyle',null,{maxAge : -1})
    res.redirect('/')
  },
  /* APIs */
  checkEmail : async (req,res) => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',req.body)
    try {
      let user = await db.User.findOne({
          where : {
            email : req.body.email
          }
      })
      let response = {
        ok: true,
        data : user ? true : false
      }
      return res.status(200).json(response)
      
    } catch (error) {
      console.log(error)
      return res.status(error.status || 500).json({
        ok : false,
        msg : error.message || 'Comuníquese con el administrador del sitio'
      })
    }
  }
};