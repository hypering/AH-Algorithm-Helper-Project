import { React, useEffect, useState } from "react";
import Header from "./Header";
import Board from "./Board";
import DetailView from "./DetailView";
import { Container, SubContainer } from "./style";

const NoticeBoard = () => {
  const [boards, setBoards] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/board", {
      method: "get",
    })
      .then((response) => response.json())
      .then((board) => {
        setBoards(board);
      });
  }, []);

  return (
    <Container>
      <Header />
      <SubContainer>
        <Board posts={boards} setSelectedBoard={setSelectedBoard} />
        <DetailView post={selectedBoard} />
      </SubContainer>
    </Container>
  );
};

export default NoticeBoard;
