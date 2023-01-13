import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function CarDetails({ elem }) {
  const [vehicleImg, setVehicleImg] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/images/${elem.id}`)
      .then((response) => response.json())
      .then((data) => {
        setVehicleImg(data[0][0].name);
      });
  }, [elem]);

  return (
    <section id="carCardId" className="vehicleDetail">
      <div>
        <img alt="vehicule" src={vehicleImg} />
      </div>
      <div className="vehicleDetailContent">
        <div className="vehicleDetailTitle">
          <div>{elem.brand}</div>
          <div>{elem.model}</div>
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
  );
}
