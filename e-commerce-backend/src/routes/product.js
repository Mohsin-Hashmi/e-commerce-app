
const express = require('express');
const productRouter = express.Router();
const userAuth = require("../middlewares/auth");
const isAdmin = require("../middlewares/admin");
const Product = require('../models/product');
const { validateProduct } = require("../utils/validation");

/**View all products */
productRouter.get('/view/products', userAuth, async (req, res) => {
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

/**Add Product API */
productRouter.post('/add/product', userAuth, isAdmin, async (req, res) => {
    try {
        validateProduct(req);
        const { name, price, description, category, stock, image } = req.body;
        const newProduct = new Product({
            name,
            price,
            description,
            category,
            stock,
            image
        })
        const product = await newProduct.save();
        res.status(201).json({ message: "Product added successfully", product })

    } catch (err) {
        res.status(400).send("ERROR : " + err.message);
    }
})
module.exports = productRouter;