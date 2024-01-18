const fs = require("fs");
const path = require("path");
const usuariosFilePath = path.join(__dirname, "../data/users.json");

function obtenerUsuariosArray() {
  const usuariosData = fs.readFileSync(usuariosFilePath, "utf-8");
  return JSON.parse(usuariosData);
}

const usuarios = obtenerUsuariosArray();

function buscar(uuid) {
  const usuarioEncontrado = usuarios.find(
    (usuario) => usuario.uuid === uuid
  );
  return usuarioEncontrado || null;
}

function guardarCambios() {
  fs.writeFile(
    usuariosFilePath,
    JSON.stringify(usuarios, null, 2),
    (err) => {
      if (err) {
        console.error(
          'Error al guardar los cambios en el archivo "users.json":',
          err
        );
      } else {
        console.log('Se han guardado los cambios en el archivo "users.json"');
      }
    }
  );
}

function buscarPorEmail(email) {
  const emailMinusculas = email.toLowerCase();
  return usuarios.filter(
    (usuario) => usuario.email.toLowerCase() === emailMinusculas
  );
}

function getActiveOrder(uuid) {
  const usuario = buscar(uuid);
  if (usuario) {
    const activeOrder = usuario.orders.find((order) => order.status === 'active');
    return activeOrder || null;
  } else {
    return null;
  }
}

function crear(usuario) {
  usuarios.push(usuario);
  guardarCambios();
  return usuario;
}

function eliminar(uuid) {
  const index = usuarios.findIndex((usuario) => usuario.uuid === uuid);
  if (index !== -1) {
    const usuarioEliminado = usuarios.splice(index, 1);
    guardarCambios();
    return usuarioEliminado;
  } else {
    return "Usuario no encontrado";
  }
}

module.exports = {
  buscar,
  buscarPorEmail,
  usuarios,
  crear,
  eliminar,
};