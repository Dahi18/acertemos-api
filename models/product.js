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
  updateAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }, // tipo fecha y por defecto la fecha actual

  //select: false para no retornar este atributo en los get
});

// convertimos el schema en un modelo
const Product = mongoose.model("product", productSchema);
module.exports = Product;
