import React, { useState } from "react";

import { Container } from "./style";

const Category = ({ name, selectedCate, setSelctedCate }) => {
  const [selected, setSelected] = useState(false);
  const onClick = (e) => {
    if (selectedCate.filter((element) => name === element).length >= 1) {
      console.log("선택 취소해야함");
      setSelctedCate([...selectedCate.filter((element) => name !== element)]);
    } else {
      console.log("선택해야함 ");
      setSelctedCate([...selectedCate, name]);
    }
    setSelected(!selected);
  };
  return (
    <Container name="name" onClick={onClick} selected={selected}>
      {name}
    </Container>
  );
};
export default Category;
