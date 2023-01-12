import LeftBar from "@components/Admin/LeftBar";
import Header from "@components/Admin/Header";
import * as React from "react";
import "../../assets/css/admin/Admin.css";
import UsersTablePage from "@components/Admin/Tables/UsersTablePage";

export default function UserAdmin() {
  return (
    <div className="admin">
      <LeftBar elemActive="" />
      <main>
        <Header />
        <div className="content">
          <div className="tableItem">
            <div className="tableTitleVehicles">Users</div>
            <div className="tableContentVehicles">
              <UsersTablePage />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
