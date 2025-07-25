const express = require("express");

const profileRoute = express.Router();

const createProfile = require("../controllers/profile.controller");
const upload = require("../middlewares/profile");

profileRoute.post("/profile", upload.single("image"), createProfile);
module.exports = profileRoute;
