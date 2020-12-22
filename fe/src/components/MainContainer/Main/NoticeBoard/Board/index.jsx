import React from 'react';
import Post from './Post';
import { Container } from './style';

const Board = ({ posts, setSelectedBoard }) => {
  return (
    <Container>
      {posts &&
        posts.map((element) => (
          <Post post={element} setSelectedBoard={setSelectedBoard} />
        ))}
    </Container>
  );
};

export default Board;
