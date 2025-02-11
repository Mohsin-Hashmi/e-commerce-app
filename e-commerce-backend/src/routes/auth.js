const express = require("express");
const authRouter = express.Router();
const { validateUser } = require("../utils/validation");
const { validateLoginUser } = require("../utils/validation");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require('jsonwebtoken');
/**Signup API */
authRouter.post("/signup", async (req, res) => {
  try {
    const { name, email, password, confirmPassword, role } = req.body;
    validateUser(req);
    const HASHED_PASSWORD = await bcrypt.hash(password, 10);
    const assignedRole = role && ['admin', 'user'].includes(role) ? role : 'user';
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });
    
    const user = new User({
      name,
      email,
      password: HASHED_PASSWORD,
      role: assignedRole,
    });
    await user.save();
    res.status(201).json({
      message: "User signed up successfully", user
    });
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

/**Login API */
authRouter.post("/login", async (req, res) => {
  try {
    const { email, password, role } = req.body;
    validateLoginUser(req);
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" })
    }
    const token = jwt.sign({ _id: user._id, role: user.role }, "JWT_SECRET", { expiresIn: "7d" });
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ message: "User logged in successfully", name: user.name, email: user.email, role: user.role, });

  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

/**Logout API*/
authRouter.post("/logout", async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
    });
    res.json({ message: "User logged out successfully" });
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }

});

module.exports = authRouter;
