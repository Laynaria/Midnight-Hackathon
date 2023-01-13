import LeftBar from "@components/Admin/LeftBar";
import Header from "@components/Admin/Header";
import * as React from "react";
import "react-calendar/dist/Calendar.css";
import "../../assets/css/admin/Admin.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ApiBaseUrL = import.meta.env.VITE_BACKEND_URL;

export default function UserFormModify() {
  const { id } = useParams();
  const [user, setUser] = React.useState({});

  useEffect(() => {
    fetch(`${ApiBaseUrL}/user/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data[0][0]);
      });
  }, []);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = event.target.value;
    fetch(`${ApiBaseUrL}/car/${id}`, {
      method: "PUT",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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
                {user.firstname} - {user.lastname}
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
              <div className="titleField1">First Name</div>
              <input
                className="form"
                type="text"
                name="firstname"
                placeholder="First Name"
                value={user.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="titleField">Last Name</div>
            <input
              className="form"
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={user.lastname}
              onChange={handleChange}
            />
            <div className="titleField">Address</div>
            <input
              className="form"
              type="text"
              name="address"
              placeholder="Address"
              value={user.address}
              onChange={handleChange}
            />
            <div className="titleField">Code Postal</div>
            <input
              className="form"
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={user.postalCode}
              onChange={handleChange}
            />
            <div className="titleField">City</div>
            <input
              className="form"
              form
              type="text"
              name="city"
              placeholder="City"
              value={user.city}
              onChange={handleChange}
            />
            <div className="titleField">Phone</div>
            <input
              className="form"
              form
              type="text"
              name="cellphone"
              placeholder="Phone"
              value={user.cellphone}
              onChange={handleChange}
            />
            <div className="titleField">Mail</div>
            <input
              className="form"
              form
              type="text"
              name="mail"
              placeholder="Email"
              value={user.mail}
              onChange={handleChange}
            />
            <div className="tableTitleVehicles">Avaibility</div>
            <div className="tableTitleVehicles">Picture</div>
          </div>
        </div>
      </main>
    </div>
  );
}
