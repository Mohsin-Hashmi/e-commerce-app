const express = require("express");
const authRouter = express.Router();
const validateUser = require("../utils/validation");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
/**Signup API */
authRouter.post("/signup", async (req, res) => {
  try {
    validateUser(req);
    const { name, email, password } = req.body;
    const HASHED_PASSWORD = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: HASHED_PASSWORD,
    });
    await user.save();
    res.status(201).json({
      message: "User signed up successfully",
    });
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});
module.exports = authRouter;
