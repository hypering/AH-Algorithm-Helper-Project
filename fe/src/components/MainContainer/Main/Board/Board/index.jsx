import React, { useState } from 'react';
import Post from 'components/MainContainer/Main/Board/Board/Post';
import {
  Container,
  Loading,
} from 'components/MainContainer/Main/Board/Board/style';

const getAddBoardDatas = async (posts, setLoading, setBoards, startIdx) => {
  setLoading(true);
  fetch(`${process.env.BASE_URL}/board?startIdx=${startIdx}`, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((board) => {
      setBoards(posts.concat(board));
      setLoading(false);
    });
};

const Board = ({ setBoards, posts, setSelectedBoard, curIp }) => {
  const [loading, setLoading] = useState(false);

  const ScrollEventHandler = (e) => {
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;
    const clientHeight = e.target.clientHeight;
    const startIdx = posts !== null ? posts.length : 0;
    if (scrollTop + clientHeight >= scrollHeight && !loading) {
      getAddBoardDatas(posts, setLoading, setBoards, startIdx);
    }
  };

  return (
    <Container onScroll={ScrollEventHandler}>
      {posts &&
        posts.map((element) => (
          <Post
            posts={posts}
            post={element}
            id={element._id}
            key={element._id}
            setSelectedBoard={setSelectedBoard}
            setBoards={setBoards}
            curIp={curIp}
          />
        ))}
      {loading && <Loading>Loading...!</Loading>}
    </Container>
  );
};

export default Board;
