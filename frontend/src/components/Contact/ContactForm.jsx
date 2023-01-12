import { useState } from "react";
import Notify from "@utils/Notification";
import ContactService from "@services/ContactService";

export default function ContactForm() {
  // state to store the values from the form
  const [contactObject, setContactObject] = useState({
    firstname: "",
    lastname: "",
    mail: "",
    phone: "",
    zipcode: "",
    obj: "",
    msg: "",
  });

  // function to register every change from the form in the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactObject({ ...contactObject, [name]: value });
  };

  // function to send the form values as a mail
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      contactObject.firstname === "" ||
      contactObject.lastname === "" ||
      contactObject.mail === "" ||
      contactObject.phone === "" ||
      contactObject.zipcode === "" ||
      contactObject.obj === "" ||
      contactObject.msg === ""
    ) {
      Notify.error("Please fill in all the fields");
      return;
    }

    ContactService.send(contactObject).then(() => {
      Notify.success("Your message has been sent");
    })
  };

  return (
    <form
      className="mx-auto"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label htmlFor="firstname">
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Firstname"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="lastname">
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Lastname"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="mail">
        <input
          type="email"
          id="mail"
          name="mail"
          placeholder="Email"
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
      <label htmlFor="zipcode">
        <input
          type="text"
          id="zipcode"
          name="zipcode"
          placeholder="Zipcode"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="obj">
        <input
          type="text"
          id="obj"
          name="obj"
          placeholder="Object"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="msg">
        <textarea
          id="msg"
          name="msg"
          rows="10"
          maxLength="250"
          wrap
          placeholder="Your Message"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
