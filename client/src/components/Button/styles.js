import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  padding: 0.5rem 2rem;
  text-decoration: none;
  text-align: center;
  line-height: 1.5rem;
  font-weight: lighter;
  outline: none;
  white-space: nowrap;
  font-family: Gilroy-ExtraBold, sans-serif;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;
  color: ${({ theme }) => theme.white};
  border-radius: ${({ theme }) => theme.borderRadius};

  background: ${({ style }) => style.colour};
  &:hover {
    background: ${({ style }) => style.hover};
  }
`;
