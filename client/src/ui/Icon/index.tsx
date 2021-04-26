import styled from 'styled-components'
import is, { match } from 'styled-is'
import {
  space,
  position,
  layout,
  SpaceProps,
  PositionProps,
  LayoutProps,
} from 'styled-system'

type Props = {
  size?: 'xs' | 'lt' | 'sm' | 'md' | 'lg' | 'big'
  round?: boolean
  border?: boolean
  whiteBorder?: boolean
  notPointer?: boolean
  background?: 'dark' | 'white' | 'green'
}

const Icon = styled.div<Props & SpaceProps & PositionProps & LayoutProps>`
  border-radius: 4px;
  border: none;
  background: #f3f5f6;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  color: #1D293F;
  font-size: 14px;
  cursor: pointer;
  ${space}
  ${position}
  ${layout}
  ${match('background', 'dark')`
    background: #5E6977;
  `};
  ${match('background', 'white')`
    background: #ffffff;
  `};
  ${match('background', 'green')`
    background: #BACE3D;
  `};
  

  ${is('notPointer')`
    cursor: default;
  `};

  ${is('round')`
    border-radius: 100px;
  `};
  ${is('border')`
    background: transparent;
    border: 1px solid #5E6977;
  `};
  ${is('whiteBorder')`
    background: transparent;
    border: 1px solid #E1E8EE;
  `};
  ${match('size', 'xs')`
    width: 13px;
    height: 13px;
  `};
  ${match('size', 'lt')`
    width: 30px;
    height: 30px;
  `};
  ${match('size', 'sm')`
    width: 35px;
    height: 35px;
  `};
  ${match('size', 'md')`
    width: 52px;
    height: 52px;
  `};
  ${match('size', 'lg')`
    width: 77px;
    height: 77px;
  `};
  ${match('size', 'big')`
    width: 60px;
    height: 62px;
  `};
`

export default Icon
