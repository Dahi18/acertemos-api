// agregar model
const userServices = require("../services/user.service");

// agregar bibliotecas
const express = require("express");

// obtener el creador de rutas de express
const userRoutes = express.Router();

// crear endpoint post para iniciar sesion
userRoutes.post("/login", async (req, res) => {
  // obtener el body del request
  const body = req.body;
  const respons = await userServices.userLogin(body);

  res.json(respons);
});

module.exports = userRoutes;
