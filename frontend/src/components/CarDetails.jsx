import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import credicard from "@assets/images/creditcard.png";

export default function CarDetails({
  elem,
  showModals,
  setShowModal,
  searchVehiclesRentDetails,
}) {
  const [vehicleImg, setVehicleImg] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/images/${elem.id}`)
      .then((response) => response.json())
      .then((data) => {
        setVehicleImg(data[0][0].name);
      });
  }, [elem]);
  console.warn(searchVehiclesRentDetails[0]);
  return (
    <>
      <section id="carCardId" className="vehicleDetail">
        <div>
          <img alt="vehicule" src={vehicleImg} />
        </div>
        <div className="vehicleDetailContent">
          <div className="vehicleDetailTitle">
            <div>{elem.brand}</div>
            <div>{elem.model}</div>
          </div>
          <ul>
            <li>
              <FontAwesomeIcon
                className="text-green-600 text-sm mr-2"
                icon={faCheckCircle}
              />{" "}
              Fuel electric
            </li>
            <li>
              <FontAwesomeIcon
                className="text-green-600 text-sm mr-2"
                icon={faCheckCircle}
              />{" "}
              Under 25,000 Km
            </li>
            <li>
              <FontAwesomeIcon
                className="text-green-600 text-sm mr-2"
                icon={faCheckCircle}
              />{" "}
              Transmission Manual
            </li>
            <li>
              <FontAwesomeIcon
                className="text-green-600 text-sm mr-2"
                icon={faCheckCircle}
              />{" "}
              5 Year service included
            </li>
            <li>
              <FontAwesomeIcon
                className="text-green-600 text-sm mr-2"
                icon={faCheckCircle}
              />{" "}
              Manufacturing Year 2014
            </li>
          </ul>
          <div className="vehicleDetailFoot">
            <span className="text-2xl font-bold">95 $ </span>
            <span className="text-sm">/ for 1 day(s)</span>
          </div>
          <Link to="#rentnow">
            <div
              tabIndex={0}
              role="button"
              id="rentnow"
              onClick={setShowModal}
              onKeyDown={setShowModal}
              className="vehicleDetailFoot2"
            >
              <span className="text-2xl font-bold">RENT NOW</span>
            </div>
          </Link>
        </div>
      </section>
      {searchVehiclesRentDetails[0].passenger > 0 &&
      +elem.ideal_places - +searchVehiclesRentDetails[0].passenger >= 1 ? (
        <div className="alertCard">
          <span className="font-bold">Warning:</span> This car does not fit your
          needs. To improve your ecological score, log in to your blablacar
          account.
        </div>
      ) : null}

      {showModals ? (
        <div className="bookingContent">
          <section className="vehicleBooking">
            <div className="headTitle">RENT DETAILS</div>
            <div>
              <form method="post">
                <div className="usagecard">
                  <div>Usage:</div>
                  <input type="radio" name="u" /> Professional
                  <input type="radio" className="ml-5" name="u" /> Personal
                </div>
                <div className="flex forminput">
                  <div className="w-1/2">
                    <input
                      value={searchVehiclesRentDetails[0].date1}
                      type="datetime-local"
                      id="date2"
                      name="date2"
                      min="2023-01-23"
                      placeholder="dd/mm/yy"
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      value={searchVehiclesRentDetails[0].date2}
                      type="datetime-local"
                      id="date2"
                      name="date2"
                      min="2023-01-23"
                      placeholder="dd/mm/yy"
                    />
                  </div>
                </div>
              </form>
            </div>
          </section>
          <section className="vehicleBooking">
            <div className="headTitle">CUSTOMER INFORMATION</div>
            <div>
              <form method="post">
                <div>
                  <input type="radio" name="c" /> Mr
                  <input type="radio" className="ml-5" name="c" /> Ms
                </div>
                <div className="flex forminput">
                  <div className="w-1/2">
                    <input type="text" name="name" placeholder="Full Name" />
                  </div>
                  <div className="w-1/2">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="flex forminput">
                  <div className="w-1/2">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      type="text"
                      name="ceilphone"
                      placeholder="Ceil Phone Number"
                    />
                  </div>
                </div>
              </form>
            </div>
          </section>

          <section className="vehicleBooking">
            <div className="headTitle">PAYMENTS OPTIONS</div>
            <div>
              <div className="payementoption flex">
                <div>
                  <input
                    type="radio"
                    className="mr-5"
                    name="payement"
                    id="payement"
                  />{" "}
                  Direct Bank Transfer
                </div>
                <div />
              </div>
              <div className="payementoption flex justify-between">
                <div>
                  <input
                    type="radio"
                    className="mr-5"
                    name="payement"
                    id="payement"
                  />{" "}
                  Credit Card
                </div>
                <div>
                  <img className="w-20" src={credicard} alt="credit" />
                </div>
              </div>
              <div className="payementoption flex">
                <div>
                  <input
                    type="radio"
                    className="mr-5"
                    name="payement"
                    id="payement"
                  />{" "}
                  PayPal
                </div>
                <div />
              </div>
            </div>
          </section>
          <section className="checkPayement">
            <Link to="/profile">
              <button type="button" className="btn btn-green text-white mt-10">
                RESERVATION NOW
              </button>
            </Link>
          </section>
        </div>
      ) : null}
    </>
  );
}
