import "./LogOutConfirmModal.css";
import Modal from "../Modal/Modal";

const LogOutConfirmModal = ({ isOpen, onClose, onConfirmLogOut }) => {
  return (
    <Modal formOpen={isOpen} onClose={onClose}>
      <h3 className="log-out-confirm">Are you sure you want to log out?</h3>
      <div className="log-out-confirm__buttons">
        <button
          className="log-out-confirm__button log-out-confirm__button__logout"
          onClick={onConfirmLogOut}
        >
          Log out
        </button>
        <button className="log-out-confirm__button" onClick={onClose}>
          Stay logged in
        </button>
      </div>
    </Modal>
  );
};

export default LogOutConfirmModal;
