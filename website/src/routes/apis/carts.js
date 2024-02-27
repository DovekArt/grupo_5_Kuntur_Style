// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const {
  list,
  addItem,
  removeItem,
  removeAll,
  removeItemFull,
} = require("../../controllers/apis/cartController");

/* /api/carts */

router
  .get("/list-items", list)
  .post("/add-item", addItem)
  .delete("/remove-item", removeItem)
  .delete("/remove-all", removeAll)
  .delete("/remove-item-full", removeItemFull);

module.exports = router;