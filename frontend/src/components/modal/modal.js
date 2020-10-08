import React, { Fragment } from "react";
import "./modal.scss";

const Modal = ({ children, open, onClose }) => {
  const transform = open ? "translateY(0%)" : "translateY(-100%)";
  return (
    <Fragment>
      {open && <div className="backdrop" onClick={onClose}></div>}
      <div className="modal-wrapper" style={{ transform }}>
        <div className="modal-cnt">{children}</div>
      </div>
    </Fragment>
  );
};

export default Modal;
