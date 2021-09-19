import React, { useState } from 'react'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router'
import { connector, setToken } from 'helpers'
import Button from 'components/Button'
import InputField from 'containers/InputField'
import Form from 'containers/Form'
import FullPageLoading from 'containers/FullPageLoading'
import { FormContainer, Line } from './styles'

const validationSchema = yup.object().shape({
  Username: yup.string().required(),
  Password: yup.string().required(),
})

const LoginForm = ({ onRegistration }) => {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

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
        <InputField name="Username" />
        <InputField name="Password" type="password" />
        <Button type="submit">Login</Button>
      </Form>
      <Line />
      <Button color="green" onClick={onRegistration}>
        Registration
      </Button>
      <FullPageLoading isLoading={loading} />
    </FormContainer>
  )
}

export default LoginForm
