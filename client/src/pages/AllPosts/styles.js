import styled from 'styled-components'
import GridContainer from 'components/GridContainer'

export const Container = styled(GridContainer)`
  padding-top: 2rem;
  > div:not(:last-child) {
    margin-bottom: 1rem;
  }
`
