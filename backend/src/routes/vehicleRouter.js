const router = require("express").Router();

const vehicleController = require("../controllers/vehicleController");

router.get("/car", vehicleController.getVehicles);

module.exports = router;
