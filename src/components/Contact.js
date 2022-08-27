import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const [showMessage, setShowMessage] = useState(false);

  const form = useRef();

  const handleFirstName = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastName = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmail = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleMessage = (event) => {
    setValues({ ...values, message: event.target.value });
  };

  useEffect(() => {
    if (showMessage) {
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  }, [showMessage]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.firstName && values.lastName && values.message && values.email) {
      setValid(true);
      emailjs
        .sendForm(
          "service_pclhf2q",
          "template_31e3u1p",
          form.current,
          "fdtdYXCzr9PuG-P_x"
        )
        .then(
          (result) => {
            setShowMessage(true);
          },
          (error) => {
            console.log(error.text);
            setShowMessage(true);
          }
        );
    }
    setSubmitted(true);
  };

  return (
    <div className="contact-section" id="contact">
      <h1 className="projects-title">Contact</h1>
      <h2>Say hello!</h2>

      <div className="form-container">
        <form ref={form} className="register-form" onSubmit={handleSubmit}>
          {showMessage && valid ? (
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
          {submitted && !values.firstName && !showMessage ? (
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
          {submitted && !values.lastName && !showMessage ? (
            <span id="last-name-error">Please enter a last name</span>
          ) : null}

          <input
            onChange={handleEmail}
            value={values.email}
            id="email"
            className="form-field"
            type="email"
            placeholder="Email"
            name="email"
          />

          {submitted && !values.email && !showMessage ? (
            <span id="email-error">Please enter an email address</span>
          ) : null}

          <input
            onChange={handleMessage}
            value={values.message}
            id="message"
            className="form-field"
            type="text"
            placeholder="Your Message"
            name="message"
          />
          {submitted && !values.message && !showMessage ? (
            <span id="message-error">Please enter a message</span>
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
