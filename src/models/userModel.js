const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const { defaultImage } = require("../secret");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Miss"],
      trim: true,
      minlength: [3, "the length of user name can be minimum 3 characters"],
      maxlength: [31, "the length of user name can be maximum 31 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is Miss"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please Enter a valid Email !",
      },
    },
    password: {
      type: String,
      required: [true, "Password is Miss"],
      minlength: [6, "the length of user name can be minimum 6 characters"],
      set: v => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    },
    image: {
        type: String,
        default: defaultImage,
    },
    address: {
      type: String,
      required: [true, "Address is Miss"],
    },
    phone: {
      type: String,
      required: [true, "Address is Miss"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("Users", userSchema);

module.exports = User;
