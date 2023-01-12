const model = require("../models/ContactModel");

const postContact = async (req, res) => {
  const contact = {
    ...req.body,
  };
  model
    .insert(contact)
    .then(() => {
      res.status(201).json({ success: "Message send with success" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  postContact,
};
