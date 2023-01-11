import { useState } from "react";

export default function ContactForm() {
  // state to store the values from the form
  const [contactObject, setContactObject] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    zipcode: "",
    object: "",
    message: "",
  });

  // function to register every change from the form in the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactObject({ ...contactObject, [name]: value });
  };

  // function to send the form values as a mail
  const handleSubmit = (e) => {
    e.preventDefault();
    // add what is needed to send the state contactObject as a mail.
  };

  return (
    <form
      className="mx-auto"
      action=""
      method="post"
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
      <label htmlFor="email">
        <input
          type="email"
          id="email"
          name="email"
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
      <label htmlFor="object">
        <input
          type="text"
          id="object"
          name="object"
          placeholder="Object"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows="10"
          maxLength="500"
          wrap
          placeholder="Your Message"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
