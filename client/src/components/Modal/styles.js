import styled from 'styled-components'
import { colors } from 'config/themes'

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
  background: ${({ inverted }) =>
    inverted ? colors.dirtyRed : colors.secondaryDark};
  color: ${({ inverted }) => (inverted ? 'white' : 'white')};
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;

    &:hover {
      transform: none;
    }
  }
`
