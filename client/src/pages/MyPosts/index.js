import React, { useContext, useState } from 'react'
import { useFetch, useModal } from 'hooks'
import { StateContext } from 'context'
import { Loader, Button, Card, Text } from 'components'
import CreatePostFormModal from 'containers/CreatePostFormModal'
import DeleteModal from 'containers/DeleteModal'
import { Container } from './styles'

const MyPosts = () => {
  const [postId, setPostId] = useState(null)
  const [isOpenCreatePostModal, openCreatePostModal, closeCreatePostModal] =
    useModal()
  const [isOpenEditPostModal, openEditPostModal, closeEditPostModal] =
    useModal()
  const [isOpenDeletePostModal, openDeletePostModal, closeDeletePostModal] =
    useModal(setPostId)

  const { updateContent } = useContext(StateContext)

  const [posts, loading, error] = useFetch('app/post/my', {
    deps: [updateContent],
  })

  return (
    <Container>
      {loading && <Loader center />}
      <Button onClick={openCreatePostModal}>Create post</Button>
      {posts?.map((post) => (
        <Card
          title={post.Title}
          description={post.Description}
          id={post.id}
          onOpenDeleteModal={openDeletePostModal}
        />
      ))}
      {error && <Text center>No posts</Text>}
      <CreatePostFormModal
        isOpen={isOpenCreatePostModal}
        onClose={closeCreatePostModal}
      />
      <DeleteModal
        isOpen={isOpenDeletePostModal}
        onClose={closeDeletePostModal}
      />
    </Container>
  )
}

export default MyPosts
