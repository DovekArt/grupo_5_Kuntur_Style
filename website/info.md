# Pasos para abrir el proyecto:
### 1- Instalar las dependencias con ["npm i"]().
### 2- Instalar Sequelize-cli si es que no lo tienen, de forma global o en el proyecto. ["npm i -g sequelize-cli"]()
### 3- Configurar el proyecto creando los archivos .env y .sequelizerc en el directorio ["./website"](./website).
### 4- En .env deben agregar algo como esto:

    DB_USERNAME=root
    DB_PASSWORD=
    DB_DATABASE=kunturstyle_db
    DB_PORT=3306
    DB_HOST=localhost

    NODE_ENV=
    PORT=3000
    SECRET="KunturStyle!"

### 5- En .sequelizerc:

    const path = require("path");

    module.exports = {
      config: path.resolve("./src/database/config", "config.js"),
      "models-path": path.resolve("./src/database/models"),
      "seeders-path": path.resolve("./src/database/seeders"),
      "migrations-path": path.resolve("./src/database/migrations"),
    };

### 6- Para subir la base de datos usen los siguientes comandos en la consola. [Deben tener prendida la aplicacion]():

1ro: sequelize db:create

2do: sequelize db:migrate

3ro: sequelize db:seed:all