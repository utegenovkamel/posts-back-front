import styled from 'styled-components'
import is from 'styled-is'
import {
    border,
    flexbox,
    layout,
    space,
    position,
    background,
    BorderProps,
    FlexboxProps,
    LayoutProps,
    SpaceProps,
    PositionProps,
    BackgroundProps,
} from 'styled-system'

type Props = {
    pointer?: boolean
    opacity?: boolean
}

const Flex = styled.div<
    FlexboxProps &
        LayoutProps &
        SpaceProps &
        Props &
        BorderProps &
        PositionProps &
        BackgroundProps
>`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    box-sizing: border-box;
    ${is('pointer')`
      cursor: pointer;
    `}
    ${border}
    ${flexbox}
    ${layout}
    ${space}
    ${position}
    ${background}
`
export default Flex
