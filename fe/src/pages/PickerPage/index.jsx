import React, { useState } from 'react';
import CategoryContainer from 'components/MainContainer/Main/Picker/Categories';
import Difficulty from 'components/MainContainer/Main/Picker/Difficulty';
import ProblemCount from 'components/MainContainer/Main/Picker/ProblemCount';
import Result from 'components/MainContainer/Main/Picker/Result';
import { MainContainer, Container, SubContainer, ButtonWrap } from './style';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from 'lib/api';

const PickerPage = () => {
  const [queryResults, setQueryResults] = useState([]);
  const [queryOptions, setQueryOptions] = useState({
    problemCnt: 0,
    categories: [],
    difficulty: [0, 1, 0, 1],
  });
  const onSubmit = async () => {
    const { problemCnt, categories, difficulty } = queryOptions;
    if (problemCnt < 1 || problemCnt > 10) {
      alert('1~10 숫자를 입력해주세요.');
    } else if (problemCnt == 0 || problemCnt == '') {
      alert('문제 개수를 입력하세요.');
    } else if (categories.length === 0) {
      alert('카테고리를 선택하세요.');
    } else {
      const low = 5 * difficulty[0] + difficulty[1];
      const high = 5 * difficulty[2] + difficulty[3];

      const problemDatas = await API.post('problem', {
        problemCnt: problemCnt,
        selectedCate: categories,
        selectedDifficulty: [low, high],
      });
      setQueryResults(problemDatas.res);
    }
  };

  return (
    <Container>
      <SubContainer>
        <Difficulty
          queryOptions={queryOptions}
          setQueryOptions={setQueryOptions}
        />
        <ProblemCount
          queryOptions={queryOptions}
          setQueryOptions={setQueryOptions}
        />
      </SubContainer>
      <MainContainer>
        <CategoryContainer
          queryOptions={queryOptions}
          setQueryOptions={setQueryOptions}
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

export default PickerPage;
