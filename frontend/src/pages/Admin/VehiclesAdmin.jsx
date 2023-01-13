import LeftBar from "@components/Admin/LeftBar";
import Header from "@components/Admin/Header";
import * as React from "react";
import "../../assets/css/admin/Admin.css";
import { useNavigate } from "react-router-dom";
import VehiclesTablePage from "@components/Admin/Tables/VehiclesTablePage";

export default function VehiclesAdmin() {
  const navigate = useNavigate();

  const navigateToVehiclesForm = () => {
    navigate("/admin/vehicles/add");
  };

  return (
    <div className="admin">
      <LeftBar elemActive="" />
      <main>
        <Header />
        <div className="content">
          <div className="tableItem">
            <div className="tableTitleVehicles1">
              Vehicles
              <button
                type="submit"
                className="addButton"
                onClick={navigateToVehiclesForm}
              >
                Add a vehicle
              </button>
            </div>
            <div className="tableContentVehicles">
              <VehiclesTablePage />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
