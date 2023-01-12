const connection = require("../helpers/connection");

class VehicleModel {
  constructor() {
    this.table = "car";
  }

  get(car) {
    return connection.query(
      `select *
             from ${this.table}`,
      [
        car.brand,
        car.matriculation,
        car.is_available,
        car.type,
        car.model,
        car.ideal_object,
        car.ideal_distance,
        car.ideal_places,
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

  insert(car) {
    return connection.query(
      `insert into ${this.table} (brand, matriculation, is_available, type, model, ideal_object, ideal_distance,
                                        ideal_places) value (?,?,?,?,?,?,?,?)`,
      [
        car.brand,
        car.matriculation,
        car.is_available,
        car.type,
        car.model,
        car.ideal_object,
        car.ideal_distance,
        car.ideal_places,
      ]
    );
  }
}

module.exports = new VehicleModel();
