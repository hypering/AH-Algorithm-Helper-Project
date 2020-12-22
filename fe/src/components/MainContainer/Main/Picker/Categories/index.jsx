import React from 'react';
import { Container, Categories, Subtitle } from './style';
import Category from './Category/index';
const CategoryContainer = ({ selectedCate, setSelectedCate }) => {
  return (
    <Container>
      <Subtitle>알고리즘 분류 선택</Subtitle>
      <Categories>
        <Category
          name="구현"
          selectedCate={selectedCate}
          setSelctedCate={setSelectedCate}
        ></Category>
        <Category
          name="브루트포스"
          selectedCate={selectedCate}
          setSelctedCate={setSelectedCate}
        ></Category>
        <Category
          name="DFS"
          selectedCate={selectedCate}
          setSelctedCate={setSelectedCate}
        ></Category>
        <Category
          name="BFS"
          selectedCate={selectedCate}
          setSelctedCate={setSelectedCate}
        ></Category>
        <Category
          name="그리디"
          selectedCate={selectedCate}
          setSelctedCate={setSelectedCate}
        ></Category>
        <Category
          name="다익스트라"
          selectedCate={selectedCate}
          setSelctedCate={setSelectedCate}
        ></Category>
        <Category
          name="시뮬레이션"
          selectedCate={selectedCate}
          setSelctedCate={setSelectedCate}
        ></Category>
        <Category
          name="백트래킹"
          selectedCate={selectedCate}
          setSelctedCate={setSelectedCate}
        ></Category>
        <Category
          name="이분탐색"
          selectedCate={selectedCate}
          setSelctedCate={setSelectedCate}
        ></Category>
        <Category
          name="그래프이론"
          selectedCate={selectedCate}
          setSelctedCate={setSelectedCate}
        ></Category>
        <Category
          name="세그멘테이션"
          selectedCate={selectedCate}
          setSelctedCate={setSelectedCate}
        ></Category>
      </Categories>
    </Container>
  );
};
export default CategoryContainer;
