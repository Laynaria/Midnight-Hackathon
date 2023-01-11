const connection = require("../helpers/connection");

class AuthModel {
  constructor() {
    this.table = "user";
  }

  insert(user) {
    return connection.query(
      `insert into ${this.table} (firstname, lastname, mail, password, phone, cellphone, adress, additional_address, postal_code, city) value (?,?,?,?,?,?,?,?,?,?)`,
      [
        user.firstname,
        user.lastname,
        user.mail,
        user.password,
        user.phone,
        user.cellphone,
        user.adress,
        user.additionalAddress,
        user.postalCode,
        user.city,
      ]
    );
  }

  findUser(mail) {
    return connection.query(`select * from ${this.table} where mail = ?`, [
      mail,
    ]);
  }
}

module.exports = new AuthModel();
