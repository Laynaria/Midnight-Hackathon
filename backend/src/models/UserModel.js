const connection = require("../helpers/connection");

class UserModel {
  constructor() {
    this.table = "user";
  }

  get(user) {
    return connection.query(
      `select *
             from ${this.table}`,
      [
        user.firstname,
        user.lastname,
        user.mail,
        user.phone,
        user.cellphone,
        user.address,
        user.additionalAddress,
        user.postalCode,
        user.city,
      ]
    );
  }

  find(id) {
    return connection.query(
      `select *
             from ${this.table}
             where id = ?`,
      [id]
    );
  }

  update(user) {
    return connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, mail = ?, phone = ?, cellphone = ?, address = ?, additionalAddress = ?,
                postalCode = ?, city = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.mail,
        user.phone,
        user.cellphone,
        user.address,
        user.additionalAddress,
        user.postalCode,
        user.city,
        user.id,
      ]
    );
  }
}

module.exports = new UserModel();
