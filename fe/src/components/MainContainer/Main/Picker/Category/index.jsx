import React from "react";
import { Container, Categories, Category } from "./style";
const CategoryContainer = () => {
  return (
    <Container>
      알고리즘 분류 선택
      <Categories>
        <Category>구현</Category>
        <Category>DP</Category>
        <Category>브루트포스</Category>
        <Category>DFS</Category>
      </Categories>
    </Container>
  );
};
export default CategoryContainer;
