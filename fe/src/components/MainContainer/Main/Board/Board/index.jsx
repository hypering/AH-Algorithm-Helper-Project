import React from 'react';
import Post from './Post';
import { Container } from './style';

const Board = ({ setBoards, posts, setSelectedBoard }) => {
  return (
    <Container>
      {posts &&
        posts.map((element) => (
          <Post
            posts={posts}
            post={element}
            id={element._id}
            key={element._id}
            setSelectedBoard={setSelectedBoard}
            setBoards={setBoards}
          />
        ))}
    </Container>
  );
};

export default Board;
