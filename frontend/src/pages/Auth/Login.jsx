import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import logo from "@assets/images/logov2.svg";
import hide from "@assets/images/hide.svg";
import show from "@assets/images/show.svg";
import backArrow from "@assets/images/backArrow.svg";

import "@components/Auth/Login.css";

export default function Logo() {
  const [isShown, setIsShown] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const [loginObject, setLoginObject] = useState({
    email: "",
    password: "",
  });

  // function to login every change from the form in the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginObject({ ...loginObject, [name]: value });
  };

  // function to send the form value to backend
  const handleSubmit = (e) => {
    setIsSubmitClicked(false);
    e.preventDefault();
    console.warn(loginObject);
    // add what is needed to send the state loginObject as a mail.
  };

  useEffect(() => {
    setTimeout(setIsSubmitClicked(true), "500");
  }, [handleSubmit]);

  return (
    <main className="login-main">
      <Link to="/" className="back-arrow">
        <img src={backArrow} alt="previous page" />
      </Link>
      <section className="login-section">
        <img src={logo} alt="" />
        <h1>Connect your account</h1>
        <form
          className="login-form"
          action=""
          method="post"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            <input
              type={isShown ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password*"
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
          <button
            type="submit"
            className={isSubmitClicked ? "buttonClicked" : ""}
          >
            Connexion
          </button>
        </form>
        <p>Forgotten Password</p>
        <p />
        <Link to="/register" className="link-register">
          <button type="button">Make an account</button>
        </Link>
      </section>
      <div className="bg-img-login" />
    </main>
  );
}
