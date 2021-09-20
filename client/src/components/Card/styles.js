import styled from 'styled-components'
import theme from 'theme'

export const Styled = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid ${theme.grey};
  padding: 1.5rem;
  h3 {
    margin-bottom: 0.5rem;
  }
  > button {
    top: 0.5rem;
    right: 0.5rem;
    position: absolute;
  }
`

export const Item = styled.div`
  padding: 0.3rem 0.3rem 0.3rem 0.3rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:not(:last-of-type) {
    border-bottom: 1px solid ${theme.grey};
    :hover {
      border-bottom: 1px solid ${theme.main};
    }
  }
`
