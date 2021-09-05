import React from 'react';
import PropTypes from 'prop-types';
import theme from 'theme';
import { Styled } from './styles';

export const Button = ({ children, style, ...rest }) => {
  return (
    <Styled style={theme[style]} {...rest}>
      {children}
    </Styled>
  );
};

Button.propTypes = {
  style: PropTypes.oneOf(['main', 'green']),
};
