import React from 'react'
import { Redirect } from 'react-router-dom'
import AuthForm from '../../components/AuthForm'

const LoginPage = () => {
    if (localStorage.getItem('access_token')) {
        return <Redirect to="/all-posts" />
    }
    return <AuthForm />
}

export default LoginPage
