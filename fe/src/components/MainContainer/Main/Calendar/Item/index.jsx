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

const diffTime = (date) => {
  const contestDate = new Date(date).getTime();
  const now = new Date().getTime();
  console.log(new Date(date));
  console.log(new Date());
  let diff = Math.abs(contestDate - now);
  const day = Math.round(diff / 86400000);
  if (day >= 3) {
    return `Before start ${day} days`;
  }
  const h = Math.floor(diff / 3600000);
  diff %= 3600000;
  const m = Math.floor(diff / 60000);
  diff %= 60000;
  const s = Math.floor(diff / 1000);
  return `Before start ${h}:${m}:${s}`;
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
                  <ContestTimer>{diffTime(ele.startDate)}</ContestTimer>
                </ContestWrap>
              );
            }
          })}
      </Container>
    </ItemContainer>
  );
};

export default Item;
