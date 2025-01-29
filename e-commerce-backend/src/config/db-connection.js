const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://mnadeemhashmi2000:s4J2l9OA7FVoDTKa@usercluster.sibc9.mongodb.net/e-commerceDB");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
