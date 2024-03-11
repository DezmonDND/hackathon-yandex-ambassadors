import "./Popup.css";
import Modal from "../Modal/Modal";
import Tabs from "../Tabs/Tabs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAmbassadorData } from "../../store/ambassadorDataSlice";

function Popup({ isOpen, onClose, id }) {
  const dispatch = useDispatch();
  const ambassadorData = useSelector((state) => state.ambassadorData.data);

  const user = ambassadorData?.find((item) => item.id === id);
  const date = user.created.slice(0, 10).replace(/-/g, '.');

  useEffect(() => {
    dispatch(fetchAmbassadorData());
  }, [dispatch]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="popup__wrapper">
        <div className="popup__info-block">
          <h1 className="popup__info-name">{user ? user.name : "Иванов Иван Иванович"}</h1>
          <div
            className={`popup__info-status
              ${user.status.name === "уточняется" ? "popup__info-status_specify" :
                user.status.name === "не амбассадор" ? "popup__info-status_notAmbassador" :
                user.status.name === "на паузе" ? "popup__info-status_pause" : "popup__info-status"
            }`}
          >
            {user ? user.status.name : "активный"}
          </div>
          <span className="popup__info-text">{user ? `${user.address.country}, ${user.address.city}` : "Россия, Москва"}</span>
          <span className="popup__info-text">{user ? `Дата регистрации: ${date}` : "Дата регистрации: 01.01.2024"}</span>
        </div>
        <Tabs />
      </div>
    </Modal>
  );
}
export default Popup;
