import React from 'react';

const Modal = ({
  title = 'Modal title',
  description = '...',
  setIsShowModal,
}) => {
  function handleClose() {
    setIsShowModal(false);
  }

  return (
    <div className="modal fade show d-block">
      <div className="modal-dialog z-3">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">{title}</h1>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">{description}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal-overlay w-100 h-100 position-absolute top-0 left-0 z-2"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        onClick={handleClose}
      ></div>
    </div>
  );
};

export default Modal;
