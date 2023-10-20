import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      const modalRoot = document.getElementById("modal-root");
      const modalElement = document.createElement("div");

      modalRoot.appendChild(modalElement);

      const handleOutsideClick = (event) => {
        if (event.target.classList.contains("modal")) {
          onClose();
        }
      };

      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        modalRoot.removeChild(modalElement);
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
