// agregar configuracion y rutas
const dbConfig = require("./database/db");
const productRoutes = require("./routes/product.routes");
const userRoutes = require("./routes/user.routes");

// agregar middleware
const authMiddleware = require("./middlewares/auth");

// importar bibliotecas
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
app.listen(process.env.PORT, () => {
  console.log("Connected to port: " + process.env.PORT);
});

// rutas
app.use("/products", authMiddleware, productRoutes); // a esta rute le agregamos un middleware
app.use("/auth", userRoutes);

// manejador de errores
app.use((_, res) => {
  res.sendStatus(404);
});
