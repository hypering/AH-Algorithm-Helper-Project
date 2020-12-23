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
  const [selectedDifficulty, setSelectedDifficulty] = useState([0, 1, 0, 1]);
  const [queryResults, setQueryResults] = useState([]);
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

  const getProblems = async (
    url,
    problemCnt,
    inputValue,
    selectedCate,
    selectedDifficulty
  ) => {
    const low = 5 * selectedDifficulty[0] + selectedDifficulty[1];
    const high = 5 * selectedDifficulty[2] + selectedDifficulty[3];
    console.log(problemCnt, inputValue, selectedCate, selectedDifficulty);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        problemCnt: problemCnt,
        inputValue: inputValue,
        selectedCate: selectedCate,
        selectedDifficulty: [low, high],
      }),
    });

    const response_Data = await response.json();

    if (response.ok) {
      const res = response_Data.res;
      console.log('res =========================');
      console.log(res);
      return await res;
    } else {
      return await [];
    }
  };
  const onSubmit = async () => {
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
      const res = await getProblems(
        'http://127.0.0.1:4000/problem',
        problemCnt,
        inputValue,
        selectedCate,
        selectedDifficulty
      );
      await setQueryResults(res);
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
          setSelectedDifficulty={setSelectedDifficulty}
        />
        <ProblemCount problemCnt={problemCnt} setProblemCnt={setProblemCnt} />
      </SubContainer>
      <MainContainer>
        <CategoryContainer
          selectedCate={selectedCate}
          setSelectedCate={setSelectedCate}
        />
        <Result queryResults={queryResults}></Result>
      </MainContainer>
      <span>
        <BtnExecute onClick={onSubmit}></BtnExecute>
      </span>
    </Container>
  );
};

export default Picker;
