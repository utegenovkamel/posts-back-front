import styled from 'styled-components'
import theme from 'theme'

export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.modalBackground};
  box-shadow: ${theme.modalShadow};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  transition: opacity 0.5s ease;
  cursor: pointer;
  > div {
    position: absolute;
  }
`

export const Content = styled.div`
  max-width: 70vw;
  min-width: 50vw;
  position: relative;
  padding: 1.5rem;
  box-shadow: ${theme.modalShadow};
  border-radius: ${theme.borderRadius};
  background: ${theme.white};
  transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0.5)')};
  transition: transform 0.5s ease-in-out;
  cursor: default;
  > div:first-child {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
`
