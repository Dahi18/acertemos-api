// agregar model
const product = require("../models/product");

// agregar bibliotecas
const express = require("express");

// obtener el creador de rutas de express
const productRoutes = express.Router();

// crear endpoint post para crear producto
productRoutes.post("", async (req, res) => {
  // obtener el body del request
  const body = req.body;

  try {
    // creamos un producto con la informacion del body
    const createdProduct = await product.create({
      name: body.name,
      description: body.description,
      price: body.price,
      category: body.category,
    });

    res.json(createdProduct);
  } catch (error) {
    res.json({ action: "Error: " + error });
  }
});

// crear endpoint get para obtener todos los productos
productRoutes.get("", async (_, res) => {
  try {
    // traemos todos los productos
    const productsList = await product.find();

    res.json(productsList);
  } catch (error) {
    res.json({ action: "Error: " + error });
  }
});

// crear endpoint get para obtener un producto por id
productRoutes.get("/:id", async (req, res) => {
  // obtener los params del request
  const params = req.params;

  try {
    // buscamos el producto segun el id enviado
    const currentproduct = await product.findById(params.id);

    // si el producto existe
    if (currentproduct != null) {
      res.json({ action: currentproduct });
    } else {
      res.json({ action: "product does not exist" });
    }
  } catch (error) {
    res.json({ action: "Error: " + error });
  }
});

// crear endpoint patch para actualizar campos de un producto por id
productRoutes.patch("/:id", async (req, res) => {
  // obtener los params y el body del request
  const body = req.body;
  const params = req.params;

  try {
    // buscamos el producto segun el id enviado y actualizamos con el body
    const updatedproduct = await product.findByIdAndUpdate(params.id, body);

    // si el producto existe
    if (updatedproduct != null) {
      // buscamos el producto segun el id enviado para traerlo actualiado
      const currentproduct = await product.findById(params.id);
      res.json(currentproduct);
    } else {
      res.json({ action: "product does not exist" });
    }
  } catch (error) {
    res.json({ action: "Error: " + error });
  }
});

// crear endpoint delete para eliminar producto por id
productRoutes.delete("/:id", async (req, res) => {
  // obtener los params
  const params = req.params;

  try {
    // buscamos el producto segun el id enviado y eliminamos
    const deletedproduct = await product.findByIdAndDelete(params.id);

    // si el producto existia
    if (deletedproduct != null) {
      res.json({ action: "deleted" });
    } else {
      res.json({ action: "product not exist" });
    }
  } catch (error) {
    res.json({ action: "Error: " + error });
  }
});

module.exports = productRoutes;
