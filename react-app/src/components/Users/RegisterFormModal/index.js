import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import RegisterForm from './RegisterForm';

function RegisterFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="secondary-button" onClick={() => setShowModal(true)}>Register</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <RegisterForm />
        </Modal>
      )}
    </>
  );
}

export default RegisterFormModal;
