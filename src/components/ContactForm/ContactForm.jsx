import { useState } from "react";
import "./ContactForm.css";

const ContactForm = ({
  contactOpen,
  title,
  values,
  handleChange,
  handleSubmit,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  function handleSubmitForm(e) {
    setSubmitted(true);
    console.log(e);
    setName(e.target[0].value);
    handleSubmit(e);
  }
  return (
    <div className={`contact ${contactOpen ? "contact-is-visable" : ""}`}>
      <div
        className={
          submitted
            ? `contact__background contact__background_submitted`
            : "contact__background"
        }
      >
        {submitted ? (
          <div className="contact__container_submitted">
            <h2 className="contact__submitted__title">
              {name ? `Thank you ${name}!` : "Thank you!"}
            </h2>
            <h3 className="contact__submitted__text">
              You're message has been received!
            </h3>
          </div>
        ) : (
          <div className="contact__container">
            <h1 className="contact__title">{title}</h1>
            <form onSubmit={handleSubmitForm} className="contact__form">
              <label className="contact__label_text">
                Name
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="contact__input_text"
                  onChange={handleChange}
                  value={values.name}
                />
              </label>
              <label className="contact__label_text">
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="contact__input_text"
                  onChange={handleChange}
                  value={values.email}
                />
              </label>
              <label className="contact__label_areatext">
                Message
                <textarea
                  name="message"
                  type="text"
                  placeholder="Message"
                  className="contact__textarea"
                  onChange={handleChange}
                  value={values.message}
                />
              </label>
              <button type="submit" className="contact__submit-btn">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default ContactForm;
