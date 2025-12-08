import "./ContactMeModal.css";
import useModalClose from "../../hooks/useModalClose";
import Modal from "../Modal/Modal";
import { useForm } from "../../hooks/useForm";

const ContactMeModal = ({ isOpen, onCloseModal, onContact }) => {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    message: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    onContact({
      name: values.name,
      email: values.email,
      message: values.message,
    });
  }
  return (
    <Modal formOpen={isOpen} onClose={onCloseModal}>
      <h1 className="contact__title">Contact Ezra Bales</h1>
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
    </Modal>
  );
};
export default ContactMeModal;
