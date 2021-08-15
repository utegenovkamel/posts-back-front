import React from 'react';
import { useHistory } from 'react-router-dom';
import { login, register } from '../../api';
import useInput from '../../hooks/input.hook';
import { Button, Flex, Input, Label, Text } from '../../ui';
import { emailPattern } from '../../utils/regExp';
import { AuthWrapper } from './styled';

const AuthForm = () => {
  const history = useHistory();
  const email = useInput('');
  const password = useInput('');

  const validation = () => {
    return (
      email.value.match(new RegExp(emailPattern)) && password.value.length > 6
    );
  };

  const handleRegister = async () => {
    if (validation()) {
      return await register({
        Email: email.value,
        Password: password.value,
      });
    } else {
      alert('Некорректный данные при регистрации');
    }
  };

  const handleLogin = async () => {
    if (validation()) {
      await login({
        Email: email.value,
        Password: password.value,
      });
      history.push('/all-posts');
    } else {
      alert('Некорректный данные при входе');
    }
  };

  return (
    <Flex
      flexDirection="column"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <AuthWrapper>
        <Text color="primary" fontSize="35px" strong>
          Posts
        </Text>
        <Flex flexDirection="column" mb="20px">
          <Label htmlFor="email">Enter your Email</Label>
          <Input {...email} id="email" type="email" placeholder="Email..." />
        </Flex>
        <Flex flexDirection="column" mb="20px">
          <Label htmlFor="password">Enter your password</Label>
          <Input
            {...password}
            id="password"
            type="password"
            placeholder="Password..."
          />
        </Flex>
        <Flex justifyContent="space-between">
          <Button onClick={handleRegister} color="primary">
            Register
          </Button>
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
        </Flex>
      </AuthWrapper>
    </Flex>
  );
};

export default AuthForm;
