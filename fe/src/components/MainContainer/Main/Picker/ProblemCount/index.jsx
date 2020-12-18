import React from "react";

import { Subtitle, Container, Subcontainer, TextInput } from "./style";

const ProblemCount = ({ problemCnt, setProblemCnt }) => {
  const onChange = (e) => {
    const { value } = e.target;
    setProblemCnt(value);
  };
  return (
    <Container>
      <Subtitle>문제 개수</Subtitle>
      <Subcontainer>
        <TextInput
          type="text"
          placeholder="문제 개수"
          value={problemCnt}
          onChange={onChange}
        ></TextInput>
      </Subcontainer>
    </Container>
  );
};

export default ProblemCount;
