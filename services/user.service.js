const user = require("../models/user");
const jwt = require("jsonwebtoken");

const userLogin = async (body) => {
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

      return { token: token };
    } else {
      return { action: "user does not exists" };
    }
  } catch (error) {
    return { action: "Error: " + error };
  }
};

module.exports = { userLogin };
