const express = require("express");
const productRouter = express.Router();
const userAuth = require("../middlewares/auth");
const isAdmin = require("../middlewares/admin");
const Product = require("../models/product");
const { validateProduct } = require("../utils/validation");
const { validateProductFields } = require("../utils/validation");

/**View all products */
productRouter.get("/view/products", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    if (!loggedInUser) {
      return res.status(400).json({ message: "Please login first" });
    }
    const isProductsExist = await Product.find({});
    if (!isProductsExist) {
      res.status(400).json({ message: "No product found" });
    }
    res
      .status(200)
      .json({ message: "All products", products: { isProductsExist } });
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

/**Add Product API */
productRouter.post("/add/product", userAuth, isAdmin, async (req, res) => {
  try {
    validateProduct(req);
    const { name, price, description, category, stock, image } = req.body;
    const newProduct = new Product({
      name,
      price,
      description,
      category,
      stock,
      image,
    });
    const product = await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

/**Delete Product API */
productRouter.delete(
  "/delete/product/:id",
  userAuth,
  isAdmin,
  async (req, res) => {
    try {
      const productId = req.params.id;
      if (!productId) {
        return res.status(400).json({ message: "Product Id is required" });
      }
      const product = await Product.findByIdAndDelete(productId);
      if (!product) {
        return res.status(400).json({ message: "Product Not Found" });
      }
      res
        .status(200)
        .json({ message: "Product deleted successfully", product });
    } catch (err) {
      res.status(400).send("ERROR : " + err.message);
    }
  }
);

/**Update Product API */
productRouter.patch(
  "/update/product/:id",
  userAuth,
  isAdmin,
  async (req, res) => {
    try {
      const productId = req.params.id;
      console.log("Received Product ID:", productId); 
      if (validateProductFields(req)) {
        return res.status(400).json({ message: "Invalid product fields" });
      }
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(400).json({ message: "Product Not Found" });
      }
      Object.keys(req.body).forEach((row) => (product[row] = req.body[row]));
      await product.save();
      res
        .status(200)
        .json({ message: "Product Updated Successfully", product });
    } catch (err) {
      res.status(400).send("ERROR : " + err.message);
    }
  }
);
module.exports = productRouter;
