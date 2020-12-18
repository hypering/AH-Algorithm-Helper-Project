import React from "react";

import { Subtitle, Container, Subcontainer, TextInput } from "./style";

const ProblemCount = () => {
  return (
    <Container>
      <Subtitle>문제 개수</Subtitle>
      <Subcontainer>
        <TextInput type="text" placeholder="문제 개수"></TextInput>
      </Subcontainer>
    </Container>
  );
};

export default ProblemCount;
