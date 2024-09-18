// agregar model
const product = require("../models/product");

const createProduct = async (body) => {
  try {
    // creamos un producto con la informacion del body
    const createdProduct = await product.create({
      name: body.name,
      description: body.description,
      price: body.price,
      category: body.category,
    });

    return createdProduct;
  } catch (error) {
    return { action: "Error: " + error };
  }
};

const getAllProducts = async () => {
  try {
    // traemos todos los productos
    const productsList = await product.find();

    return productsList;
  } catch (error) {
    return { action: "Error: " + error };
  }
};

const getProductById = async (id) => {
  try {
    // buscamos el producto segun el id enviado
    const currentproduct = await product.findById(id);

    // si el producto existe
    if (currentproduct != null) {
      return { action: currentproduct };
    } else {
      return { action: "product does not exist" };
    }
  } catch (error) {
    return { action: "Error: " + error };
  }
};

const updateProductById = async (id, body) => {
  try {
    // buscamos el producto segun el id enviado y actualizamos con el body
    const updatedproduct = await product.findByIdAndUpdate(id, body);

    // si el producto existe
    if (updatedproduct != null) {
      // buscamos el producto segun el id enviado para traerlo actualiado
      const currentproduct = await product.findById(id);

      //convertimos la respuesta en un objeto JSON
      let response = currentproduct.toJSON();
      //Eliminamos la propiedad createAt
      delete response.createdAt;

      return response;
    } else {
      return { action: "product does not exist" };
    }
  } catch (error) {
    return { action: "Error: " + error };
  }
};

const deleteProductById = async (id) => {
  try {
    // buscamos el producto segun el id enviado y eliminamos
    const deletedproduct = await product.findByIdAndDelete(id);

    // si el producto existia
    if (deletedproduct != null) {
      return { action: "deleted" };
    } else {
      return { action: "product not exist" };
    }
  } catch (error) {
    return { action: "Error: " + error };
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
