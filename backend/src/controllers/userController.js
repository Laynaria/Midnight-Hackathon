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

const getUserById = (req, res) => {
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

const updateUser = (req, res) => {
  const { id } = req.params;
  const user = {
    ...req.body,
    id,
  };
  model
      .update(user)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
};

module.exports = { getUsers, getUserById, updateUser };
