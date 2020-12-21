import React from "react";

import { Subtitle, Container, Subcontainer, TextInput } from "./style";

const ProblemCount = ({ problemCnt, setProblemCnt }) => {
  const onChange = (e) => {
    const { value } = e.target;
    const regex = /^[0-9]{1,2}$/;

    if (regex.test(value) || value == "") {
      setProblemCnt(value);
    }
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
