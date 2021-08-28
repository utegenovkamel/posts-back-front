import React from 'react';
import Header from 'containers/Header';
import { Container } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Layout;
