import "./Modal.css";
import useModalClose from "../../hooks/useModalClose";

const Modal = ({ children, formOpen, onClose }) => {
  useModalClose(formOpen, onClose);
  return (
    <div className={`modal form  ${formOpen ? "form-is-open" : ""}`}>
      <div className="form__container">{children}</div>
    </div>
  );
};

export default Modal;
