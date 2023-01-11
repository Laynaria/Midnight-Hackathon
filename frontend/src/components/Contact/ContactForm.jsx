export default function ContactForm() {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="mx-auto"
      action=""
      method="post"
      onSubmit={(e) => handleClick(e)}
    >
      <label htmlFor="firstname">
        <input type="text" id="firstname" placeholder="Firstname" />
      </label>
      <label htmlFor="lastname">
        <input type="text" id="lastname" placeholder="Lastname" />
      </label>
      <label htmlFor="email">
        <input type="email" id="email" placeholder="Email" />
      </label>
      <label htmlFor="phone">
        <input type="tel" id="phone" placeholder="Phone" />
      </label>
      <label htmlFor="zipcode">
        <input type="text" id="zipcode" placeholder="Zipcode" />
      </label>
      <label htmlFor="object">
        <input type="text" id="object" placeholder="Object" />
      </label>
      <label htmlFor="textarea">
        <textarea
          id="textarea"
          rows="10"
          maxLength="500"
          wrap
          placeholder="Your Message"
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
