import styled from 'styled-components'

export const Header = styled.header`
    background: #20232a;
    padding: 10px 0;
    position: fixed;
    width: 100%;
    z-index: 50;
    & a {
        color: #fff;
        text-decoration: none;
        margin-right: 30px;
        &:last-child {
            margin-right: 0;
        }
        &.active {
            color: #61dafb;
        }
    }
`
