import React, { useState } from 'react'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { connector } from 'helpers'
import { Modal, Button, Input } from 'components'
import Form from 'containers/Form'
import FullPageLoading from 'containers/FullPageLoading'
import { Container } from './styles'

const validationSchema = yup.object().shape({
  Username: yup.string().required(),
  Firstname: yup.string().required(),
  Lastname: yup.string().required(),
  Email: yup.string().required().email(),
  Password: yup.string().required().min(8),
  PasswordConfirmation: yup
    .string()
    .oneOf([yup.ref('Password'), null], 'Passwords must match'),
})

const RegistrationFormModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false)

  const registration = async (formData) => {
    setLoading(true)
    const { status } = await connector.post('auth/registration', formData)

    if (status === 409) toast.error('User already exists')
    if (status === 200) {
      toast.success('User has been created')
      onClose()
    }

    setLoading(false)
  }

  return (
    <Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Header>Registration</Modal.Header>
        <Form onSubmit={registration} validationSchema={validationSchema}>
          <Input name="Username" />
          <Input name="Firstname" />
          <Input name="Lastname" />
          <Input name="Email" />
          <Input name="Password" type="password" />
          <Input
            name="PasswordConfirmation"
            placeholder="Repeat password"
            type="password"
          />
          <Button type="submit" color="green" fullWidth>
            Registration
          </Button>
        </Form>
      </Modal>
      <FullPageLoading isLoading={loading} />
    </Container>
  )
}

export default RegistrationFormModal
