const router = require("express").Router();

const imagesController = require("../controllers/imagesController");

router.get("/images/:id", imagesController.getImagesById);

module.exports = router;
