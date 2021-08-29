import React, { useState } from 'react';
import * as yup from 'yup';
import { Button } from 'components/Button';
import InputField from 'containers/InputField';
import Form from 'containers/Form';
import { FormContainer, Line } from './styles';
import { connector } from 'helpers';

const validationSchema = yup.object().shape({
  Username: yup.string().required(),
  Password: yup.string().required().min(8),
});

const LoginForm = ({ onRegistration }) => {
  const [loading, setLoading] = useState(false);

  const login = async (data) => {
    setLoading(true);
    const { status } = await connector.post('auth/login', data);
    setLoading(false);
  };

  return (
    <FormContainer>
      <Form onSubmit={login} validationSchema={validationSchema}>
        <InputField name="Username" />
        <InputField name="Password" type="password" />
        <Button type="submit" style="main">
          Login
        </Button>
      </Form>
      <Line />
      <Button style="green" onClick={() => onRegistration()}>
        Registration
      </Button>
    </FormContainer>
  );
};

export default LoginForm;
