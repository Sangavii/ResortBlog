import { useState } from "react";
const ContactForm = () => {
  const [formStatus, setFormStatus] = useState("Send");
  const [submitted, setSubmitted] = useState(false);
  const [color, setColor] = useState("Red");

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("You have Successfully Submitted..!");
    setColor("green");
    setSubmitted(true);
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value
    };
    console.log(conFom);
  };
  return (
    <div className="container mt-5" style={{ marginBottom: "10px" }}>
      <h2 className="mb-3">Pre Book your Bookings</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            No. of Persons
          </label>
          <input className="form-control" id="message" required />
        </div>
        <div>
          <button
            className={`${
              submitted === true ? "btn btn-success" : "btn btn-danger"
            }`}
            type="submit"
          >
            {formStatus}
          </button>
        </div>
      </form>
      <address style={{ marginTop: "10px" }}>
        <h4>Visit us at:</h4>
        11/8, Ram Nagar,
        <br />
        1st street,
        <br />
        Tiruppur
      </address>
    </div>
  );
};
export default ContactForm;
