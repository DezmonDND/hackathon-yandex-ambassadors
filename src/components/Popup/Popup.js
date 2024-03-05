import "./Popup.css";
import Modal from "../Modal/Modal";
import Tabs from "../Tabs/Tabs";

function Popup({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="popup__wrapper">
        <div className="popup__info-block">
          <h1 className="popup__info-name">Иванов Иван Иванович</h1>
          <div className="popup__info-status">активный</div>
          <span className="popup__info-text">Россия, Москва</span>
          <span className="popup__info-text">Дата регистрации: 01.01.2024</span>
        </div>
        <Tabs />
      </div>
    </Modal>
  );
}
export default Popup;
