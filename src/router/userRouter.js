const { getUsers, getUser } = require("../controllers/userController");

const router = require("express").Router();

router.get("/", getUsers);
router.get("/:id", getUser);

module.exports = router;
