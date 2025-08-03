const express = require("express");

const profileRoute = express.Router();

const createProfile = require("../controllers/profile.controller");
const upload = require("../middlewares/profile");
const userAuth = require("../middlewares/auth");

profileRoute.post("/profile", userAuth,  upload.single("image"), createProfile);
module.exports = profileRoute;
