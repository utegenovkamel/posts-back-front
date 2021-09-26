import styled from 'styled-components'
import is from 'styled-is'
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  background,
  BackgroundProps,
} from 'styled-system'
import Option from './Option'

type Props = {
  border?: boolean
  appearance?: boolean
}

const Select = styled.select<
  SpaceProps & Props & LayoutProps & BackgroundProps
>`
  width: 100%;
  font-size: 14px;
  font-weight: normal;
  color: #86939e;
  border: none;
  background: #f3f5f6;
  border-radius: 4px;
  appearance: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  ${space}
  ${layout}
  ${background}
  ${is('border')`
    background: transparent;
    border: 1px solid #86939E;
  `}
  ${is('appearance')`
  appearance: auto;
    
  `}
`

export { Select, Option }
