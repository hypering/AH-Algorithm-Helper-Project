import React from "react";
import CategoryContainer from "./Category/index";
import Difficulty from "./Difficulty/index";
import Member from "./Member/index";
import ProblemCount from "./ProblemCount";
import { Container, SubContainer2, Subcontainer3 } from "./style";

const Picker = () => {
  return (
    <Container>
      <Member />
      <SubContainer2>
        <Difficulty></Difficulty>
        <ProblemCount></ProblemCount>
      </SubContainer2>
      <Subcontainer3>
        <CategoryContainer />
        <div className="Result">결과창</div>
      </Subcontainer3>
    </Container>
  );
};

export default Picker;
