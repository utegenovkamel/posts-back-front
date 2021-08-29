import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Button } from 'components/Button';
import InputField from 'containers/InputField';
import Form from 'containers/Form';
import { Container, FormContainer, Line } from './styles';
import { connector } from 'helpers';

const validationSchema = yup.object().shape({
  Username: yup.string().required(),
  Password: yup.string().required().min(8),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    const { data, status } = await connector.post('auth/login', data);
    setLoading(false);
  };

  return (
    <FormContainer>
      <Form onSubmit={onSubmit} validationSchema={validationSchema}>
        <InputField name="Username" />
        <InputField name="Password" type="password" />
        <Button type="submit" style="main">
          Login
        </Button>
      </Form>
      <Line />
      <Button style="green">Registration</Button>
    </FormContainer>
  );
};

export default LoginForm;
