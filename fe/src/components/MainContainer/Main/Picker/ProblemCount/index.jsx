import React from "react";

import { Subtitle, Container, Subcontainer } from "./style";

const ProblemCount = () => {
  return (
    <Container>
      <Subtitle>문제 개수</Subtitle>
      <Subcontainer>
        <input type="text" placeholder="문제 개수"></input>문제
      </Subcontainer>
    </Container>
  );
};

export default ProblemCount;
