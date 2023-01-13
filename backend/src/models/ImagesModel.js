const connection = require("../helpers/connection");

class ImagesModel {
  constructor() {
    this.table = "image";
  }

  find(id) {
    return connection.query(
      `select *
             from ${this.table}
             where id = ?`,
      [id]
    );
  }
}

module.exports = new ImagesModel();
