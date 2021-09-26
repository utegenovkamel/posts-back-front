import styled from 'styled-components'
import is, { match } from 'styled-is'
import {
    space,
    layout,
    typography,
    SpaceProps,
    LayoutProps,
    TypographyProps,
    flexbox,
    FlexboxProps,
} from 'styled-system'

type Props = {
    block?: boolean
    pointer?: boolean
    strong?: boolean
    color?: 'black' | 'primary'
}

const Text = styled.span<
    Props & SpaceProps & LayoutProps & TypographyProps & FlexboxProps
>`
    display: inline-block;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #5e6977;
    text-decoration: none;
    ${space}
    ${layout}
    ${typography}
    ${flexbox}
    ${match('color', 'black')`
      color: #20232A;
    `};
    ${match('color', 'primary')`
      color: #61DAFB;
    `};

    ${is('block')`
      display: block;
    `};

    ${is('pointer')`
      cursor: pointer;
    `};

    ${is('strong')`
      font-weight: bold;
    `};
`

export default Text
