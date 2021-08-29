import styled from 'styled-components'
import is, { match } from 'styled-is'
import { space, layout, SpaceProps, LayoutProps } from 'styled-system'

type ButtonColors = 'primary' | 'red' | 'black'

type Props = {
    color?: ButtonColors
    full?: boolean
    strong?: boolean
    cursorDefault?: boolean
}

const Button = styled.button<Props & SpaceProps & LayoutProps>`
    display: inline-block;
    height: 40px;
    padding: 0 24px;
    font-size: 14px;
    line-height: 18px;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    background: #86939e;
    color: #ffffff;
    cursor: pointer;
    border-radius: 4px;
    font-family: Inter, sans-serif;
    letter-spacing: 1px;
    position: relative;
    ${space}
    ${layout}
    ${match('color', 'primary')`
      background: #61DAFB;
      color: #20232A;
    `};

    ${match('color', 'black')`
      background: #20232A;
      color: #fff;
    `};

    ${match('color', 'red')`
      background: #FC7B7B;
      color: #fff;
    `};

    ${is('cursorDefault')`
      cursor: default
    `};

    ${is('full')`
      width: 100%;
      display: block;
    `};
    ${is('strong')`
      font-weight: bold;
    `};
`

export default Button
