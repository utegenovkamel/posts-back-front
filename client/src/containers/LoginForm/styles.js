import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
`;

export const FormContainer = styled.div`
  width: 25rem;
  padding: 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.modalShadow};
`;

export const Line = styled.span`
  display: block;
  border-bottom: 1px solid ${({ theme }) => theme.whiteDark};
  width: 100%;
  height: 1px;
  margin: 1rem 0;
`;
