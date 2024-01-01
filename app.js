const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");

const app = express();
const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, //1 minute,
  max: 5,
  message: "Please try again later",
});

app.use(morgan("dev"));
app.use(xssClean());
app.use(rateLimiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products", (req, res) => {
  res.send("product is home page");
});

//route  error handler
app.use((req, res, next) => {
  next(createError(404, "route not found"));
});

// server err handler
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;