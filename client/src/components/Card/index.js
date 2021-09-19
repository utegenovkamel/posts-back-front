import React from 'react'
import Text from 'components/Text'
import Icon from 'components/Icon'
import { Styled } from './styles'

const Card = ({ title, description }) => (
  <Styled>
    <Icon type="points" />
    <Text as="h3">{title}</Text>
    <Text as="p">{description}</Text>
  </Styled>
)

export default Card
