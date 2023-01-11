const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  /**
   * user = {
   *    name: "AnthoLeBG",
   *    email: "test@test.fr",
   *    password : hash password
   * }
   */
  add(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, mail, password, phone, cellphone, adress, aditional_adresse, postal_code, city) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.mail,
        user.password,
        user.phone,
        user.cellphone,
        user.adress,
        user.aditionalAdress,
        user.postalCode,
        user.city,
      ]
    );
  }

  /**
   * user = {
   *  email: email@provider.com
   *  password: secretPassw0rd!
   * }
   *
   */
  findUser(user) {
    return this.connection.query(
      `select * from ${this.table} where email = ?`,
      [user.email]
    );
  }
}

module.exports = AuthManager;
