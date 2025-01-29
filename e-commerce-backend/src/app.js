const express = require("express");
const app = express();
const connectDB = require("./config/db-connection");
const authRouter = require("./routes/auth");
const cookieParser= require("cookie-parser")
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use('/', authRouter);

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
