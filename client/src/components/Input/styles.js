import styled from 'styled-components';
import theme from 'theme';

export const Container = styled.div`
  position: relative;
`;

export const InputField = styled.input`
  display: block;
  text-align: left;
  outline: none;
  font-size: 1rem;
  padding: 0.1rem 0.5rem 0 0.5rem;
  min-height: 40px;
  width: 100%;
  border-radius: ${theme.borderRadius};
  border: 1px solid #dddfe2;
`;

export const Error = styled.span`
  font-size: 0.75rem;
  color: ${theme.red};
`;

export const Label = styled.label`
  font-size: 1.2rem;
`;
