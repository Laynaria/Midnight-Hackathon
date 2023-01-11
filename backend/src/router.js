const express = require("express");

const router = express.Router();

const AuthControllers = require("./controllers/AuthControllers");

router.post("/auth/register", AuthControllers.register);
router.post("/auth/login", AuthControllers.login);

module.exports = router;
