import styled from 'styled-components'
import theme from 'theme'

export const FormContainer = styled.div`
  width: 25rem;
  padding: 1rem;
  align-items: center;
  background-color: ${theme.white};
  border: none;
  border-radius: 8px;
  box-shadow: ${theme.modalShadow};
  > form > div {
    margin-bottom: 0.7rem;
  }
`

export const Line = styled.span`
  display: block;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 1px;
  margin: 1rem 0;
`
