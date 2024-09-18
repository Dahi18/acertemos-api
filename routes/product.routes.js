const productServices = require("../services/product.service");

// agregar bibliotecas
const express = require("express");

// obtener el creador de rutas de express
const productRoutes = express.Router();

// crear endpoint post para crear producto
productRoutes.post("", async (req, res) => {
  // obtener el body del request
  const body = req.body;
  const response = await productServices.createProduct(body);

  res.json(response);
});

// crear endpoint get para obtener todos los productos
productRoutes.get("", async (_, res) => {
  const response = await productServices.getAllProducts();

  res.json(response);
});

// crear endpoint get para obtener un producto por id
productRoutes.get("/:id", async (req, res) => {
  // obtener los params del request
  const params = req.params;
  const response = await productServices.getProductById(params.id);

  res.json(response);
});

// crear endpoint patch para actualizar campos de un producto por id
productRoutes.patch("/:id", async (req, res) => {
  // obtener los params y el body del request
  const body = req.body;
  const params = req.params.id;
  const response = await productServices.updateProductById(params.id, body);

  res.json(response);
});

// crear endpoint delete para eliminar producto por id
productRoutes.delete("/:id", async (req, res) => {
  // obtener los params
  const params = req.params;
  const response = await productServices.deleteProductById(params.id);

  res.json(response);
});

module.exports = productRoutes;
