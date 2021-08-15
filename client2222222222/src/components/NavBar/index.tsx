import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Flex, Text } from '../../ui'
import { Header } from './styled'

const NavBar = () => {
    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <Header>
            <Container>
                <Flex justifyContent="space-between" alignItems="cetner">
                    <Text fontSize="30px" color="primary" alignSelf="center">
                        Posts
                    </Text>
                    <Flex alignItems="center">
                        <NavLink to="/all-posts" activeClassName="active">
                            All Posts
                        </NavLink>
                        <NavLink exact to="/my-posts" activeClassName="active">
                            My Posts
                        </NavLink>
                        <NavLink to="/create-post" activeClassName="active">
                            Create Post
                        </NavLink>
                    </Flex>
                    <Button color="red" onClick={handleLogout}>
                        Logout
                    </Button>
                </Flex>
            </Container>
        </Header>
    )
}

export default NavBar
