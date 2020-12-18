import React from "react";
import { Title, Container, ContestWrap } from "./style";

// 여기서 대회정보들을 가져와서, Container 안에 넣는다.
const Item = ({ id }) => {
  return (
    <Container>
      <Title>{id}</Title>
      <ContestWrap>
        <div>대회 1</div>
        <div>대회 날짜</div>
      </ContestWrap>
      <ContestWrap>
        <div>대회 1</div>
        <div>대회 날짜</div>
      </ContestWrap>
    </Container>
  );
};

export default Item;
