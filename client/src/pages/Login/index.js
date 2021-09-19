import LoginForm from 'containers/LoginForm'
import RegistrationFormModal from 'containers/RegistrationFormModal'
import { useModal } from 'hooks'
import React from 'react'
import { Container } from './styles'

const Login = () => {
  const [
    isOpenRegistrationFormModal,
    openRegistrationFormModal,
    closeRegistrationFormModal,
  ] = useModal()

  return (
    <Container>
      <LoginForm onRegistration={openRegistrationFormModal} />
      <RegistrationFormModal
        isOpen={isOpenRegistrationFormModal}
        onClose={closeRegistrationFormModal}
      />
    </Container>
  )
}

export default Login
