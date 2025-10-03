import "./ContactFormContainer.css";
import ContactForm from "../ContactForm/ContactForm";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const ContactFormContainer = ({ source }) => {
  const onContact = (contactInfo) => {
    console.log("TODO", contactInfo);
  };
  const [contactFormIsOpen, setContactFormIsOpen] = useState(false);
  const { values, handleChange } = useForm({
    source: "videography",
    name: "",
    email: "",
    message: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    onContact({
      source: source,
      name: values.name,
      email: values.email,
      message: values.message,
    });
  }
  return (
    <div className="contact-container">
      <h1 className="contact-container_title">Let's get Started!</h1>
      <button onClick={setContactFormIsOpen} className="contact-container_btn">
        Contact me
      </button>
      <ContactForm
        contactOpen={contactFormIsOpen}
        title="Contact me"
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
export default ContactFormContainer;
