import "./Popup.css";
import Modal from "../Modal/Modal";
import Tabs from "../Tabs/Tabs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAmbassadorData } from "../../store/ambassadorDataSlice";

function Popup({ isOpen, onClose, id }) {
  const dispatch = useDispatch();
  const ambassadorData = useSelector((state) => state.ambassadorData.data);
  console.log(ambassadorData);

  const user = ambassadorData?.find((item) => item.id === id);

  useEffect(() => {
    dispatch(fetchAmbassadorData());
  }, [dispatch]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="popup__wrapper">
        <div className="popup__info-block">
          <h1 className="popup__info-name">{user.name}</h1>
          <div className="popup__info-status">{user.status.name}</div>
          <span className="popup__info-text">{user.address.country}, {user.address.city}</span>
          <span className="popup__info-text">Дата регистрации: 01.01.2024</span>
        </div>
        <Tabs />
      </div>
    </Modal>
  );
}
export default Popup;
