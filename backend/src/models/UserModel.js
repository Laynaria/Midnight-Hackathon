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
}

module.exports = new UserModel();
