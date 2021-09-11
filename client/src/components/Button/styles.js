import styled from 'styled-components';
import theme from 'theme';

export const Styled = styled.button`
  width: 100%;
  padding: 0.4rem 2rem;
  text-decoration: none;
  text-align: center;
  line-height: 1.5rem;
  outline: none;
  white-space: nowrap;
  font-weight: bold;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;
  color: ${theme.white};
  border-radius: ${theme.borderRadius};

  background: ${({ style }) => style.colour};
  &:hover {
    background: ${({ style }) => style.hover};
  }
`;
