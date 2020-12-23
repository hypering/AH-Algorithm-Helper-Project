import React, { useState, useEffect } from 'react';
import Item from './Item';
import ContestModal from './ContestModal';
import { Container, ContestButton } from './style';

const Calendar = () => {
  const [visible, setvisible] = useState(false);
  const [value, setValue] = useState(null);
  const onClick = () => {
    setvisible(true);
  };
  useEffect(() => {
    fetch('http://localhost:4000/contest', {
      method: 'get',
    })
      .then((response) => response.json())
      .then((contest) => {
        setValue(contest);
      });
  }, []);
  return (
    <Container>
      <ContestModal visible={visible} setvisible={setvisible} />
      <Item id="baekjoon" value={value} />
      <Item id="codeforces" value={value} />
      <Item id="atcoder" value={value} />
      <Item id="another" value={value} />
      <ContestButton onClick={onClick}>대회 등록</ContestButton>
    </Container>
  );
};

export default Calendar;
