import React from 'react'
import { useFetch } from 'hooks'
import { Loader, Text } from 'components'
import PostCard from 'containers/PostCard'
import { Container } from './styles'

const AllPosts = () => {
  const [posts, loading, error] = useFetch('app/post')

  return (
    <Container>
      {loading && <Loader center />}
      {posts?.map((post) => (
        <PostCard
          title={post.Title}
          description={post.Description}
          hideTooltip
        />
      ))}
      {error && <Text center>No posts</Text>}
    </Container>
  )
}

export default AllPosts
