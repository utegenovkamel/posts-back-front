import React from 'react'
import Input from 'components/Input'

const InputField = ({ name, register, error, ...rest }) => (
  <Input {...register(name)} error={error} {...rest} />
)

export default InputField
