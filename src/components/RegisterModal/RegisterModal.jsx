import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const RegisterModal = ({ isOpen, onRegister, onCloseModal, setLoginOpen }) => {
  const { values, handleChange } = useForm({
    key: "",
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    onRegister({
      key: values.key,
      email: values.email,
      password: values.password,
    });
  }
  function handleRegisterClick(e) {
    e.preventDefault();
    onCloseModal();
    setLoginOpen(true);
  }
  return (
    <ModalWithForm
      title={"Admin register"}
      formOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      buttonText="Register"
      extraButton={
        <button className="form__button_extra" onClick={handleRegisterClick}>
          or Sign in
        </button>
      }
    >
      <label className="form__label_text">
        Key
        <input
          name="key"
          type="text"
          placeholder="Key"
          className="form__input_text"
          onChange={handleChange}
          value={values.key}
        />
      </label>
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
export default RegisterModal;
