import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.5rem 2rem;
  text-decoration: none;
  text-align: center;
  line-height: 1.5rem;
  font-weight: lighter;
  outline: none;
  white-space: nowrap;
  font-family: Gilroy-ExtraBold, sans-serif;
  font-size: 1rem;
  border: none;
  border-radius: 1.25rem;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1);
  }
`;
