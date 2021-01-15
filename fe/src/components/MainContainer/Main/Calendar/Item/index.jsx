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
  SvgIcon,
} from './style';

const Item = ({ id, value }) => {
  let num = 0;

  const onWheel = (e) => {
    const container = document.getElementById(id);
    const containerScrollPosition = document.getElementById(id).scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: 'smooth',
    });
  };

  return (
    <ItemContainer id={id} onWheel={onWheel}>
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

              const deleteOnClick = async (e) => {
                e.stopPropagation();
                const conFirm = confirm('정말 대회를 삭제하시겠습니까?');
                if (conFirm === false) return;

                const resopnse = await fetch(
                  `${process.env.BASE_URL}/contest/delete`,
                  {
                    method: 'post',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    mode: 'cors',
                    credentials: 'include',
                    body: JSON.stringify({
                      contest_id: ele._id,
                    }),
                  }
                );
                if (resopnse.status === 200) {
                  alert('해당 대회가 삭제되었습니다.');
                  window.location.href = '/calendar';
                } else {
                  alert('해당 대회가 삭제되지 않았습니다.');
                }
              };
              return (
                <ContestWrap onClick={onClick} key={ele.title}>
                  <ContestTitle>{ele.title}</ContestTitle>
                  <ContestDate>{getDate(ele.startDate)}</ContestDate>
                  <ContestTimer>{diffTime(value)}</ContestTimer>
                  <SvgIcon onClick={deleteOnClick}>
                    <g>
                      <path
                        d="M20.746
                  5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25
                  1.01-2.25 2.25v.986h-3.75c-.414
                  0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193
                  1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834
                  2.664-2.072l1.577-13.217h.368c.414 0
                  .75-.336.75-.75s-.335-.75-.75-.75zM8.496
                  4.25c0-.413.337-.75.75-.75h5.5c.413 0
                  .75.337.75.75v.986h-7V4.25zm8.822
                  15.48c-.1.55-.664.795-1.18.795H7.854c-.517
                  0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"
                      />
                    </g>
                  </SvgIcon>
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
