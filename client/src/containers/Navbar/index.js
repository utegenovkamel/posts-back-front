import React from 'react'
import { Link } from 'react-router-dom'
import { useModal } from 'hooks'
import Button from 'components/Button'
import CreatePostFormModal from 'containers/CreatePostFormModal'
import { Container, Header, Links } from './styles'

const Navbar = () => {
  const [isOpenCreatePostModal, openCreatePostModal, closeCreatePostModal] =
    useModal()

  return (
    <Header>
      <Container>
        <Links>
          <Link to="/all-posts">All posts</Link>
          <Link to="/my-posts">My posts</Link>
        </Links>
        <Button onClick={openCreatePostModal}>Create post</Button>
      </Container>
      <CreatePostFormModal
        isOpen={isOpenCreatePostModal}
        onClose={closeCreatePostModal}
      />
    </Header>
  )
}

export default Navbar
