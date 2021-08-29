import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Form = ({ defaultValues, children, onSubmit, validationSchema }) => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                errors: methods.formState.errors[child.props.name],
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
};
export default Form;
