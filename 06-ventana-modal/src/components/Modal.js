import React from "react";
import "./Modal.css";

const Modal = ({children, isOpen, closeModal}) => {
  //handle para evitar propagacion de eventos (al hacer click en el modal, no se cierra)
  const handleModalContainerClick = (e) => e.stopPropagation()
  return (
    <article className={isOpen ? "modal is-open" : "modal"} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
          <button class="modal-close" onClick={closeModal}>X</button>
          {children}
      </div>
    </article>
  );
};

export default Modal;
