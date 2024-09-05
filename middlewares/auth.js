// agregar bibliotecas
const jwt = require("jsonwebtoken");

// creamos funcion anonima para manejar el auth
const verifyToken = (req, res, next) => {
  // obtenemos el token bearer
  const token = req.headers["authorization"];

  // si el token existe
  if (token != null) {
    try {
      // obtenemos la parte de la key
      const bearer = token.split(" ")[1];
      // verificamos que el token este bueno
      const verified = jwt.verify(bearer, process.env.JWT_SECRET);
      req.user = verified;

      // continuamos con el request a la API
      next();
    } catch (error) {
      res.status(400).send({ action: "Error: " + error });
    }
  } else {
    return res.status(401).send({ action: "action denied." });
  }
};

module.exports = verifyToken;
