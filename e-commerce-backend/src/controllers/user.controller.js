const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { validateUser, validateLoginUser } = require("../utils/validation");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, isAdmin } = req.body;
    validateUser(req);
    const HASHED_PASSWORD = await bcrypt.hash(password, 10);
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(404).json({
        success: false,
        message: "User with this email id is already exist",
      });
    }
    if (password != confirmPassword) {
      return res.status(404).json({
        success: false,
        message: "Password not matched",
      });
    }
    const user = await new User({
      name,
      email,
      password: HASHED_PASSWORD,
      isAdmin: isAdmin || false,
    });
    await user.save();
    return res.status(200).json({
      success: true,
      message: "User registed successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error : " + err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    validateLoginUser(req);
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      return res.status(404).json({
        success: false,
        message: "User not found with this email",
      });
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      isUserExist.password
    );
    if (!isPasswordMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    const token = jwt.sign(
      { isUserExist: isUserExist._id, isAdmin: isUserExist.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.cookie("token", token, { httpOnly: true });
    return res.status(200).json({
      success: true,
      message: "User loginedIn Successfully",
      user: isUserExist,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error : " + err.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
    });
    res.json({ message: "User logged out successfully" });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error : " + err.message,
    });
  }
};

module.exports = {
  signUp,
  login,
  logout,
};
