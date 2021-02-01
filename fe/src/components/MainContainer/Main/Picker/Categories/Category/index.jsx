import React, { useState } from 'react';

import { Container } from './style';

const Category = ({ name, queryOptions, setQueryOptions }) => {
  const [selected, setSelected] = useState(false);
  const onClick = () => {
    if (
      queryOptions.categories.filter((element) => name === element).length >= 1
    ) {
      setQueryOptions({
        ...queryOptions,
        categories: [
          queryOptions.categories.filter((element) => name !== element),
        ],
      });
    } else {
      setQueryOptions({
        ...queryOptions,
        categories: [...queryOptions.categories, name],
      });
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
