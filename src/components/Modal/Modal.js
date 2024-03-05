import { useEffect, useRef } from 'react';
import "./Modal.css";

function Modal({ isOpen, onClose, children }) {
  const overlayRef = useRef(null);

  function closePopup(evt) {
    if (evt.target === evt.currentTarget && isOpen) {
      onClose();
    }
  }

  useEffect(() => {
    const el = overlayRef.current;
    if (el) {
      el.addEventListener('click', closePopup);
    }
    return () => {
      if (el) {
        el.removeEventListener('click', closePopup);
      }
    };
  });

  return (
    <div
      // className={`modalOverlay ${isOpen ? "modalOverlay_isOpened" : ''}`}
      className={`modalOverlay modalOverlay_isOpened`}
      ref={overlayRef}
    >
      <div className="modal">
        <button className="modal__button"
          type="button"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
}
export default Modal;
