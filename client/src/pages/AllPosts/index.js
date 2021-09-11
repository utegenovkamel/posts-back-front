import React, { useContext } from 'react';
import { useFetch } from 'hooks';
import { StateContext } from 'context/currentUser';
import Card from 'components/Card';
import Loader from 'components/Loader';
import { Text } from 'components/Text';
import { Container } from './styles';

const AllPosts = () => {
  const { updateContent } = useContext(StateContext);

  const [posts, loading, error] = useFetch('app/post', {
    deps: [updateContent],
  });

  return (
    <Container>
      {loading && <Loader center />}
      {posts?.map((post) => (
        <Card title={post.Title} description={post.Description} />
      ))}
      {error && <Text center>No posts</Text>}
    </Container>
  );
};

export default AllPosts;
