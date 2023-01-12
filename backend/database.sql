DROP TABLE IF EXISTS contact;
DROP TABLE IF EXISTS image;
DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS car;
DROP TABLE IF EXISTS user;


CREATE TABLE user(
     id  INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     firstname VARCHAR(50) NOT NULL,
     lastname VARCHAR(50) NOT NULL,
     mail VARCHAR(50) NOT NULL,
     password VARCHAR(255) NOT NULL,
     phone VARCHAR(50),
     cellphone VARCHAR(50) NOT NULL,
     address VARCHAR(255) NOT NULL,
     additional_address VARCHAR(255),
     postal_code VARCHAR(10) NOT NULL,
     city VARCHAR(50) NOT NULL,
     is_renter TINYINT(1),
     is_admin TINYINT(1));

CREATE TABLE car(
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     brand VARCHAR(50) NOT NULL,
     matriculation VARCHAR(50) NOT NULL,
     is_available TINYINT(1) NOT NULL,
     type VARCHAR(50) NOT NULL,
     model VARCHAR(50) NOT NULL,
     ideal_object VARCHAR(50) NOT NULL,
     ideal_distance VARCHAR(50) NOT NULL,
     ideal_places VARCHAR(50) NOT NULL,
     user_id INT NOT NULL,
     CONSTRAINT fk_car_user
     FOREIGN KEY (user_id)
     REFERENCES user(id));

CREATE TABLE bookings(
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     start_date DATE NOT NULL,
     end_date DATE NOT NULL,
     user_id INT NOT NULL,
     CONSTRAINT fk_bookings_user
     FOREIGN KEY (user_id)
     REFERENCES user(id),
     car_id INT NOT NULL,
     CONSTRAINT fk_bookings_car
     FOREIGN KEY (car_id)
     REFERENCES car(id));

CREATE TABLE image(
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     name VARCHAR(50) NOT NULL,
     car_id INT NOT NULL,
     CONSTRAINT fk_image_car
     FOREIGN KEY (car_id)
     REFERENCES car(id));

CREATE TABLE contact(
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     firstname VARCHAR(50) NOT NULL,
     lastname VARCHAR(50) NOT NULL,
     mail VARCHAR(50) NOT NULL,
     phone VARCHAR(20),
     zipcode VARCHAR(10),
     obj VARCHAR(50),
     msg VARCHAR(255),
     is_read TINYINT(1));     


INSERT INTO user (firstname, lastname, mail, password, cellphone, address, postal_code, city, is_renter, is_admin) 
VALUES 
('john', 'doe', 'john@doe.com', 'john33000', '0546856852', '1 rue gambetta', '33000', 'Bordeaux', '0', '0'), 
('elie', 'parthenay', 'elie@yahoo.com', 'eliepart', '0623586957', '520 chemin de la glande', '29000', 'Brest', '1', '1'),
('julien', 'grellier', 'grellier@julien.com', 'jugre', '0672311366', '2 rue pagnolet', '33000', 'bordeaux', '1', '1'),
('mathieu', 'langlois', 'mlgs45@gmail.com', 'mlgs45', '0789278865', '56 rue des grincheux', '75000', 'Paris', '1', '1'),
('eric', 'delahouse', 'erdlh@msn.fr', '', '', '', '', '', '', '');
/*('', '', '', '', '', '', '', '', '', ''),
('', '', '', '', '', '', '', '', '', ''),  
('', '', '', '', '', '', '', '', '', ''),
('', '', '', '', '', '', '', '', '', ''),
('', '', '', '', '', '', '', '', '', '');*/


INSERT INTO car (brand, matriculation, is_available, type, model, ideal_object, ideal_distance, ideal_places, user_id) 
VALUES 
('mercedes', '597B9P', '1', 'berlin', 'EQE', 'Moving', '100 to 400', '5', 2),
('renault', '235F8ERT', '1', 'urbanite', 'zoe', 'professional move', '0 to 50', '2', 2),
('mercedes', '23PF86', '1', 'berlin', 'EQS', 'personal move', '+400', '4', 2),
('mercedes', '87POL62', '1', 'SUV', 'EQB', 'moving', '+400', '1', 2),
('mercedes', '57MIB00', '1', 'SUV', 'EQA', 'stroll', '50 to 100', '3', 2);
/*('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', ),
('', '', '', '', '', '', '', '', );*/


-- INSERT INTO user (firstname, lastname, mail, password, cellphone, address, postal_code, city, is_renter, is_admin) 
-- VALUES ('', '', '', '', '', '', '', '', '', '');

-- INSERT INTO car (brand, matriculation, is_available, type, model, ideal_object, ideal_distance, ideal_places, user_id) 
-- VALUES ('', '', '', '', '', '', '', '', );
