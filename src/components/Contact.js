import { useState } from "react";

export const Contact = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFirstName = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastName = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmail = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  return (
    <div className="contact-section">
      <h1 className="projects-title">Contact</h1>

      <div className="form-container">
        <form className="register-form">
          {/* Uncomment the next line to show the success message */}
          {/* <div className="success-message">Success! Thank you for registering</div> */}
          <input
            onChange={handleFirstName}
            value={values.firstName}
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          {/* Uncomment the next line to show the error message */}
          {/* <span id="first-name-error">Please enter a first name</span> */}
          <input
            onChange={handleLastName}
            value={values.lastName}
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          {/* Uncomment the next line to show the error message */}
          {/* <span id="last-name-error">Please enter a last name</span> */}
          <input
            onChange={handleEmail}
            value={values.email}
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          {/* Uncomment the next line to show the error message */}
          {/* <span id="email-error">Please enter an email address</span> */}
          <button className="form-field" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
