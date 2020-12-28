import React from 'react';
import {
  Title,
  Container,
  ContestWrap,
  ItemContainer,
  ContestTitle,
  ContestDate,
  ContestTimer,
} from './style';

const pad = (number, length) => {
  var str = '' + number;
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
};

const getDate = (date) => {
  const currentDate = new Date(date);
  const rst =
    pad(currentDate.getFullYear(), 2) +
    '/' +
    pad(currentDate.getMonth() + 1, 2) +
    '/' +
    pad(currentDate.getDate(), 2) +
    ' ' +
    pad(currentDate.getHours(), 2) +
    ':' +
    pad(currentDate.getMinutes(), 2);
  return rst;
};

const Item = ({ id, value }) => {
  return (
    <ItemContainer>
      <Title>{id}</Title>
      <Container>
        {value &&
          value.map((ele) => {
            if (ele.name == id) {
              const onClick = () => {
                window.open(ele.url);
              };
              return (
                <ContestWrap onClick={onClick}>
                  <ContestTitle>{ele.title}</ContestTitle>
                  <ContestDate>{getDate(ele.startDate)}</ContestDate>
                  <ContestTimer>{getDate(ele.startDate)}</ContestTimer>
                </ContestWrap>
              );
            }
          })}
      </Container>
    </ItemContainer>
  );
};

export default Item;
