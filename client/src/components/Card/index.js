import React from 'react';
import { Styled } from './styles';
import { Text } from 'components/Text';
import { Icon } from 'components/Icon';

const Card = ({ title, description }) => {
  return (
    <Styled>
      <Icon type="points" />
      <Text as="h3">{title}</Text>
      <Text as="p">{description}</Text>
    </Styled>
  );
};

export default Card;
