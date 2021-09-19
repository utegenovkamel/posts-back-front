import React from 'react'
import PropTypes from 'prop-types'
import theme from 'theme'
import { Styled } from './styles'

const propTypes = {
  color: PropTypes.oneOf(['main', 'green']),
}

const Button = ({ children, color = 'main', ...rest }) => (
  <Styled color={theme[color]} {...rest}>
    {children}
  </Styled>
)

Button.propTypes = propTypes

export default Button
