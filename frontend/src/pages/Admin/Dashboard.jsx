import LeftBar from "@components/Admin/LeftBar";
import Header from "@components/Admin/Header";
import VehiclesTable from "@components/Admin/Tables/VehiclesTable";
import * as React from "react";
import BookingTable from "@components/Admin/Tables/BookingTable";
import MaintenanceTable from "@components/Admin/Tables/MaintenanceTable";
import UsersTable from "@components/Admin/Tables/UsersTable";

export default function Dashboard() {
  return (
    <div className="admin">
      <LeftBar elemActive="" />
      <main>
        <Header />
        <div className="adminContent">
          <div className="kpiContent">
            <div className="kpiContent1">
              <div className="kpiContent1Title">Booking Monthly</div>
              <div className="kpiContent1Value">4 890</div>
            </div>
            <div className="kpiContent2">
              <div className="kpiContent1Title">Monthly Revenue</div>
              <div className="kpiContent1Value">68 000€</div>
            </div>
            <div className="kpiContent3">
              <div className="kpiContent1Title">New Costumers</div>
              <div className="kpiContent1Value"> 8 500</div>
            </div>
            <div className="kpiContent4">
              <div className="kpiContent1Title">Progression</div>
              <div className="kpiContent1Value">+350%</div>
            </div>
          </div>
          <div className="content">
            <div className="tableItem">
              <div className="tableTitle">Vehicles</div>
              <div className="tableContent">
                <VehiclesTable />
                <div className="linkContentTable">
                  <a className="linkTable" href="/admin/Vehicles">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="tableItem">
              <div className="tableTitle">Maintenance scheduled</div>
              <div className="tableContent">
                <MaintenanceTable />
                <div className="linkContentTable">
                  <a className="linkTable" href="/admin/VehiclesAdmin.jsx">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="tableItem">
              <div className="tableTitle">Bookings</div>
              <div className="tableContent">
                <BookingTable />
                <div className="linkContentTable">
                  <a className="linkTable" href="/admin/VehiclesAdmin.jsx">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="tableItem">
              <div className="tableTitle">Users</div>
              <div className="tableContent">
                <UsersTable />
                <div className="linkContentTable">
                  <a className="linkTable" href="/admin/users">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
