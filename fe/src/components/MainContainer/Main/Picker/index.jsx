import React from "react";
import CategoryContainer from "./Category/index";
import Difficulty from "./Difficulty/index";
import Member from "./Member/index";
import ProblemCount from "./ProblemCount";
import { MainContainer, Container, SubContainer } from "./style";

const Picker = () => {
  return (
    <Container>
      <SubContainer>
        <Member />
      </SubContainer>
      <SubContainer>
        <Difficulty />
        <ProblemCount />
      </SubContainer>
      <MainContainer>
        <CategoryContainer />
        <div>결과창</div>
      </MainContainer>
      <div>적용</div>
    </Container>
  );
};

export default Picker;
