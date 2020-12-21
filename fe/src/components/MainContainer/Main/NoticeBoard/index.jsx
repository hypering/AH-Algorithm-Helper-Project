import React from "react";
import Header from "./Header";
import Board from "./Board";
import DetailView from "./DetailView";
import { Container, SubContainer } from "./style";

const NoticeBoard = () => {
  return (
    <Container>
      <Header />
      <SubContainer>
        <Board />
        <DetailView />
      </SubContainer>
    </Container>
  );
};

export default NoticeBoard;
