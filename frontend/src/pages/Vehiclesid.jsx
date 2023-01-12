import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import vehiclesRent from "@assets/data/vehiclesRent.json";
import "./vehicles.css";
import car2 from "@assets/images/car2.jpg";

import NavbarLayout from "@components/layout/NavbarLayout";

export default function Vehiclesid() {
  const { id } = useParams();
  const vehicleDetails = vehiclesRent[id - 1];
  return (
    <NavbarLayout>
      <h1 className="vehiclePageTitle">
        The <span className="text-green-500">Green</span> Search
      </h1>
      <section className="vehicleDetail">
        <div>
          <img alt="vehicule" src={car2} />
        </div>
        <div className="vehicleDetailContent">
          <div className="vehicleDetailTitle">
            <div>{vehicleDetails.name}</div>
            <div>2.0 CC Comfortline 95 HP</div>
          </div>
          <ul>
            <li>
              <FontAwesomeIcon
                className="text-green-600 text-sm mr-2"
                icon={faCheckCircle}
              />{" "}
              Fuel Diesel / 1600 cm3 Engine
            </li>
            <li>
              <FontAwesomeIcon
                className="text-green-600 text-sm mr-2"
                icon={faCheckCircle}
              />{" "}
              Under 25,000 Km
            </li>
            <li>
              <FontAwesomeIcon
                className="text-green-600 text-sm mr-2"
                icon={faCheckCircle}
              />{" "}
              Transmission Manual
            </li>
            <li>
              <FontAwesomeIcon
                className="text-green-600 text-sm mr-2"
                icon={faCheckCircle}
              />{" "}
              5 Year service included
            </li>
            <li>
              <FontAwesomeIcon
                className="text-green-600 text-sm mr-2"
                icon={faCheckCircle}
              />{" "}
              Manufacturing Year 2014
            </li>
            <li>
              <FontAwesomeIcon
                className="text-green-600 text-sm mr-2"
                icon={faCheckCircle}
              />{" "}
              5 Doors and Panorama View
            </li>
          </ul>
          <div className="vehicleDetailFoot">
            <span className="text-2xl font-bold">220 $ </span>
            <span className="text-sm">/ for 8 day(s)</span>
          </div>
        </div>
      </section>
      <button type="button" className="btn btn-green mb-10">
        RENT NOW
      </button>
    </NavbarLayout>
  );
}
