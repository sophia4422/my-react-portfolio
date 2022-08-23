import { useState } from "react";

export const Contact = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handleFirstName = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastName = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmail = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }

    setSubmitted(true);
  };

  return (
    <div className="contact-section">
      <h1 className="projects-title">Contact</h1>

      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted && valid ? (
            <div className="success-message">Thank you for your message!</div>
          ) : null}
          <input
            onChange={handleFirstName}
            value={values.firstName}
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />

          {submitted && !values.firstName ? (
            <span id="first-name-error">Please enter a first name</span>
          ) : null}
          <input
            onChange={handleLastName}
            value={values.lastName}
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />

          {submitted && !values.lastName ? (
            <span id="last-name-error">Please enter a last name</span>
          ) : null}
          <input
            onChange={handleEmail}
            value={values.email}
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />

          {submitted && !values.email ? (
            <span id="email-error">Please enter an email address</span>
          ) : null}
          <button className="form-field" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
