import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import CarDetails from "@components/CarDetails";
import Hero from "@components/layout/Hero/Hero";
import hero2 from "@assets/images/hero2.jpg";
import CardCarRent from "@components/CardCarRent";

import "./vehicles.css";

import NavbarLayout from "@components/layout/NavbarLayout";
import SearchVehiclesRentContext from "../contexts/searchVehiclesRentContext";

export default function Vehicles() {
  const { searchVehiclesRentDetails } = React.useContext(
    SearchVehiclesRentContext
  );
  const [rows, setRows] = React.useState([]);

  const [carId, setCarId] = useState(0);
  const [carCardDetails, setCarCardDetails] = useState([]);

  const [showModals, setShowModals] = useState(false);
  const setShowModal = () => {
    setShowModals(!showModals);
  };
  const hundleClick = (id) => {
    setShowModals(false);
    setCarId(id);
    setCarCardDetails(rows.filter((e) => e.id === id)[0]);
  };
  useEffect(() => {
    fetch("http://localhost:5501/car")
      .then((response) => response.json())
      .then((data) => {
        const newArr = data[0]
          .filter(
            (e) => +e.ideal_places >= searchVehiclesRentDetails[0].passenger
          )
          .filter(
            (e) =>
              +searchVehiclesRentDetails[0].distance <=
              +e.ideal_distance.split(" to ")[1]
          );
        setRows(newArr);
      });
  }, [searchVehiclesRentDetails]);

  return (
    <NavbarLayout>
      <Hero bg={hero2} />

      {carId > 0 ? (
        <CarDetails
          searchVehiclesRentDetails={searchVehiclesRentDetails}
          showModals={showModals}
          setShowModal={setShowModal}
          elem={carCardDetails}
        />
      ) : null}
      <section className="lastRent">
        <h2>
          Your <span className="text-green-400">Green</span> Search
        </h2>

        <div className="lastRentContent">
          {rows.map((elem) => (
            <Link to="#findCar">
              <CardCarRent hundleClick={hundleClick} elem={elem} />
            </Link>
          ))}
        </div>
      </section>
    </NavbarLayout>
  );
}
