import React from "react";
import {
  Container,
  Categories,
  Category,
  Subtitle,
  CategoriesScroll,
} from "./style";
const CategoryContainer = () => {
  return (
    <Container>
      <Subtitle>알고리즘 분류 선택</Subtitle>
      <CategoriesScroll>
        <Categories>
          <Category>구현</Category>
          <Category>DP</Category>
          <Category>브루트포스</Category>
          <Category>DFS</Category>
          <Category>BFS</Category>
          <Category>그리디</Category>
          <Category>다익스트라</Category>
          <Category>시뮬레이션</Category>
          <Category>백트래킹</Category>
        </Categories>
      </CategoriesScroll>
    </Container>
  );
};
export default CategoryContainer;
