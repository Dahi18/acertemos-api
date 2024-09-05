const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
