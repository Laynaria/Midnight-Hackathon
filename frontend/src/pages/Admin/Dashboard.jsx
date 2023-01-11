import LeftBar from "@components/Admin/LeftBar";
import Header from "@components/Admin/Header";

export default function Dashboard() {
  return (
    <div className="admin">
      <LeftBar elemActive="" />
      <main>
        <Header />
        <div className="adminContent">
          <div className="kpiContent">
            <div className="kpiContent1">
              <div className="kpiContent1Title">Value</div>
              <div className="kpiContent1Value">45 000€</div>
            </div>
            <div className="kpiContent2">
              <div className="kpiContent1Title">Value</div>
              <div className="kpiContent1Value">45 000€</div>
            </div>
            <div className="kpiContent3">
              <div className="kpiContent1Title">Value</div>
              <div className="kpiContent1Value">45 000€</div>
            </div>
            <div className="kpiContent4">
              <div className="kpiContent1Title">Value</div>
              <div className="kpiContent1Value">45 000€</div>
            </div>
          </div>
          <div className="content">
            <div className="tableItem">
              <div className="tableTitle">Vehicles</div>
              <div className="tableContent" />
            </div>
            <div className="tableItem">
              <div className="tableTitle">Maintenance scheduled</div>
              <div className="tableContent" />
            </div>
          </div>
          <div className="content">
            <div className="tableItem">
              <div className="tableTitle">Bookings</div>
              <div className="tableContent" />
            </div>
            <div className="tableItem">
              <div className="tableTitle">Users</div>
              <div className="tableContent" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
