import React from 'react';
import '../styles/About.css'; 

const Modal = ({ show, onClose, member }) => {
  if (!show) {
    return null;
  }
 
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <h2>{member.name}</h2>
        <p>{member.role}</p>
        <img src={member.image} alt={member.name} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
