const model = require("../models/UserModel");

const getUsers = (req, res) => {
  const sql = "select * from user";
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

module.exports = { getUsers };
