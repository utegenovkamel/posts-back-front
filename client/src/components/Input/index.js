import React from 'react'
import { Container, InputField, Error, Label } from './styles'

const Input = ({
  register,
  placeholder,
  name,
  type = 'text',
  error,
  label,
}) => (
  <Container>
    {label && <Label htmlFor={name}>{label}</Label>}
    <InputField
      type={type}
      placeholder={placeholder || name}
      id={name}
      name={name}
      {...register(name)}
    />
    {error && <Error>{error?.message}</Error>}
  </Container>
)

export default Input
