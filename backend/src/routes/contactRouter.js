const router = require("express").Router();

const contactController = require("../controllers/contactController");

router.post("/contact", contactController.postContact);

module.exports = router;
