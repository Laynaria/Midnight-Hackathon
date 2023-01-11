import LeftBar from "@components/Admin/LeftBar";
import Header from "@components/Admin/Header";
import * as React from "react";
import "../../assets/css/admin/Admin.css";
import VehiclesTablePage from "@components/Admin/Tables/VehiclesTablePage";

export default function VehiclesAdmin() {
  return (
    <div className="admin">
      <LeftBar elemActive="" />
      <main>
        <Header />
        <div className="content">
          <div className="tableItem">
            <div className="tableTitleVehicles">Vehicles</div>
            <div className="tableContentVehicles">
              <VehiclesTablePage />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
