import React, { useState } from "react";
import CategoryContainer from "./Categories/index";
import Difficulty from "./Difficulty/index";
import Member from "./Member/index";
import ProblemCount from "./ProblemCount";
import { MainContainer, Container, SubContainer } from "./style";

const Picker = () => {
  const [problemCnt, setProblemCnt] = useState(0);
  const [selectedCate, setSelectedCate] = useState([]);
  const onSubmit = () => {
    //모든 항목이 입력됐는지 확인해야함
    if (problemCnt == 0 || problemCnt == "" || selectedCate.length === 0) {
      alert("error");
    } else {
      console.log("Query gogo");
    }
  };
  return (
    <Container>
      <SubContainer>
        <Member />
      </SubContainer>
      <SubContainer>
        <Difficulty />
        <ProblemCount problemCnt={problemCnt} setProblemCnt={setProblemCnt} />
      </SubContainer>
      <MainContainer>
        <CategoryContainer
          selectedCate={selectedCate}
          setSelectedCate={setSelectedCate}
        />
        <div>결과창</div>
      </MainContainer>
      <div onClick={onSubmit}>적용</div>
    </Container>
  );
};

export default Picker;
