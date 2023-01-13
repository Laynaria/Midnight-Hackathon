import { useEffect, useState } from "react";

// import AuthService from "@services/AuthService";
import Notify from "@utils/Notification";

import hide from "@assets/images/hide.svg";
import show from "@assets/images/show.svg";
import leaf from "@assets/img/leaf.svg";

export default function ContactForm() {
  const [isShown, setIsShown] = useState(false);
  const [error, setError] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isPasswordButtonClicked, setIsPasswordButtonClicked] = useState(false);

  const [registerObject, setRegisterObject] = useState({
    firstname: "",
    lastname: "",
    mail: "",
    phone: "",
    cellphone: "",
    address: "",
    additionalAddress: "",
    postalCode: "",
    city: "",
  });

  // function to register every change from the form in the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterObject({ ...registerObject, [name]: value });
  };

  // function to send the form value to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(false);

    if (
      registerObject.firstname === "" ||
      registerObject.lastname === "" ||
      registerObject.mail === "" ||
      registerObject.cellphone === "" ||
      registerObject.address === "" ||
      registerObject.postalCode === "" ||
      registerObject.city === ""
    ) {
      Notify.error("Please fill all the required fields");
      setError(true);
      //   return;
    }

    // AuthService.register(registerObject).then(() => {
    //   Notify.success("Account info updated successfully");
    // });
  };

  useEffect(() => {
    setTimeout(setIsClicked(true), "500");
  }, [handleSubmit]);

  // Password part
  const [updatePassword, setUpdatePassword] = useState({
    password: "",
    confirm_password: "",
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setUpdatePassword({ ...updatePassword, [name]: value });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setIsPasswordButtonClicked(false);

    if (updatePassword.password !== updatePassword.confirm_password) {
      Notify.error("Passwords do not match");
      setError(true);
      //   return;
    }

    // AuthService.register(updatePassword).then(() => {
    //   Notify.success("Password updated successfully");
    // });
  };

  useEffect(() => {
    setTimeout(setIsPasswordButtonClicked(true), "500");
  }, [handlePasswordSubmit]);
  return (
    <>
      <div id="ecoresponsability-note" className="mx-auto">
        <h2>
          Your <span>Green</span> Score
        </h2>
        <img src={leaf} alt="leaf score" />
        <img src={leaf} alt="leaf score" />
        <img src={leaf} alt="leaf score" />
        <img src={leaf} alt="leaf score" />
        <img src={leaf} alt="leaf score" />
      </div>
      <div id="your-recent-travels" className="mx-auto">
        <h2>
          Your <span>Recent</span> Travels:
        </h2>
        <div className="travel">
          <p>Car used : renault zoe</p>
          <p>Travel distance: 43km</p>
          <p>number of people : 2</p>
        </div>

        <div className="travel">
          <p>Car used : mercedes EQE</p>
          <p>Travel distance: 400km</p>
          <p>number of people : 1</p>
        </div>
      </div>
      <form
        className="mx-auto"
        method="update"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="firstname">
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Firstname*"
            className={error ? "error" : ""}
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
        <label htmlFor="mail">
          <input
            type="email"
            id="mail"
            name="mail"
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
        <label htmlFor="additionalAddress">
          <input
            type="text"
            id="additionalAddress"
            name="additionalAddress"
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
        <label htmlFor="postalCode">
          <input
            type="number"
            id="postal_code"
            name="postalCode"
            placeholder="Zipcode*"
            min="0"
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
        <button type="submit" className={isClicked ? "buttonClicked" : ""}>
          Update My Account
        </button>
      </form>

      <form
        className="mx-auto"
        method="update"
        onSubmit={(e) => handlePasswordSubmit(e)}
      >
        <label htmlFor="password">
          <input
            type={isShown ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password*"
            onChange={handlePasswordChange}
          />
        </label>
        <label htmlFor="confirm_password">
          <input
            type={isShown ? "text" : "password"}
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm Password*"
            onChange={handlePasswordChange}
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
          className={isPasswordButtonClicked ? "buttonClicked" : ""}
        >
          Change Password
        </button>
      </form>
      <button type="button" className="disconnect">
        Disconnect
      </button>
    </>
  );
}
