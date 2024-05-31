// src/Modal.js
import React from "react";

const Modal = ({ show, handleClose }) => {
  return (
    show && (
      <div className="modal-overlay fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div className="modal bg-white p-6 rounded-md text-center relative">
          <h2>Welcome</h2>
          <p>This is a simple modal popup.</p>
          <button
            onClick={handleClose}
            className="bg-red-400 rounded-md top-2 right-2 absolute px-3"
          >
            Cancel
          </button>
        </div>
      </div>
    )
  );
};

export default Modal;
