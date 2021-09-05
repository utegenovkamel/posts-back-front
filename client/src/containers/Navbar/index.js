import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';
import { Container, Header, Links, Nav } from './styles';

const Navbar = () => {
  return (
    <Header>
      <Container>
        <Links>
          <Link to="/all-posts">All posts</Link>
          <Link to="/my-posts">My posts</Link>
        </Links>
        <Button style="main">Create post</Button>
      </Container>
    </Header>
  );
};

export default Navbar;
