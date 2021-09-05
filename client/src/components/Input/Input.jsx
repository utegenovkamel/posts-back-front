import React from 'react';
import { Container, InputField, Error, Label } from './styles';

export const Input = ({
  value,
  placeholder,
  name,
  type = 'text',
  error,
  label,
  ...rest
}) => {
  return (
    <Container>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputField
        type={type}
        name={name}
        placeholder={placeholder || name}
        value={value}
        id={name}
        {...rest}
      />
      {error && <Error>{error?.message}</Error>}
    </Container>
  );
};
