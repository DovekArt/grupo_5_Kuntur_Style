const fs = require("fs");
const path = require("path");
const productosFilePath = path.join(__dirname, "./products.json");

function obtenerProductosArray() {
  const productosData = fs.readFileSync(productosFilePath, "utf-8");
  return JSON.parse(productosData);
}

const productos = obtenerProductosArray();
const product = productos[0];
const { xs, s, m, l, xl, unico } = product;
const talles = { xs, s, m, l, xl, unico };

console.log(talles);