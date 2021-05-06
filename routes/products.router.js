const express = require("express");
const router = express.Router();

const { Product } = require("../models/product.model");
const { catchError } = require("../utils.js")


router.route("/")
.get(async (req, res) => {
  catchError(res, async () => {
    const products = await Product.find();
    res.json(products);
  })
  
})

router.get("/:id", (req, res) => {
  catchError(res, async () => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
  });
});

module.exports = router