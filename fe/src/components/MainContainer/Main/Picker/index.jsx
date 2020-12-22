import React, { useState, useRef } from 'react';
import CategoryContainer from './Categories/index';
import Difficulty from './Difficulty/index';
import Member from './Member/index';
import ProblemCount from './ProblemCount';
import Result from './Result';
import { MainContainer, Container, SubContainer } from './style';
import BtnExecute from './Buttons/Execute.jsx';
const Picker = () => {
  const inputBoxCnt = useRef(1);
  const [problemCnt, setProblemCnt] = useState(0);
  const [inputValue, setInputValue] = useState([{ id: 1, value: '' }]);
  const [selectedCate, setSelectedCate] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState([0, 0, 0, 0]);
  const checkMemInput = () => {
    let valid = true;
    inputValue.forEach((input) => {
      if (input.value == '') {
        valid = false;
        return false;
      }
    });
    if (!valid) return false;
    else return true;
  };
  const onSubmit = () => {
    //모든 항목이 입력됐는지 확인해야함
    if (problemCnt < 1 || problemCnt > 10) {
      alert('1~10 숫자를 입력해주세요.');
    } else if (
      problemCnt == 0 ||
      problemCnt == '' ||
      selectedCate.length === 0 ||
      !checkMemInput()
    ) {
      alert('입력을 확인하세요.');
    } else {
      //요청
      console.log('Query gogo');

      // API 연결시 작성
      // let response;
      // if (response.ok) {
      //   const res = response.json.res;
      //   let html = res.map((problem) => (
      //     <ResEntity
      //       num={problem.num}
      //       tier={problem.tier}
      //       cate={problem.categories.toString()}
      //     />
      //   ));
      // }
    }
  };
  return (
    <Container>
      <SubContainer>
        <Member
          inputValue={inputValue}
          setInputValue={setInputValue}
          inputBoxCnt={inputBoxCnt}
        />
      </SubContainer>
      <SubContainer>
        <Difficulty
          selected={selectedDifficulty}
          setSelected={setSelectedDifficulty}
        />
        <ProblemCount problemCnt={problemCnt} setProblemCnt={setProblemCnt} />
      </SubContainer>
      <MainContainer>
        <CategoryContainer
          selectedCate={selectedCate}
          setSelectedCate={setSelectedCate}
        />
        <Result></Result>
      </MainContainer>
      <span>
        <BtnExecute onClick={onSubmit}></BtnExecute>
      </span>
    </Container>
  );
};

export default Picker;
