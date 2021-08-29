import React from 'react';
import PropTypes from 'prop-types';
import theme from 'theme';
import { StyledButton } from './styles';

export const Button = ({ children, style, ...rest }) => {
  return (
    <StyledButton style={theme[style]} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  style: PropTypes.oneOf(['main', 'green']),
};
