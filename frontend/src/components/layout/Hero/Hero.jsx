import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./hero.css";
import SearchVehiclesRentContext from "../../../contexts/searchVehiclesRentContext";

export default function Hero({ bg }) {
  const { searchVehiclesRentDetails, setSearchVehiclesRentDetails } =
    React.useContext(SearchVehiclesRentContext);
  const [addressList, setAddressList] = useState([]);
  const [showAddressList, setShowAddressList] = useState(false);

  // Formulaire Value
  const [addressForm, setAddressForm] = useState(
    searchVehiclesRentDetails[0].address
  );
  const [distanceForm, setDistanceForm] = useState(
    searchVehiclesRentDetails[0].distance
  );
  const [passengerForm, setPassengerForm] = useState(
    searchVehiclesRentDetails[0].passenger
  );
  const [date1Form, setDate1Form] = useState(
    searchVehiclesRentDetails[0].date1
  );
  const [date2Form, setDate2Form] = useState(
    searchVehiclesRentDetails[0].date2
  );

  window.addEventListener("click", () => {
    setShowAddressList(false);
  });

  const submitSearchRent = () => {
    const newArr = {
      address: addressForm,
      distance: distanceForm,
      passenger: passengerForm,
      date1: date1Form,
      date2: date2Form,
    };

    setSearchVehiclesRentDetails([newArr]);
  };

  const hundleChangeDate1 = (e) => {
    document.getElementById("date2").min = e.target.value;
    setDate1Form(e.target.value);
    setDate2Form(e.target.value);
  };

  const hundleChangeDate2 = (e) => {
    setDate2Form(e.target.value);
  };

  const hundleChangeDistance = (e) => {
    setDistanceForm(e.target.value);
  };

  const hundleChangePassenger = (e) => {
    setPassengerForm(e.target.value);
  };

  const hundleClickAddressList = (e) => {
    setAddressForm(e.target.innerText);
    setShowAddressList(false);
  };

  const hundleChangeAddress = (e) => {
    setShowAddressList(true);
    setAddressForm(e.target.value);
    axios
      .get(
        `https://api-adresse.data.gouv.fr/search/?q=${e.target.value}&autocomplete=1`
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setAddressList(data.features);
      });
  };
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="hero flex items-center justify-center flex-col"
    >
      <h2>Find best green rental car</h2>

      <div className="card">
        <div className="card-head">Find the best vehicles for your needs</div>
        <div className="card-body">
          <form
            id="searchVehicles"
            method="post"
            action=""
            className="formSearch"
          >
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={addressForm}
                onChange={hundleChangeAddress}
              />
              {showAddressList ? (
                <div className="addressList">
                  <ul>
                    {addressList.map((e) => (
                      <li
                        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                        role="button"
                        tabIndex={0}
                        key={e.properties.label}
                        onClick={hundleClickAddressList}
                        onKeyDown={hundleClickAddressList}
                      >
                        {e.properties.label}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
            <div className="form-group-inline">
              <div>
                <label htmlFor="distance">Distance</label>
                <input
                  type="number"
                  id="distance"
                  name="distance"
                  placeholder="100 km"
                  onChange={hundleChangeDistance}
                  value={distanceForm}
                />
              </div>
              <div>
                <label htmlFor="passenger">Passenger</label>
                <input
                  type="number"
                  id="passenger"
                  name="passenger"
                  placeholder="2"
                  onChange={hundleChangePassenger}
                  value={passengerForm}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="date">Pick Up Date</label>
              <input
                value={date1Form}
                type="datetime-local"
                id="date"
                onChange={hundleChangeDate1}
                name="date"
                min="2023-01-12"
                placeholder="dd/mm/yy"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date2">Resume Date</label>
              <input
                value={date2Form}
                type="datetime-local"
                id="date2"
                onChange={hundleChangeDate2}
                name="date2"
                min="2023-01-23"
                placeholder="dd/mm/yy"
              />
            </div>
          </form>
        </div>
        <div className="card-footer">
          <Link to="/vehicles">
            <div
              id="findCar"
              role="button"
              tabIndex={0}
              onClick={submitSearchRent}
              onKeyDown={submitSearchRent}
              className="btn btn-green"
            >
              Find Car
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
