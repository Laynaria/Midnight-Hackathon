import LeftBar from "@components/Admin/LeftBar";
import Header from "@components/Admin/Header";
import Calendar from 'react-calendar';
import * as React from "react";
import 'react-calendar/dist/Calendar.css';
import "../../assets/css/admin/Admin.css";
import editButton from "../../assets/img/editButton.svg";



export default function VehicleForm() {
  return (
    <div className="admin">
      <LeftBar elemActive="" />
      <main>
        <Header />
        <div className="content">
          <div className="tableItem">
              <div className="headerForm">
                  <div className="tableTitleVehicles1">Vehicles</div><div className="modifyButton">Save</div>
              </div>
            <div className="adminContentVehicles">
              <div className="titleField1">Brand Name</div>
                    <input className="form" type="text" name="brand" placeholder="Brand Name" />
                </div>
            <div className="titleField">Model</div>
                    <input className="form" type="text" name="model" placeholder="Model" />
            <div className="titleField">Immatriculation</div>
                    <input className="form" type="text" name="immat" placeholder="Immatriculation" />
            <div className="titleField">Capacity</div>
              <input className="form" type="text" name="capacity" placeholder="Capacity" />
            <div className="titleField">Autonomy</div>
              <input className="form" form type="text" name="autonomy" placeholder="autonomy" />
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
