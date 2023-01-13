import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faUser, faRoad } from "@fortawesome/free-solid-svg-icons";
import "./cardCarRent.css";

export default function CardCarRent({ hundleClick, elem }) {
  const [vehicleImg, setVehicleImg] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5501/images/${elem.id}`)
      .then((response) => response.json())
      .then((data) => {
        setVehicleImg(data[0][0].name);
      });
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => hundleClick(elem.id)}
      onKeyDown={() => hundleClick(elem.id)}
      className="card-rent"
    >
      <div
        style={{ backgroundImage: `url(${vehicleImg})` }}
        className="card-rent-head"
      />
      <div className="card-rent-body">
        <div className="title1">
          {elem.brand} <span>{elem.model}</span>
        </div>
        <div className="title2">Start from {elem.priceStart} / day</div>
        <div className="button">RENT IT</div>
      </div>
      <div className="card-rent-foot">
        <div className="w-1/3">
          <FontAwesomeIcon icon={faCar} /> {elem.type}
        </div>
        <div className="w-1/3">
          <FontAwesomeIcon icon={faUser} /> {elem.ideal_places}
        </div>
        <div className="w-1/3">
          <FontAwesomeIcon icon={faRoad} />{" "}
          {elem.ideal_distance.split(" to ")[1]}
        </div>
      </div>
    </div>
  );
}
