import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Button } from 'components/Button';
import InputField from 'containers/InputField';
import Form from 'containers/Form';
import { Container, FormContainer, Line } from './styles';
import { connector } from 'helpers';
import LoginForm from 'containers/LoginForm';

const validationSchema = yup.object().shape({
  Username: yup.string().required(),
  Password: yup.string().required().min(8),
});

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => console.log(data);

  const login = async () => {
    const { data, status } = await connector.post('auth/login');
    console.log('data', data);
  };

  return <Container>LoginForm</Container>;
};

export default LoginPage;
