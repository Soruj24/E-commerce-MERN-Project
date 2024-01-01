const { getUser } = require("../controllers/userController");

const router = require("express").Router();

router.get("/", getUser);

module.exports = router;
