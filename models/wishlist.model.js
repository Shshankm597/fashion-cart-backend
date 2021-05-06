const mongoose = require("mongoose");
const { Schema } = mongoose;

const wishlistItemSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, ref: "Product" }
}, { timestamps: true });

const WishlistItem = mongoose.model("WishlistItem", wishlistItemSchema);

module.exports = { WishlistItem };