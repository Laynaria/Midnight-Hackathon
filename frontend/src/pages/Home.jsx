import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLifeRing,
  faCalendarAlt,
  faMapMarkerAlt,
  faCar,
  faUser,
  faFlag,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import vehiclesRent from "@assets/data/vehiclesRent.json";
import NavbarLayout from "@components/layout/NavbarLayout";
import Hero from "@components/layout/Hero/Hero";
import CardCarRent from "@components/CardCarRent";
import hero1 from "@assets/images/hero1.jpg";
import car1 from "../assets/images/car1.jpg";

import "./home.css";

export default function Home() {
  return (
    <NavbarLayout>
      {/* <h1 style={{ marginTop: "5rem" }}>This is Home</h1> */}
      <Hero bg={hero1} />

      <section className="services">
        <div className="services-card">
          <div>
            <FontAwesomeIcon icon={faLifeRing} />
          </div>
          <div>7/24 car support</div>
        </div>
        <div className="services-card">
          <div>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
          <div>Reservation Anytime</div>
        </div>
        <div className="services-card">
          <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <div>Lots Of Locations</div>
        </div>
      </section>

      <section className="presentation">
        <div>
          <div className="pres-title1">What Do You Know About Us</div>
          <div className="pres-title2">WHO WE ARE ?</div>
          <p className="pres-text">
            Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
            nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
            cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus
            a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
            consequat auctor eu in elit.
          </p>
        </div>
        <div>
          <img alt="car" src={car1} />
        </div>
      </section>

      <section className="lastRent">
        <h2>Latest Rental Vehicles</h2>

        <div className="lastRentContent">
          {vehiclesRent.slice(vehiclesRent.length - 3).map((elem) => (
            <Link to={`/vehicles/${elem.id}`}>
              <CardCarRent elem={elem} />
            </Link>
          ))}
        </div>
      </section>
      <section className="infos">
        <div>
          <div className="infosIcon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>
            <div className="infosTitle2">3450</div>
            <div className="infosTitle1">Users</div>
          </div>
        </div>
        <div>
          <div className="infosIcon">
            <FontAwesomeIcon icon={faCar} />
          </div>
          <div>
            <div className="infosTitle2">3450</div>
            <div className="infosTitle1">Rents</div>
          </div>
        </div>
        <div>
          <div className="infosIcon">
            <FontAwesomeIcon icon={faFlag} />
          </div>
          <div>
            <div className="infosTitle2">3450</div>
            <div className="infosTitle1">Users</div>
          </div>
        </div>
        <div>
          <div className="infosIcon">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div>
            <div className="infosTitle2">3450</div>
            <div className="infosTitle1">Users</div>
          </div>
        </div>
      </section>
    </NavbarLayout>
  );
}
