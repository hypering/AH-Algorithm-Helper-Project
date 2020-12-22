import React from 'react';
import ResEntity from './ResEntity/index.jsx';
import { ResContainer, Results, Subtitle } from './style.js';
import './index.css';
const Result = () => {
  return (
    <ResContainer>
      <Subtitle>문제 뽑기 결과</Subtitle>
      <Results>
        <div className="resultHeader">
          <span>난이도 </span>
          <span>번호 </span>
          <span>카테고리</span>
        </div>
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
        <ResEntity num="1001" tier="Bronze 1" cate="구현" />
      </Results>
    </ResContainer>
  );
};

export default Result;
