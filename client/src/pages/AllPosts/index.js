import React from 'react';
import { useFetch } from 'hooks';
import Card from 'components/Card';
import { Container } from './styles';

const AllPosts = () => {
  const { data, loading } = useFetch('app/post');
  return (
    <Container>
      <Card
        title="Title"
        desc="lorem20 bla blalorem20 bla blalorem20 bla blalorem20 bla blalorem20 bla bla"
      />
    </Container>
  );
};

export default AllPosts;
