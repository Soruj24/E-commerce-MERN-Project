const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const router = require("./src/router/userRouter");

const { seedRouter } = require("./src/router/seedRouter");
const errorResponse = require("./src/controllers/responesController");

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

app.use("/api/users", router);
app.use("/api/seed", seedRouter);

//route  error handler
app.use((req, res, next) => {
  next(createError(404, "route not found"));
});

// server err handler
app.use((err, req, res, next) => {
  return errorResponse(res,{
    statusCode: err.status,
    message:err.message
   })
});

module.exports = app;
