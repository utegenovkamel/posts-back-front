import React from 'react'
import Text from 'components/Text'
import Icon from 'components/Icon'
import Tooltip from 'components/Tooltip'
import { Item, Styled } from './styles'

const Card = ({ title, description, id, openEditModal, onOpenDeleteModal }) => (
  <Styled>
    <Tooltip position="bottom-left" trigger={<Icon type="points" />}>
      <Item onClick={() => openEditModal(id)}>Edit</Item>
      <Item onClick={() => onOpenDeleteModal(id)}>Delete</Item>
    </Tooltip>

    <Text as="h3">{title}</Text>
    <Text as="p">{description}</Text>
  </Styled>
)

export default Card
