import React from 'react';
import ResEntity from './ResEntity/index.jsx';
// import ResEntity from './ResEntity/index.jsx';
import { ResContainer, ResultHeader, Results, Subtitle } from './style.js';

const Result = ({ queryResults }) => {
  return (
    <ResContainer>
      <Subtitle>문제 뽑기 결과</Subtitle>
      <ResultHeader>
        <span>난이도 </span>
        <span>번호 </span>
        <span>카테고리</span>
      </ResultHeader>
      <Results>
        <>
          {queryResults ? (
            queryResults.map((problem) => (
              <ResEntity
                key={problem.num}
                num={problem.num}
                tier={problem.level}
                cate={problem.category.toString()}
              />
            ))
          ) : (
            <></>
          )}
        </>
      </Results>
    </ResContainer>
  );
};

export default Result;
