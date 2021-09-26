import styled, { css } from 'styled-components'
import theme from 'theme'

export const Container = styled.button`
  position: relative;
  border: none;
  background: transparent;
  ${({ showContent }) => {
    if (showContent === 'hover') {
      return css`
        &:hover {
          & > div:last-child {
            opacity: 1;
            pointer-events: all;
            transition: opacity 0.2s ease-in-out;
          }
        }
      `
    }
    if (showContent === 'focus') {
      return css`
        &:focus {
          & > div:last-child {
            opacity: 1;
            pointer-events: all;
            transition: opacity 0.2s ease-in-out;
          }
        }
      `
    }
  }}
`
export const Content = styled.div`
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
  position: absolute;
  ${({ onlyText }) =>
    onlyText &&
    css`
      border: 1px solid ${theme.grey};
      padding: 0.25rem;
      background: white;
      border-radius: 5px;
    `}
  top: ${({ position }) => position.includes('bottom') && '100%'};
  bottom: ${({ position }) => position.includes('top') && '100%'};
  left: ${({ position }) => position.includes('right') && '100%'};
  right: ${({ position }) => position.includes('left') && '100%'};
`
