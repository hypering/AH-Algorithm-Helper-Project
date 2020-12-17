import React from "react";
import { Title, WhatDay, Container } from "./style";

// 여기서 대회정보들을 가져와서, Container 안에 넣는다.
const Item = ({ id }) => {
  return (
    <Container>
      <Title>{id}</Title>
      <WhatDay>대회 날짜</WhatDay>
    </Container>
  );
};

export default Item;
