const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const cors = require("cors")


const { addToProductsCollection } = require("./models/product.model");
const productsRouter = require("./routes/products.router");
const cartRouter = require("./routes/cart.router");
const wishlistRouter = require("./routes/wishlist.routeer");

const { initializeDBConnection } = require("./db/db.connect.js")

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(cors())

initializeDBConnection();

// run only once to push data to inventory
// addToProductsCollection();

app.get("/", (req, res) => {
  res.send("API for Fashion-Cart");
});

app.use("/products", productsRouter);
app.use("/cart", cartRouter);
app.use("/wishlist", wishlistRouter);

/**
 * 404 Route Handler
 * Note: DO not MOVE. This should be the last route
 */
app.use((req, res) => {
  res.status(404).json({ success: false, message: "route not found on server, please check"})
})

/**
 * Error Handler
 * Don't move
 */
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log('server started on port: ', PORT);
});