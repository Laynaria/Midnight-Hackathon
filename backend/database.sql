CREATE TABLE bookings(
    -> id INT PRIMARY KEY NOT NULL,
    -> start_date DATE NOT NULL,
    -> end_date DATE NOT NULL,
    -> user_id INT NOT NULL,
    -> CONSTRAINT fk_bookings_user
    -> FOREIGN KEY (user_id)
    -> REFERENCES user(id),
    -> car_id INT NOT NULL,
    -> CONSTRAINT fk_bookings_car
    -> FOREIGN KEY (car_id)
    -> REFERENCES car(id));

CREATE TABLE image(
    -> name VARCHAR(50) NOT NULL,
    -> car_id INT NOT NULL,
    -> CONSTRAINT fk_image_car
    -> FOREIGN KEY (car_id)
    -> REFERENCES car(id),
    -> id INT PRIMARY KEY NOT NULL);

CREATE TABLE car(
    -> id INT PRIMARY KEY NOT NULL,
    -> brand VARCHAR(50) NOT NULL,
    -> matriculation VARCHAR(50) NOT NULL,
    -> is_available TINYINT(1) NOT NULL,
    -> type VARCHAR(50) NOT NULL,
    -> model VARCHAR(50) NOT NULL,
    -> ideal_object VARCHAR(50) NOT NULL,
    -> ideal_distance VARCHAR(50) NOT NULL,
    -> ideal_places VARCHAR(50) NOT NULL,
    -> user_id INT NOT NULL,
    -> CONSTRAINT fk_car_user
    -> FOREIGN KEY (user_id)
    -> REFERENCES user(id));

CREATE TABLE user(
    -> id  INT PRIMARY KEY NOT NULL,
    -> firstname VARCHAR(50) NOT NULL,
    -> lastname VARCHAR(50) NOT NULL,
    -> mail VARCHAR(50) NOT NULL,
    -> password VARCHAR(50) NOT NULL,
    -> phone VARCHAR(50),
    -> cellphone VARCHAR(50) NOT NULL,
    -> address VARCHAR(50) NOT NULL,
    -> additional_address VARCHAR(50),
    -> postal_code VARCHAR(10) NOT NULL,
    -> city VARCHAR(50) NOT NULL,
    -> is_renter TINYINT(1),
    -> is_admin TINYINT(1));
