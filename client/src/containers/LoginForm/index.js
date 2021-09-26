import React, { useContext, useState } from 'react'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router'
import { connector, setToken } from 'helpers'
import { StateContext } from 'context'
import { Button, Input } from 'components'
import Form from 'containers/Form'
import { FormContainer, Line } from './styles'

const validationSchema = yup.object().shape({
  Username: yup.string(),
  Password: yup.string(),
})

const LoginForm = ({ onRegistration }) => {
  const history = useHistory()
  const { setLoading } = useContext(StateContext)

  const login = async (formData) => {
    setLoading(true)
    const { data, status } = await connector.post('auth/login', formData)

    if (status === 401) toast.error('Incorrect username or password')
    if (status === 200) {
      setToken(data.jwt)
      history.push('/all-posts')
    }

    setLoading(false)
  }

  return (
    <FormContainer>
      <Form onSubmit={login} validationSchema={validationSchema}>
        <Input name="Username" />
        <Input name="Password" type="password" />
        <Button type="submit" color="green" fullWidth>
          Login
        </Button>
      </Form>
      <Line />
      <Button fullWidth onClick={onRegistration}>
        Registration
      </Button>
    </FormContainer>
  )
}

export default LoginForm
