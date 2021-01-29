import React, { useState } from 'react';
import CategoryContainer from 'components/MainContainer/Main/Picker/Categories';
import Difficulty from 'components/MainContainer/Main/Picker/Difficulty';
import ProblemCount from 'components/MainContainer/Main/Picker/ProblemCount';
import Result from 'components/MainContainer/Main/Picker/Result';
import { MainContainer, Container, SubContainer, ButtonWrap } from './style';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Picker = () => {
  const [problemCnt, setProblemCnt] = useState(0);
  const [selectedCate, setSelectedCate] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState([0, 1, 0, 1]);
  const [queryResults, setQueryResults] = useState([]);

  const getProblems = async (
    url,
    problemCnt,
    selectedCate,
    selectedDifficulty
  ) => {
    const low = 5 * selectedDifficulty[0] + selectedDifficulty[1];
    const high = 5 * selectedDifficulty[2] + selectedDifficulty[3];
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        problemCnt: problemCnt,
        selectedCate: selectedCate,
        selectedDifficulty: [low, high],
      }),
    });

    const response_Data = await response.json();

    if (response.ok) {
      const res = response_Data.res;

      return await res;
    } else {
      return await [];
    }
  };
  const onSubmit = async () => {
    //모든 항목이 입력됐는지 확인해야함
    if (problemCnt < 1 || problemCnt > 10) {
      alert('1~10 숫자를 입력해주세요.');
    } else if (problemCnt == 0 || problemCnt == '') {
      alert('문제 개수를 입력하세요.');
    } else if (selectedCate.length === 0) {
      alert('카테고리를 선택하세요.');
    } else {
      //요청
      const res = await getProblems(
        `${process.env.BASE_URL}/problem`,
        problemCnt,
        selectedCate,
        selectedDifficulty
      );
      setQueryResults(res);
    }
  };
  return (
    <Container>
      <SubContainer>
        <Difficulty
          selectedDifficulty={selectedDifficulty}
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
      <ButtonWrap>
        <FontAwesomeIcon
          icon={faCheckCircle}
          size="2x"
          color="#707070"
          onClick={onSubmit}
        ></FontAwesomeIcon>
      </ButtonWrap>
    </Container>
  );
};

export default Picker;
