const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/jwt");
const model = require("../models/AuthModel");

const register = async (req, res) => {
  const user = {
    ...req.body,
    password: await bcrypt.hash(req.body.password, 10),
  };
  // de save mon user en bdd
  model
    .insert(user)
    .then(() => {
      res.status(201).json({ success: "User save" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const login = (req, res) => {
  // récuperer mon user de la bdd
  model
    .findUser(req.body.email)
    .then(([[user]]) => {
      if (!user) {
        return res.status(403).json({ error: "user not found" });
      }
      const correctPassword = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!correctPassword) {
        return res.status(403).json({ error: "wrong password" });
      }

      const token = generateToken({ id: user.id, mail: user.mail });

      res.cookie("token", token);

      return res.status(200).json({ success: "user logged" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  register,
  login,
};
