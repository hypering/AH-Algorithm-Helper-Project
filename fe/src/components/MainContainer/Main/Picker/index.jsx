import React, { useState } from 'react';
import CategoryContainer from 'components/MainContainer/Main/Picker/Categories';
import Difficulty from 'components/MainContainer/Main/Picker/Difficulty';
import ProblemCount from 'components/MainContainer/Main/Picker/ProblemCount';
import Result from 'components/MainContainer/Main/Picker/Result';
import { MainContainer, Container, SubContainer, ButtonWrap } from './style';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from '../../../../lib/api';

const Picker = () => {
  const [problemCnt, setProblemCnt] = useState(0);
  const [selectedCate, setSelectedCate] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState([0, 1, 0, 1]);
  const [queryResults, setQueryResults] = useState([]);

  const onSubmit = async () => {
    if (problemCnt < 1 || problemCnt > 10) {
      alert('1~10 숫자를 입력해주세요.');
    } else if (problemCnt == 0 || problemCnt == '') {
      alert('문제 개수를 입력하세요.');
    } else if (selectedCate.length === 0) {
      alert('카테고리를 선택하세요.');
    } else {
      const low = 5 * selectedDifficulty[0] + selectedDifficulty[1];
      const high = 5 * selectedDifficulty[2] + selectedDifficulty[3];

      const problemDatas = await API.post('problem', {
        problemCnt: problemCnt,
        selectedCate: selectedCate,
        selectedDifficulty: [low, high],
      });
      setQueryResults(problemDatas.res);
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
