import styled from 'styled-components';
import theme from 'theme';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ isLoading }) => (isLoading ? 'all' : 'none')};
  background-color: ${theme.modalBackground};
  box-shadow: ${theme.modalShadow};
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  transition: opacity 0.4s ease;

  > div {
    transform: ${({ isLoading }) => (isLoading ? 'scale(1)' : 'scale(0)')};
    transition: transform 0.4s ease;
  }
`;
