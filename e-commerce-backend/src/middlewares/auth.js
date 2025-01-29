const jwt = require("jsonwebtoken");
const User = require("../models/user");
/**User Authentication middleware */
const userAuth = async (req, res, next) => {
    try {
        const cookies = req.cookies;
        const { token } = cookies;
        if (!token) {
            return res.status(400).json({ message: "Please login first" });
        }
        const isValidToken = await jwt.varify(token, "JWT_SECRET");
        if (!isValidToken) {
            return res.status(400).json({ message: "Invalid token" });
        }
        const { _id } = isValidToken;
        const user = await User.findById(_id);
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(400).send("ERROR : " + err.message);
    }
};
module.exports = userAuth;
