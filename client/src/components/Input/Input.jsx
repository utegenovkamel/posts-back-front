import React from 'react';
import { Container, InputField, Error, Label } from './styles';

export const Input = ({
  value,
  placeholder,
  name,
  type,
  error,
  label,
  ...rest
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputField
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        id={name}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
