import React, { useState, useCallback, useContext } from 'react';
import Item from 'components/MainContainer/Main/Calendar/Item';
import ContestModal from 'components/MainContainer/Main/Calendar/ContestModal';
import { Container, ContestButton } from 'pages/Calendar/style';
import useGetContestDate from 'hooks/useGetContestData';
import { IsLoginedState } from 'App';

const Calendar = () => {
  const [visible, setvisible] = useState(false);
  const [value, setValue] = useState(null);
  const onClick = useCallback(() => {
    setvisible(true);
  }, [value]);
  const state = useContext(IsLoginedState);
  useGetContestDate(setValue);

  return (
    <Container>
      <ContestModal visible={visible} setvisible={setvisible} />
      <Item id="baekjoon" value={value} />
      <Item id="codeforces" value={value} />
      <Item id="atcoder" value={value} />
      <Item id="another" value={value} />
      {state.isLogined === true && (
        <ContestButton onClick={onClick}>대회 등록</ContestButton>
      )}
    </Container>
  );
};

export default Calendar;
