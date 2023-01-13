const model = require("../models/ImagesModel");

const getImagesById = (req, res) => {
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

module.exports = { getImagesById };
