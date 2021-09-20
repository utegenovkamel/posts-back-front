import React from 'react'
import { useFetch } from 'hooks'
import { Card, Loader, Text } from 'components'
import { Container } from './styles'

const AllPosts = () => {
  const [posts, loading, error] = useFetch('app/post')

  return (
    <Container>
      {loading && <Loader center />}
      {posts?.map((post) => (
        <Card title={post.Title} description={post.Description} />
      ))}
      {error && <Text center>No posts</Text>}
    </Container>
  )
}

export default AllPosts
