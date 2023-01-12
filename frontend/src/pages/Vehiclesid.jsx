import { useParams } from "react-router-dom";
import CardCarRent from "@components/CardCarRent";
import vehiclesRent from "@assets/data/vehiclesRent.json";
import "./vehicles.css";

import NavbarLayout from "@components/layout/NavbarLayout";

export default function Vehiclesid() {
  const { id } = useParams();
  return (
    <NavbarLayout>
      <section className="lastRent">
        <h2>Seltos 5p 2023</h2>

        <div className="lastRentContent">
          <CardCarRent elem={vehiclesRent[id - 1]} />
        </div>
      </section>
    </NavbarLayout>
  );
}
