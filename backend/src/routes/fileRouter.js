const router = require("express").Router();
const multer = require("multer");

const upload = multer({ dest: "uploads/" });
const getFile = require("../controllers/fileController");

router.post("/file", upload.single("img"), getFile);

module.exports = router;
