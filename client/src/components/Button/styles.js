import styled from 'styled-components'
import theme from 'theme'

export const Styled = styled.button`
  display: block;
  min-width: 10rem;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: 0.4rem 2rem;
  text-decoration: none;
  text-align: center;
  line-height: 1.5rem;
  outline: none;
  white-space: nowrap;
  font-weight: bold;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;
  color: ${theme.white};
  border-radius: ${theme.borderRadius};

  background: ${({ color }) => theme[color]};

  &:hover {
    background: ${({ color }) => theme[`${color}Hover`]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #cbd6ee;
  }

  &:active {
    box-shadow: 0 0 20px 3px rgba(34, 60, 80, 0.3) inset;
  }
`
