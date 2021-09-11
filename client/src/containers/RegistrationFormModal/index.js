import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { connector } from 'helpers';
import { Modal } from 'components/Modal';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import Form from 'containers/Form';
import InputField from 'containers/InputField';
import FullPageLoading from 'containers/FullPageLoading';
import { Container } from './styles';

const validationSchema = yup.object().shape({
  Username: yup.string().required(),
  Firstname: yup.string().required(),
  Lastname: yup.string().required(),
  Email: yup.string().required().email(),
  Password: yup.string().required().min(8),
  PasswordConfirmation: yup
    .string()
    .oneOf([yup.ref('Password'), null], 'Passwords must match'),
});

const RegistrationFormModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  const registration = async (formData) => {
    setLoading(true);
    const { status } = await connector.post('auth/registration', formData);

    if (status === 409) toast.error('User already exists');
    if (status === 200) {
      toast.success('User has been created');
      onClose();
    }

    setLoading(false);
  };

  return (
    <Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Header>Registration</Modal.Header>
        <Form onSubmit={registration} validationSchema={validationSchema}>
          <InputField name="Username" />
          <InputField name="Firstname" />
          <InputField name="Lastname" />
          <InputField name="Email" />
          <InputField name="Password" type="password" />
          <InputField
            name="PasswordConfirmation"
            placeholder="Repeat password"
            type="password"
          />
          <Button type="submit" style="green">
            Registration
          </Button>
        </Form>
      </Modal>
      <FullPageLoading isLoading={loading} />
    </Container>
  );
};

export default RegistrationFormModal;
