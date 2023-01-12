const router = require("express").Router();

const vehicleController = require("../controllers/vehicleController");

router.get("/car", vehicleController.getVehicles);
router.get("/car/:id", vehicleController.getVehicleById);

module.exports = router;
