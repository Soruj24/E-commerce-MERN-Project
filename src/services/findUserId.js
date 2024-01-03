const createError = require("http-errors");
const User = require("../models/userModel");
const mongoose = require("mongoose");

const findUserById = async id => {
  try {
    const options = { password: 0 };
    const user = await User.findById(id, options);
    if (!user) createError(404, "user dose not exist with this id");
    return user;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      throw createError(400, "Invalid user Id");
    }
    throw error;
  }
};

module.exports = { findUserById };
