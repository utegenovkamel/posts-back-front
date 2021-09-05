import React, { useState } from 'react';
import { connector } from 'helpers';
import { Modal } from 'components/Modal';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import Form from 'containers/Form';
import InputField from 'containers/InputField';
import * as yup from 'yup';
import { Container } from './styles';

const validationSchema = yup.object().shape({
  Title: yup.string().required(),
  Description: yup.string().required(),
});

const CreatePostFormModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  const registration = async (data) => {
    setLoading(true);
    const { status } = await connector.post('auth/login', data);
    setLoading(false);
  };

  return (
    <Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Text as="h3">Registration</Text>
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
    </Container>
  );
};

export default CreatePostFormModal;
