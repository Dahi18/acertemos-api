const user = require("../models/user");

const express = require("express");
const jwt = require("jsonwebtoken");

const userRoutes = express.Router();

process.env.JWT_SECRET = "secret";

userRoutes.post("/login", async (req, res) => {
  const body = req.body;

  try {
    const currentUser = await user.findOne({
      username: body.username,
      password: body.password,
    });

    if (currentUser != null) {
      const payload = {
        username: currentUser.username,
        password: currentUser.password,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: 1440,
      });

      res.json({ token: token });
    } else {
      res.json({ action: "user does not exists" });
    }
  } catch (error) {
    res.json({ action: "Error: " + error });
  }
});

module.exports = userRoutes;
