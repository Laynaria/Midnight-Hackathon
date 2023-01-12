const connection = require("../helpers/connection");

class ContactModel {
  constructor() {
    this.table = "contact";
  }

  insert(contact) {
    return connection.query(
      `insert into ${this.table} (firstname, lastname, mail, phone, zipcode, obj, msg) value (?, ?, ?, ?, ?, ?, ?)`,
      [
        contact.firstname,
        contact.lastname,
        contact.mail,
        contact.phone,
        contact.zipcode,
        contact.obj,
        contact.msg,
      ]
    );
  }
}

module.exports = new ContactModel();
