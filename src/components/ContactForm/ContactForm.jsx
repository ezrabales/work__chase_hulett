import "./ContactForm.css";

const ContactForm = ({
  contactOpen,
  title,
  values,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className={`contact ${contactOpen ? "contact-is-visable" : ""}`}>
      <div className="contact__background">
        <div className="contact__container">
          <h1 className="contact__title">{title}</h1>
          <form onSubmit={handleSubmit} className="contact__form">
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
      </div>
    </div>
  );
};
export default ContactForm;
