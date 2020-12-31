import React, { useState, useEffect } from 'react';
import { getDate, diffTime } from '../../../../../lib/getTimer';
import {
  Title,
  Container,
  ContestWrap,
  ContestAlram,
  ItemContainer,
  ContestTitle,
  ContestDate,
  ContestTimer,
} from './style';

const Item = ({ id, value }) => {
  let num = 0;
  return (
    <ItemContainer>
      <Title>{id}</Title>
      <Container>
        {value &&
          value.map((ele) => {
            if (ele.name == id) {
              num += 1;
              const [value, setValue] = useState(
                parseInt(new Date(ele.startDate).getTime()) -
                  parseInt(new Date().getTime())
              );

              useEffect(() => {
                const countDown = setInterval(() => {
                  setValue(value - 1000);
                }, 1000);
                return () => clearInterval(countDown);
              }, [value]);

              const onClick = () => {
                window.open(ele.url);
              };
              return (
                <ContestWrap onClick={onClick} key={ele.title}>
                  <ContestTitle>{ele.title}</ContestTitle>
                  <ContestDate>{getDate(ele.startDate)}</ContestDate>
                  <ContestTimer>{diffTime(value)}</ContestTimer>
                </ContestWrap>
              );
            }
          })}
        {num == 0 && <ContestAlram>대회 일정이 없습니다.</ContestAlram>}
      </Container>
    </ItemContainer>
  );
};

export default Item;
