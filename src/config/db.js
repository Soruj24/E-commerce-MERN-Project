const mongoose = require("mongoose");
const { mongodbURL } = require("../secret");
const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(mongodbURL, options);
    console.log("db is connected");
    mongoose.connection.on("error", error => {
      console.error("db is not connected", error);
    });
  } catch (error) {
    console.error("db is not connected");
  }
};
module.exports = connectDB;
