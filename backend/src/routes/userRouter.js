const router = require("express").Router();

const userController = require("../controllers/userController");

router.get("/user", userController.getUsers);
router.get("/user/:id", userController.getUserById);
router.put("/user/:id", userController.updateUser);

module.exports = router;
