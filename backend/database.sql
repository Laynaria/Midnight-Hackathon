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
     name VARCHAR(255) NOT NULL,
     car_id INT NOT NULL,
     CONSTRAINT fk_image_car
     FOREIGN KEY (car_id)
     REFERENCES car(id));

CREATE TABLE contact(
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     firstname VARCHAR(50) NOT NULL,
     lastname VARCHAR(50) NOT NULL,
     mail VARCHAR(50) NOT NULL,
     phone VARCHAR(20) NOT NULL,
     zipcode VARCHAR(10) NOT NULL,
     obj VARCHAR(50) NOT NULL,
     msg VARCHAR(255) NOT NULL,
     is_read TINYINT(1));     


INSERT INTO user (firstname, lastname, mail, password, cellphone, address, postal_code, city, is_renter, is_admin) 
VALUES 
('john', 'doe', 'john@doe.com', 'john33000', '0546856852', '1 rue gambetta', '33000', 'Bordeaux', '0', '0'), 
('elie', 'parthenay', 'elie@yahoo.com', 'eliepart', '0623586957', '520 chemin de la glande', '29000', 'Brest', '1', '1'),
('julien', 'grellier', 'grellier@julien.com', 'jugre', '0672311366', '2 rue pagnolet', '33000', 'Bordeaux', '1', '1'),
('mathieu', 'langlois', 'mlgs45@gmail.com', 'mlgs45', '0789278865', '56 rue des grincheux', '75000', 'Paris', '1', '1'),
('eric', 'delahouse', 'erdlh@msn.fr', 'dlh13', '0752314589', '72 rue des picsous', '13000', 'Marseille', '1', '0'),
('albus', 'grosky', 'antholebg@gmail.com', 'jesuisbg', '0769696969', '13 rue du département', '13000', 'Marseille', '0', '0'),
('benoit', 'vidangeon', 'benlebg@yahoo.fr', 'jedorsjamais', '0745698621', '11 rue pommé', '86000', 'Poitiers', '0', '0'),  
('valentin', 'dupin', 'val@legeek.com', 'elmer', '0765458932', '25 rue toufaire', '17300', 'Rochefort', '1', '0'),
('jane', 'dove', 'jane.dove@gmail.com', 'janeandjack', '0689541278', '65 rue du marché', '69000', 'Lyon', '1', '0'),
('admin', 'controle', 'admin@gmail.com', 'admin007', '0672133145', '1 rue admin', '17000', 'La Rochelle', '1', '1'); 


INSERT INTO car (brand, matriculation, is_available, type, model, ideal_object, ideal_distance, ideal_places, user_id) 
VALUES 
('mercedes', '597B9PL', '1', 'berlin', 'EQE', 'Moving', '100 to 400', '5', 2),
('renault', '235F8ET', '1', 'urbanite', 'zoe', 'professional move', '0 to 50', '2', 2),
('mercedes', '23PF8H6', '1', 'berlin', 'EQS', 'personal move', '+400', '4', 2),
('mercedes', '87POL62', '1', 'SUV', 'EQB', 'moving', '+400', '1', 2),
('mercedes', '57MIB00', '1', 'SUV', 'EQA', 'stroll', '50 to 100', '3', 2),
('mercedes', '75OUI65', '1', 'SUV', 'EQC', 'moving', '100 to 400', '5', 5),
('mercedes', '52NON13', '1', 'SUV', 'EQS', 'personal move', '100 to 400', '5', 5),
('mercedes', '69XES96', '1', 'SUV', 'EQE SUV', 'stroll', '+400', '5', 5),
('BMW', '3G58M57', '1', 'berlin', 'i7 xDrive60', 'moving', '100 to 400', '', 5),
('BMW', '57ERTY1', '1', 'berlin', 'iX', 'moving', '100 to 400', '4', 5),
('BMW', '12K5J48', '1', 'SUV', 'i4', 'professional move', '50 to 100', '4', 5),
('BMW', 'BQU51I7', '1', 'SUV', 'i4 M50', 'stroll', '50 to 100', '4', 5),
('BMW', '24CHE2B', '1', 'berlin', 'iX1', 'personal move', '0 to 50', '3', 5),
('BMW', 'SHEE5SH', '1', 'SUV', 'iX3', 'personal move', '50 to 100', '3', 2),
('TESLA', 'CH3R138', '1', 'berlin', 'model 3', 'stroll', '+400', '3', 4),
('TESLA', 'F3R14S0', '1', 'family', 'model x', 'personal move', '+400', '5', 3),
('TESLA', 'M4PP4ST', '1', 'SUV', 'model y', 'moving', '+400', '4', 3),
('TESLA', 'L1NKD1N', '1', 'sport', 'model s', 'moving', '+400', '2', 4),
('nissan', 'F4C3B0K', '1', 'family', 'leaf', 'personal move', '+400', '5', 4),
('volkswagen', '1NS14GR', '1', 'urbanite', 'e-golf', 'professional move', '0 to 50', '3', 3),
('volkswagen', 'T0U1KV', '1', 'urbanite', 'e-UP', 'professional move', '0 to 50', '3', 4),
('volkswagen', 'V01RD3V', '1', 'family', 'ID Buzz', 'personal move', '100 to 400', '5', 8),
('volkswagen', 'V4L0R41', '1', 'berlin', 'ID Vizzion', 'stroll', '+400', '4', 3),
('volkswagen', 'L34GU3L', '1', 'utility', 'e-Crafter', 'professional move', '50 to 100', '2', 9),
('volkswagen', 'L4UR3AT', '1', 'SUV', 'ID5', 'personal move', '100 to 400', '5', 8),
('peugeot', 'CH4MP10', '1', 'urbanite', 'e-208', 'professional move', '0 to 50', '2', 3),
('peugeot', 'P1GN0NS', '1', 'family', 'e-2008', 'personal move', '100 to 400', '5', 9),
('peugeot', 'P4N4M41', '1', 'utility', 'e-RIFTER', 'professional move', '50 to 100', '4', 8),
('peugeot', 'P01NT33', '1', 'family', 'e-TRAVELLER', 'stroll', '100 to 400', '5', 9),
('renault', 'P01NT3R', '1', 'berlin', 'megane e-tech', 'personal move', '100 to 400', '4', 3);

INSERT INTO image(name, car_id) 
VALUES
('https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/eqe/saloon-v295/design-and-equipment/line-comparison/_jcr_content/comparisonslider/par/comparisonslide_477896184/exteriorImage.MQ6.12.20220316115856.jpeg', 1)
('https://images.caradisiac.com/logos-ref/modele/modele--renault-zoe/S0-modele--renault-zoe.jpg', 2)
('https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/eqs/saloon-v297/design/lines/_jcr_content/swipeableteaserbox/par/swipeableteaser/asset.MQ6.12.20220519120322.jpeg', 3)
('https://cdn.pocket-lint.com/r/s/970x/assets/images/162903-cars-review-mercedes-benz-eqb-300-image1-vhnnkqm4be.jpg', 4)
('https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/eqa/equipment/equipment-standard/_jcr_content/par/hotspotcontainer_cop/hotspotsimple/image.MQ6.12.20210126154139.jpeg', 5)
('https://cdn.motor1.com/images/mgl/XWRYE/s1/2020-mercedes-benz-eqc.jpg', 6)
('https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/eqs/saloon-v297/design/lines/_jcr_content/swipeableteaserbox/par/swipeableteaser/asset.MQ6.12.20220519120322.jpeg', 7)
('https://sf1.autoplus.fr/wp-content/uploads/autoplus/2022/10/53-mercedes-eqe-suv-001.jpg', 8)
('https://www.turbo.fr/sites/default/files/2022-04/BMW-i7-14.jpg', 9)
('https://www.challenges.fr/assets/img/2021/09/24/cover-r4x3w1200-614e06b0081f3-bmw-ix-xdrive-i50-sophisto-grey-024-resultat-jpeg.jpg', 10)
('https://www.bmw.fr/content/dam/bmw/common/all-models/i-series/i4/onepager-new/bmw-i4-edrive-40-onepager-gallery-i4-exterior-videos-02.jpg', 11)
('https://medias.blogbmw.fr/2021/06/BMW-i4-M50-2021-1.jpg', 12)
('https://images.caradisiac.com/images/9/1/3/9/199139/S1-essai-bmw-ix1-xdrive30-2022-si-logique-electrique-735063.jpg', 13)
('https://images.caradisiac.com/logos/1/8/0/0/271800/S7-essai-video-bmw-ix3-2022-le-choix-raisonnable-196294.jpg', 14)
('https://cdn.motor1.com/images/mgl/rMbNx/s3/tesla-model-3-autonomie-standard-plus.jpg', 15)
('https://cdn.automobile-propre.com/uploads/2012/01/Tesla-Model-X-2021-6.jpg', 16)
('https://ccfa.fr/wp-content/uploads/2020/11/tesla-model-y.jpg', 17)
('https://images.bfmtv.com/CIYma91hTKMpzbuIy-xXXekzKyw=/0x0:2048x1542/2048x0/images/Tesla-Model-S-Plaid-1540554.jpg', 18)
('https://images.frandroid.com/wp-content/uploads/2022/01/leaf10-sv-018.jpg', 19)
('https://ev-database.org/img/auto/Volkswagen_e-Golf-2017/Volkswagen_e-Golf-2017-01@2x.jpg', 20)
('https://images.caradisiac.com/logos/7/6/1/1/257611/S8-essai-volkswagen-e-up-une-vraie-citadine-electrique-enfin-en-vente-libre-180109.jpg', 21)
('https://images.frandroid.com/wp-content/uploads/2022/11/volkswagen-id-buzz-volkswagen-00016.jpg', 22)
('https://www.automobile-propre.com/wp-content/uploads/2018/03/I.D._VIZZION_Concept-8006.jpg', 23)
('https://www.largus.fr/images/images/e-crafter-20180826004.jpg', 24)
('https://images.caradisiac.com/images/6/6/8/2/196682/S1-essai-video-volkswagen-id-5-718029.jpg', 25)
('https://images.caradisiac.com/logos/6/4/7/6/256476/S8-essai-peugeot-e-208-a-l-assaut-de-la-renault-zoe-178750.jpg', 26)
('https://sf2.auto-moto.com/wp-content/uploads/sites/9/2020/04/peugeot-e-2008.jpeg', 27)
('https://cdn.automobile-propre.com/uploads/2021/02/Peugeot-e-Rifter-electrique-2021-02.jpg', 28)
('https://www.largus.fr/images/images/peugeot-e-traveller-7.jpg', 29)
('https://images.caradisiac.com/images/9/6/6/7/199667/S0-la-renault-megane-e-tech-a-39-000eur-en-donne-t-elle-pour-son-argent-738524.jpg', 30);


INSERT INTO contact(firstname, lastname, mail, phone, zipcode, obj, msg, is_read)
VALUES
('john', 'doe', 'john@doe.com', '0546856852', '33000', 'voiture accidentée', 'Bonjour monsieur, je suis dans le regret de vous annoncer que nous avons eu un accident lors de notre voyage dans votre véhicule, comment procédons nous pour les réparations ?', 1),
('mathieu', 'langlois', 'mlgs45@gmail.com', '0789278865', '75000', 'remerciements', 'Je vous prie de recevoir mes plus sincères remerciements pour la création de greenrent, enfin un site de location de voiture electriques', 0),
('albus', 'grosky', 'antholebg@gmail.com', '0769696969', '13000', 'comment faire', 'Bonjour, je ne suis pas doué en informatique comment on réseerve une voiture ?', 0);