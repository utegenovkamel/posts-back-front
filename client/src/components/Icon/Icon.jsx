import React from 'react';
import { Container, IconItem } from './styles';

export const Icon = ({ type, onClick, color, ...rest }) => {
  const icons = {
    cross: 'fas fa-times',
    points: 'fas fa-ellipsis-v',
  };

  return (
    <Container {...rest}>
      <IconItem className={icons[type]} onClick={onClick} color={color} />
    </Container>
  );
};
