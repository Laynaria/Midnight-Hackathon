import LeftBar from "@components/Admin/LeftBar";
import Header from "@components/Admin/Header";
import Calendar from "react-calendar";
import * as React from "react";
import "react-calendar/dist/Calendar.css";
import "../../assets/css/admin/Admin.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VehicleFormModify() {
  const { id } = useParams();
  const [vehicle, setVehicle] = React.useState({});

  useEffect(() => {
    fetch(`http://localhost:5501/car/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setVehicle(data[0][0]);
      });
  }, []);

  const handleChange = (event) => {
    event.target.value.includes("*") ? "" : setVehicle(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(vehicle);
    event.preventDefault();
    // const data = event.target.value;
    fetch(`http://localhost:5501/car/${id}`, {
      method: "PUT",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vehicle),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="admin">
      <LeftBar elemActive="" />
      <main>
        <Header />
        <div className="content">
          <div className="tableItem">
            <div className="headerForm">
              <div className="tableTitleVehicles1">
                {vehicle.model} - {vehicle.matriculation}
              </div>
              <button
                type="submit"
                className="modifyButton"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
            <div className="adminContentVehicles">
              <div className="titleField1">Brand Name</div>
              <input
                className="form"
                type="text"
                name="brand"
                placeholder="Brand"
                value={vehicle.brand}
                onChange={handleChange}
              />
            </div>
            <div className="titleField">Model</div>
            <input
              className="form"
              type="text"
              name="model"
              placeholder="Model"
              value={vehicle.model}
            />
            <div className="titleField">Immatriculation</div>
            <input
              className="form"
              type="text"
              name="immat"
              placeholder="Immatriculation"
              value={vehicle.matriculation}
              onChange={handleChange}
            />
            <div className="titleField">Capacity</div>
            <input
              className="form"
              type="text"
              name="capacity"
              placeholder="Capacity"
              value={vehicle.ideal_places}
              onChange={handleChange}
            />
            <div className="titleField">Autonomy</div>
            <input
              className="form"
              form
              type="text"
              name="autonomy"
              placeholder="Autonomy"
              value={vehicle.ideal_distance}
              onChange={handleChange}
            />
            <div className="titleField">Objectif</div>
            <input
              className="form"
              form
              type="text"
              name="objectif"
              placeholder="objectif"
              value={vehicle.ideal_object}
              onChange={handleChange}
            />
            <div className="tableTitleVehicles">Avaibility</div>
            <div className="adminCalendar">
              <Calendar />
            </div>
            <div className="tableTitleVehicles">Picture</div>
          </div>
        </div>
      </main>
    </div>
  );
}
