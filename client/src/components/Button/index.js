import React from 'react'
import PropTypes from 'prop-types'
import { Styled } from './styles'

const propTypes = {
  color: PropTypes.oneOf(['main', 'green', 'grey']),
}

const Button = ({ color = 'main', fullWidth = false, children, ...rest }) => (
  <Styled color={color} fullWidth={fullWidth} {...rest}>
    {children}
  </Styled>
)

Button.propTypes = propTypes

export default Button
