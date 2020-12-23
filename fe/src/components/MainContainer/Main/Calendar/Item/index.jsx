import React from 'react';
import {
  Title,
  Container,
  ContestWrap,
  ItemContainer,
  UndeLine,
} from './style';

const Item = ({ id, value }) => {
  return (
    <ItemContainer>
      <Title>{id}</Title>
      <Container>
        {value &&
          value.map((ele) => {
            if (ele.name == id) {
              return (
                <ContestWrap>
                  <div>{ele.title}</div>
                  <UndeLine />
                  <div>{ele.startDate}</div>
                </ContestWrap>
              );
            }
          })}
      </Container>
    </ItemContainer>
  );
};

export default Item;
