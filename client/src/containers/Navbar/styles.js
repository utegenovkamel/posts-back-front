import styled from 'styled-components'
import theme from 'theme'
import { GridContainer } from 'components'

export const Header = styled.div`
  width: 100%;
  padding: 1rem 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

export const Container = styled(GridContainer)`
  display: flex;
  justify-content: space-between;
  button {
    max-width: 12rem;
  }
`

export const Links = styled.div`
  display: flex;
  a {
    text-decoration: none;
    color: ${theme.black};
    font-size: 1.5rem;
    transition: color 0.3s ease-in-out;
    :first-child {
      margin-right: 2rem;
    }
  }
  a.active {
    color: ${theme.main};
  }
`

export const IconContainer = styled.div``
