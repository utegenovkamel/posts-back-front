import React from 'react'
import PropTypes from 'prop-types'
import { Container, Content } from './styles'

const propTypes = {
  position: PropTypes.oneOf([
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
  ]),
}

const Tooltip = ({ position = 'top-left', trigger, children }) => (
  <Container>
    {trigger}
    <Content position={position}>{children}</Content>
  </Container>
)

Tooltip.propTypes = propTypes

export default Tooltip
