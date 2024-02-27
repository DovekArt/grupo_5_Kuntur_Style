// ************ Require's ************
const express = require("express");
const router = express.Router();

const cors = require("cors");
// ************ Controller Require ************
const {  list } = require("../../controllers/apis/usersController");

/* /api/users */

router.get("/", cors("*"), list);

module.exports = router;