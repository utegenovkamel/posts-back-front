import React from 'react'
import { StyledButton } from './styles'

export const Button = ({ children, inverted = false, ...rest }) => {
  return (
    <StyledButton inverted={inverted} {...rest}>
      {children}
    </StyledButton>
  )
}
