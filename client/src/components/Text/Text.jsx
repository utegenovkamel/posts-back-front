import React from 'react';
import { StyledText } from './styles';

export const Text = ({ children, as, center, ...rest }) => {
  return (
    <StyledText as={as} center={center} {...rest}>
      {children}
    </StyledText>
  );
};
