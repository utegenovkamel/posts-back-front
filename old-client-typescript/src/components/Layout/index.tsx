import React from 'react'
import { Container } from '../../ui'
import NavBar from '../NavBar'
import { Main } from './styled'

type Props = {
    children?: JSX.Element
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <NavBar />
            <Main>
                <Container>{children}</Container>
            </Main>
        </>
    )
}

export default Layout
