import "./ModalWithForm.css";
import Modal from "../Modal/Modal";

function ModalWithForm({
  children,
  title,
  name,
  buttonText,
  onClose,
  onSubmit,
  formOpen,
  extraButton = "",
}) {
  return (
    <Modal formOpen={formOpen} onClose={onClose}>
      <button className="form__close" onClick={onClose} />
      <h2 className="form__title">{title}</h2>
      <form name={name} onSubmit={onSubmit} className="form__form">
        {children}
        <button type="submit" className="form__submit">
          {buttonText}
        </button>
        {extraButton}
      </form>
    </Modal>
  );
}

export default ModalWithForm;
