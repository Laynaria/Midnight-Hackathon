const fs = require("fs");

// getFile permet de recevoir un fichier, hors, il faut que je stock ce fichier,
// pour ce faire, je dois avoir un dossier "uploads" qui stockera l'ensemble des documents.
const getFile = (req, res) => {
  // grâce à fs.rename je vais pouvoir changer le nom du fichier,
  fs.rename(
    `uploads/${req.file.filename}`,
    `uploads/${req.file.filename}-${req.file.originalname}`,
    (err) => {
      if (err) throw err;
      res.status(201).json({ success: "file uploaded" });
    }
  );
};

module.exports = getFile;
