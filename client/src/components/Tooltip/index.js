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
  on: PropTypes.oneOf(['hover', 'focus']),
}

const Tooltip = ({
  trigger,
  position = 'top-left',
  on = 'hover',
  children,
}) => (
  <Container showContent={on}>
    {trigger}
    <Content position={position} onlyText={on === 'hover'}>
      {children}
    </Content>
  </Container>
)

Tooltip.propTypes = propTypes

export default Tooltip
