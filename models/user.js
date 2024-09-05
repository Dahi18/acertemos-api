// agregar bibliotecas
const mongoose = require("mongoose");

// obtenemos la clase para crear schemas
const Schema = mongoose.Schema;

// creamos el schema del usuario con las propiedades
const userSchema = new Schema({
  username: String,
  password: String,
});

// convertimos el schema en un modelo
const User = mongoose.model("user", userSchema);
module.exports = User;
