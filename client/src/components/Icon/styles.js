import styled from 'styled-components'
import theme from 'theme'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  text-decoration: none;
`

export const IconItem = styled.i`
  margin: auto;
  cursor: pointer;
  color: ${theme.grey};
`
