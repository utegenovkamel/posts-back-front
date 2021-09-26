import React, { useContext, useState } from 'react'
import { useFetch, useModal } from 'hooks'
import { StateContext } from 'context'
import { Loader, Button, Text } from 'components'
import PostCard from 'containers/PostCard'
import PostFormModal from 'containers/PostFormModal'
import { Container } from './styles'

const MyPosts = () => {
  const { updateContent } = useContext(StateContext)
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [isOpenPostFormModal, openPostFormModal, closePostFormModal] =
    useModal(setSelectedPostId)

  const [posts, loading, error] = useFetch('app/post/my', {
    deps: [updateContent],
  })

  return (
    <Container>
      {loading && <Loader center />}
      <Button onClick={() => openPostFormModal()}>Create post</Button>
      {posts?.map((post) => (
        <PostCard
          title={post.Title}
          description={post.Description}
          postId={post.id}
          openEditModal={openPostFormModal}
        />
      ))}
      {error && <Text center>No posts</Text>}

      <PostFormModal
        isOpen={isOpenPostFormModal}
        onClose={closePostFormModal}
        postId={selectedPostId}
      />
    </Container>
  )
}

export default MyPosts
