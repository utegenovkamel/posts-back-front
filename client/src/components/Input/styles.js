import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 0.8rem;
`;
export const InputField = styled.input`
  display: block;
  text-align: left;
  outline: none;
  font-size: 1.05rem;
  padding: 14px 16px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid #dddfe2;
`;
export const Error = styled.span`
  display: block;
  padding: 0.4rem 0 0;
  font-size: 0.75rem;
`;

export const Label = styled.label`
  font-size: 1.2rem;
`;
