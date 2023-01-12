const model = require("../models/VehicleModel");

const getVehicles = (req, res) => {
  const sql = "select * from car";
  const sqlValues = [];

  model
    .get(sql, sqlValues)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getVehicleById = (req, res) => {
  model
    .find(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { getVehicles, getVehicleById };
