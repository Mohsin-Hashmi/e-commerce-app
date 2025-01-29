
const express = require('express');
const productRouter = express.Router();
const userAuth = require("../middlewares/auth");
const Product = require('../models/product');

/**View all products */
productRouter.get('view/products', userAuth, async (req, res) => {
    try {
        const loggedInUser = req.user;
        if (!loggedInUser) {
            return res.status(400).json({ message: "Please login first" });
        }
        const isProductsExist = await Product.find({});
        if (!isProductsExist) {
            res.status(400).json({ message: "No product found" });
        }
        res.status(200).json({ message: "All products", products: { isProductsExist } })
    } catch (err) {
        res.status(400).send("ERROR : " + err.message);
    }
});
module.exports = productRouter;