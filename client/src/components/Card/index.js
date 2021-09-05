import React from 'react';
import { Styled } from './styles';
import { Text } from 'components/Text';
import { Icon } from 'components/Icon';

const Card = ({ title, desc }) => {
  return (
    <Styled>
      <Icon type="points" />
      <Text as="h3">{title}</Text>
      <Text as="p">{desc}</Text>
    </Styled>
  );
};

export default Card;
