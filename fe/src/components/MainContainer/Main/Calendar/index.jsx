import React, { useState, useCallback } from 'react';
import Item from './Item';
import ContestModal from './ContestModal';
import { Container, ContestButton } from './style';
import useGetContestDate from '../../../../hooks/useGetContestData';

const Calendar = () => {
  const [visible, setvisible] = useState(false);
  const [value, setValue] = useState(null);
  const onClick = useCallback(() => {
    setvisible(true);
  });

  useGetContestDate(setValue);

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
