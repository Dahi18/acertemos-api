const dbConfig = require("./database/db"); // importa config BD
const productRoutes = require("./routes/product.routes");

let express = require("express"); // importar modulo
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

// conexion BD
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db)
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((error) => {
    console.log("Error: " + error);
  });

const app = express(); // instanciar express
app.use(bodyParser.json()); // indicar que trabajaremos con JSON
app.use(bodyParser.urlencoded({ extended: true }));

// abrir el servidor
const port = 3000;
app.listen(3000, () => {
  console.log("Connected to port: " + port);
});

// rutas
app.use("/products", productRoutes);

// manejador de errores
app.use((_, res) => {
  res.sendStatus(404);
});
