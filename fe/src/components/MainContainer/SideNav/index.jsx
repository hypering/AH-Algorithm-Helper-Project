import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SideContainer, Menus, Menu } from './style';

const PICKER_NUMBER = 0;
const CALENDAR_NUMBER = 1;
const BOARD_NUMBER = 2;

const ChangeColor = (selected, ...notSelected) => {
  selected.current.style.color = 'white';
  selected.current.style.backgroundColor = '#707070';
  notSelected[0].current.style.color = '#707070';
  notSelected[0].current.style.backgroundColor = 'white';
  notSelected[1].current.style.color = '#707070';
  notSelected[1].current.style.backgroundColor = 'white';
};

const setSelector = (number, pickerBtn, calendarBtn, boardBtn) => {
  if (number == PICKER_NUMBER) {
    ChangeColor(pickerBtn, calendarBtn, boardBtn);
  } else if (number == CALENDAR_NUMBER) {
    ChangeColor(calendarBtn, pickerBtn, boardBtn);
  } else if (number == BOARD_NUMBER) {
    ChangeColor(boardBtn, pickerBtn, calendarBtn);
  }
};

const SideNav = ({ value, setValue }) => {
  const pickerBtn = useRef();
  const calendarBtn = useRef();
  const boardBtn = useRef();

  const pickerOnclick = () => setValue(PICKER_NUMBER);
  const calendarOnclick = () => setValue(CALENDAR_NUMBER);
  const BoardOnclick = () => setValue(BOARD_NUMBER);

  useEffect(() => {
    setSelector(value, pickerBtn, calendarBtn, boardBtn);
  }, [value]);

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
