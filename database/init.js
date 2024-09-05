// agregar configuracion
const dbConfig = require("./db");

// importar bibliotecas
const mongoose = require("mongoose");
const fs = require("fs");

// agregar modelos de Mongoose
const productModel = require("../models/product");
const userModel = require("../models/user");

const importData = async () => {
  try {
    // Conectar a la base de datos
    mongoose.Promise = global.Promise;
    await mongoose.connect(dbConfig.db);

    // Borrar todos los documentos
    console.log("Removing data...");
    await productModel.deleteMany();
    await userModel.deleteMany();

    // Leer y parsear los archivos JSON
    const jsonDataProduct = JSON.parse(
      fs.readFileSync(
        "./database/resources/acertemos-db.products.json",
        "utf-8"
      )
    );
    const jsonDataUser = JSON.parse(
      fs.readFileSync("./database/resources/acertemos-db.users.json", "utf-8")
    );

    // Insertar los datos en la base de datos
    console.log("Importing data...");
    await productModel.insertMany(jsonDataProduct);
    await userModel.insertMany(jsonDataUser);

    console.log("Data imported successfully.");
    console.log("Database connected successfully.");
  } catch (error) {
    console.log("Error: " + error);
  }
};

importData();
