const product = require("../models/product");

let express = require("express");

const productRoutes = express.Router();

// endpoints
productRoutes.post("", async (req, res) => {
  const body = req.body;

  try {
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

productRoutes.get("", async (_, res) => {
  try {
    const productsList = await product.find();

    res.json(productsList);
  } catch (error) {
    res.json({ action: "Error: " + error });
  }
});

productRoutes.get("/:id", async (req, res) => {
  const params = req.params;

  try {
    const currentproduct = await product.findById(params.id);

    if (currentproduct != null) {
      res.json({ action: currentproduct });
    } else {
      res.json({ action: "product does not exist" });
    }
  } catch (error) {
    res.json({ action: "Error: " + error });
  }
});

productRoutes.patch("/:id", async (req, res) => {
  const body = req.body;
  const params = req.params;

  try {
    const updatedproduct = await product.findByIdAndUpdate(params.id, body);

    if (updatedproduct != null) {
      const currentproduct = await product.findById(params.id);
      res.json(currentproduct);
    } else {
      res.json({ action: "product does not exist" });
    }
  } catch (error) {
    res.json({ action: "Error: " + error });
  }
});

productRoutes.delete("/:id", async (req, res) => {
  const params = req.params;

  try {
    const deletedproduct = await product.findByIdAndDelete(params.id);

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
