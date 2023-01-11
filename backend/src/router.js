const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");

router.post("/auth/register", authControllers.register);
router.post("/auth/login", authControllers.login);

module.exports = router;
