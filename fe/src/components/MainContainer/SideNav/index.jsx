import React, { useRef, useEffect } from 'react';
import { SideContainer, Menus, Menu } from './style';
import { Link } from 'react-router-dom';
const PICKER_NUMBER = 0;
const CALENDAR_NUMBER = 1;
const BOARD_NUMBER = 2;

const SideNav = ({ setValue }) => {
  const pickerBtn = useRef();
  const calendarBtn = useRef();
  const boardBtn = useRef();
  const pickerOnclick = () => {
    setValue(PICKER_NUMBER);
    pickerBtn.current.style.color = 'white';
    pickerBtn.current.style.backgroundColor = '#707070';
    calendarBtn.current.style.color = '#707070';
    calendarBtn.current.style.backgroundColor = 'white';
    boardBtn.current.style.color = '#707070';
    boardBtn.current.style.backgroundColor = 'white';
  };
  const calendarOnclick = () => {
    setValue(CALENDAR_NUMBER);
    pickerBtn.current.style.color = '#707070';
    pickerBtn.current.style.backgroundColor = 'white';
    calendarBtn.current.style.color = 'white';
    calendarBtn.current.style.backgroundColor = '#707070';
    boardBtn.current.style.color = '#707070';
    boardBtn.current.style.backgroundColor = 'white';
  };
  const BoardOnclick = () => {
    setValue(BOARD_NUMBER);
    pickerBtn.current.style.backgroundColor = 'white';
    pickerBtn.current.style.color = '#707070';
    calendarBtn.current.style.backgroundColor = 'white';
    calendarBtn.current.style.color = '#707070';
    boardBtn.current.style.color = 'white';
    boardBtn.current.style.backgroundColor = '#707070';
  };
  useEffect(() => {
    pickerBtn.current.style.color = 'white';
    pickerBtn.current.style.backgroundColor = '#707070';
    calendarBtn.current.style.color = '#707070';
    calendarBtn.current.style.backgroundColor = 'white';
    boardBtn.current.style.color = '#707070';
    boardBtn.current.style.backgroundColor = 'white';
  }, []);

  return (
    <SideContainer>
      <Menus>
        <Link to="/picker">
          <Menu onClick={pickerOnclick} ref={pickerBtn}>
            문제 뽑기
          </Menu>
        </Link>{' '}
        <Link to="/calendar">
          <Menu onClick={calendarOnclick} ref={calendarBtn}>
            대회 일정
          </Menu>
        </Link>{' '}
        <Link to="/board">
          <Menu onClick={BoardOnclick} ref={boardBtn}>
            커뮤니티
          </Menu>
        </Link>
      </Menus>
    </SideContainer>
  );
};

export default SideNav;
