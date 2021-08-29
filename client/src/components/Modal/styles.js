import styled from 'styled-components';

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.modalBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  transition: 0.5s;
`;

export const Content = styled.div`
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.modalShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.white};
  transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0.5)')};
  transition: 0.4s all;
`;
