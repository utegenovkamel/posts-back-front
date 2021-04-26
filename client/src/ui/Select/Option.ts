import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

const Option = styled.option<SpaceProps>`
  ${space}
  cursor: pointer;
`

export default Option
