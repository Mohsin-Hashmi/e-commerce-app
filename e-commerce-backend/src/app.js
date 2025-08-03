const express = require("express");
const app = express();
const connectDB = require("./config/db-connection");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const contactRouter = require("./routes/contact-us");
const profileRouter = require('./routes/profile')
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use("/", authRouter);
app.use("/", productRouter);
app.use("/", contactRouter);
app.use("/", profileRouter);

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
