/* eslint-disable */
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const Form = ({
  defaultValues,
  children,
  onSubmit,
  validationSchema,
  resetForm,
}) => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  })
  const { handleSubmit, reset } = methods

  // useEffect(() => {
  //   reset()
  // }, [resetForm])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) =>
        child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                error: methods.formState.errors[child.props.name],
                key: child.props.name,
              },
            })
          : child
      )}
    </form>
  )
}
export default Form
