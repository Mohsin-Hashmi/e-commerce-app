const express = require("express");
const app = express();
const connectDB = require("./config/db-connection");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 4000;
connectDB()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected" + err.message);
  });
