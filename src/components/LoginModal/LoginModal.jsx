import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const LoginModal = ({ isOpen, onLogin, onCloseModal, setRegisterOpen }) => {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email: values.email, password: values.password });
  }
  function handleRegisterClick(e) {
    e.preventDefault();
    onCloseModal();
    setRegisterOpen(true);
  }
  return (
    <ModalWithForm
      title={"Admin sign in"}
      formOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      buttonText="Sign in"
      extraButton={
        <button className="form__button_extra" onClick={handleRegisterClick}>
          or Sign up
        </button>
      }
    >
      <label className="form__label_text">
        Email
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="form__input_text"
          onChange={handleChange}
          value={values.email}
        />
      </label>
      <label className="form__label_text">
        Password
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="form__input_text"
          onChange={handleChange}
          value={values.password}
        />
      </label>
    </ModalWithForm>
  );
};
export default LoginModal;
