import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "@assets/images/logov2.svg";
import hide from "@assets/images/hide.svg";
import show from "@assets/images/show.svg";
import backArrow from "@assets/images/backArrow.svg";

import "@components/Auth/Register.css";

export default function Register() {
  const [isShown, setIsShown] = useState(false);

  const [registerObject, setRegisterObject] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    additional_address: "",
    phone: "",
    cellphone: "",
    zipcode: "",
    city: "",
    password: "",
    confirm_password: "",
  });

  // function to register every change from the form in the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterObject({ ...registerObject, [name]: value });
  };

  // function to send the form value to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(registerObject);
    // add what is needed to send the state registerObject as a mail.
  };
  return (
    <main className="register-main">
      <Link to="/login" className="back-arrow">
        <img src={backArrow} alt="previous page" />
      </Link>
      <section className="register-section">
        <img src={logo} alt="" />
        <h1>Register your account</h1>
        <form
          className="register-form"
          action=""
          method="post"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="firstname">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Firstname*"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="lastname">
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Lastname*"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="address">
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address*"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="additional_address">
            <input
              type="text"
              id="additional_address"
              name="additional_address"
              placeholder="Additional Address Info"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="phone">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="cellphone">
            <input
              type="tel"
              id="cellphone"
              name="cellphone"
              placeholder="Cellphone*"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="zipcode">
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              placeholder="Zipcode*"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="city">
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City*"
              onChange={handleChange}
            />
          </label>{" "}
          <label htmlFor="password">
            <input
              type={isShown ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password*"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="confirm_password">
            <input
              type={isShown ? "text" : "password"}
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm Password*"
              onChange={handleChange}
            />
          </label>
          <p>
            <img
              src={isShown ? hide : show}
              alt={isShown ? "hide password" : "show password"}
              onClick={() => setIsShown(!isShown)}
              aria-hidden="true"
            />
            {isShown ? "Hide Password" : "See Password"}
          </p>
          <button type="submit">Create My Account</button>
        </form>
      </section>
      <div className="bg-img-register" />
    </main>
  );
}
