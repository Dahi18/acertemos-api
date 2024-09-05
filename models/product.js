// agregar bibliotecas
const mongoose = require("mongoose");

// obtenemos la clase para crear schemas
const Schema = mongoose.Schema;

// creamos el schema del producto con las propiedades
const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  createdAt: { type: Date, default: Date.now }, // tipo fecha y por defecto la fecha actual
});

// convertimos el schema en un modelo
const Product = mongoose.model("product", productSchema);
module.exports = Product;
