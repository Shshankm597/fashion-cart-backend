const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartItemSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, ref: "Product" },
  qty: {
      type: Number,
      required: "Can't add to cart without quantity!"
    }
 }, { timestamps: true }
);

const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = { CartItem };