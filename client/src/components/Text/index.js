import React from 'react'
import { StyledText } from './styles'

const Text = ({ children, as, ...rest }) => (
  <StyledText as={as} {...rest}>
    {children}
  </StyledText>
)

export default Text
