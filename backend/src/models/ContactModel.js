const connection = require("../helpers/connection");

class ContactModel {
  constructor() {
    this.table = "contact";
  }

  insert(contact) {
    return connection.query(
      `insert into ${this.table} (firstname, lastname, email, phone, zipcode, object, message) value (?, ?, ?, ?, ?, ?, ?)`,
      [
        contact.firstname,
        contact.lastname,
        contact.email,
        contact.phone,
        contact.zipcode,
        contact.object,
        contact.message,
      ]
    );
  }
}

module.exports = new ContactModel();
