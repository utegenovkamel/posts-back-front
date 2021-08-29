import React from 'react';
import { Container } from './styles';
import LoginForm from 'containers/LoginForm';
import { useModal } from 'hooks';
import RegistrationFormModal from 'containers/RegistrationFormModal';

const LoginPage = () => {
  const [
    isOpenRegistrationFormModal,
    openRegistrationFormModal,
    closeRegistrationFormModal,
  ] = useModal();

  return (
    <Container>
      <LoginForm onRegistration={openRegistrationFormModal} />
      <RegistrationFormModal
        isOpen={isOpenRegistrationFormModal}
        onClose={closeRegistrationFormModal}
      />
    </Container>
  );
};

export default LoginPage;
