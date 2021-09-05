import React from 'react';
import { StyledText } from './styles';

export const Text = ({ children, as, ...rest }) => {
  return (
    <StyledText as={as} {...rest}>
      {children}
    </StyledText>
  );
};
