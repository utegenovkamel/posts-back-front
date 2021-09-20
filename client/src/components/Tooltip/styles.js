import styled from 'styled-components'
import theme from 'theme'

export const Container = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  &:focus {
    & > div:last-child {
      opacity: 1;
      pointer-events: all;
    }
  }
`
export const Content = styled.div`
  opacity: 0;
  pointer-events: none;
  border-radius: 5px;
  border: 1px solid ${theme.grey};
  position: absolute;
  top: ${({ position }) => position.includes('bottom') && '100%'};
  bottom: ${({ position }) => position.includes('top') && '100%'};
  left: ${({ position }) => position.includes('right') && '100%'};
  right: ${({ position }) => position.includes('left') && '100%'};
`
