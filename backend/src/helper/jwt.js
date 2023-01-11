const jwt = require("jsonwebtoken");

/**
 * Je vais utiliser la méthode generateToken dans le login
 * user = {
 *  id: 1
 *  email: email@provider.com
 * }
 */
function generateToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
}

// Je vais utiliser decodeToken dans le middleware
function decodeToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = { generateToken, decodeToken };
