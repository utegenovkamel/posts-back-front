import React from 'react'
import PropTypes from 'prop-types'
import { Container, IconItem } from './styles'

const propTypes = {
  type: PropTypes.oneOf(['cross', 'points', 'logout', 'trash', 'edit']),
}

const Icon = ({ type, size, onClick, ...rest }) => {
  const icons = {
    cross: 'fas fa-times',
    points: 'fas fa-ellipsis-v',
    logout: 'fas fa-sign-out-alt',
    trash: 'far fa-trash-alt',
    edit: 'far fa-edit',
  }

  return (
    <Container {...rest}>
      <IconItem size={size} className={icons[type]} onClick={onClick} />
    </Container>
  )
}

Icon.propTypes = propTypes

export default Icon
