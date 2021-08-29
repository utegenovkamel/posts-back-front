import React from 'react';
import { Modal } from 'components/Modal';

const RegistrationFormModal = () => {
  return <Modal isOpen={isOpenModal} onClose={closeModal}></Modal>;
};

export default RegistrationFormModal;
