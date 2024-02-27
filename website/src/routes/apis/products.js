// ************ Require's ************
const express = require("express");
const router = express.Router();
module.exports = router;

const cors = require("cors");
// ************ Controller Require ************
const {  list } = require("../../controllers/apis/productsController");

/* /api/products */

router.get("/", cors("*"), list);