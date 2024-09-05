// agregar model
const user = require("../models/user");

// agregar bibliotecas
const express = require("express");
const jwt = require("jsonwebtoken");

// obtener el creador de rutas de express
const userRoutes = express.Router();

// crear endpoint post para iniciar sesion
userRoutes.post("/login", async (req, res) => {
  // obtener el body del request
  const body = req.body;

  try {
    // buscamos un usuario con las credenciales del body
    const currentUser = await user.findOne({
      username: body.username,
      password: body.password,
    });

    // si el usuario existe
    if (currentUser != null) {
      // creamos los valores para guardar en el token
      const payload = {
        username: currentUser.username,
        password: currentUser.password,
      };

      // creamos el token
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: 1440,
      });

      res.json({ token: token });
    } else {
      res.json({ action: "user does not exists" });
    }
  } catch (error) {
    res.json({ action: "Error: " + error });
  }
});

module.exports = userRoutes;
