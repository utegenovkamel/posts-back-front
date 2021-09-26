import React from 'react'
import { NavLink } from 'react-router-dom'
import { useModal } from 'hooks'
import { Icon } from 'components'
import LogoutModal from 'containers/LogoutModal'
import Tooltip from 'components/Tooltip'
import { Container, Header, Links } from './styles'

const Navbar = () => {
  const [isOpenLogoutModal, openLogoutModal, closeLogoutModal] = useModal()

  return (
    <Header>
      <Container>
        <Links>
          <NavLink to="/all-posts">All posts</NavLink>
          <NavLink to="/my-posts">My posts</NavLink>
        </Links>
        <Tooltip
          trigger={
            <Icon type="logout" size="1.5rem" onClick={openLogoutModal} />
          }
          position="bottom-left"
        >
          Logout
        </Tooltip>
      </Container>
      <LogoutModal isOpen={isOpenLogoutModal} onClose={closeLogoutModal} />
    </Header>
  )
}

export default Navbar
