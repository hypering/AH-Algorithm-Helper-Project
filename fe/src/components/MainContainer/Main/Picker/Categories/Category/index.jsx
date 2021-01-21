import React, { useState } from 'react';

import { Container } from './style';

const Category = ({ name, selectedCate, setSelctedCate }) => {
  const [selected, setSelected] = useState(false);
  const onClick = () => {
    if (selectedCate.filter((element) => name === element).length >= 1) {
      setSelctedCate([...selectedCate.filter((element) => name !== element)]);
    } else {
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
