import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "@components/layout/Hero/Hero";
import hero2 from "@assets/images/hero2.jpg";
import CardCarRent from "@components/CardCarRent";
import vehiclesRent from "@assets/data/vehiclesRent.json";

import "./vehicles.css";

import NavbarLayout from "@components/layout/NavbarLayout";
import SearchVehiclesRentContext from "../contexts/searchVehiclesRentContext";

export default function Vehicles() {
  const { searchVehiclesRentDetails } = React.useContext(
    SearchVehiclesRentContext
  );

  useEffect(() => {}, [searchVehiclesRentDetails]);

  return (
    <NavbarLayout>
      <Hero bg={hero2} />
      <section className="lastRent">
        <h2>Your Search</h2>

        <div className="lastRentContent">
          {vehiclesRent.map((elem) => (
            <Link to={`/vehicles/${elem.id}`}>
              <CardCarRent elem={elem} />
            </Link>
          ))}
        </div>
      </section>
    </NavbarLayout>
  );
}
