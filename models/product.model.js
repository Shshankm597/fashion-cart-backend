const mongoose = require("mongoose");
const { Schema } = mongoose;


const productsData = require("../data");

const productSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  image: String,
  price: Number,
  inStock: Boolean,
  level: String,
  fastDelivery: Boolean,
  ratings: Number
});

const Product = mongoose.model("Product", productSchema);

async function addToProductsCollection() {
  try {
    productsData.forEach(async (product) => {
      const newProduct = new Product(product);
      const savedProduct = await newProduct.save();
      console.log(savedProduct);
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = { Product, addToProductsCollection };