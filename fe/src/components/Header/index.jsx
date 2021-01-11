import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

const Header = () => {
  return (
    <Link to="/">
      <Container>Algorithm Helper</Container>
    </Link>
  );
};

export default Header;
