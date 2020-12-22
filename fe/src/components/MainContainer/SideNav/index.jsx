import React, { useRef, useEffect } from 'react';
import { SideContainer, Menus, Menu } from './style';

const PICKER_NUMBER = 0;
const CALENDAR_NUMBER = 1;
const NOTICE_NUMBER = 2;

const SideNav = ({ setValue }) => {
  const pickerBtn = useRef();
  const calendarBtn = useRef();
  const noticeBtn = useRef();
  const pickerOnclick = () => {
    setValue(PICKER_NUMBER);
    pickerBtn.current.style.color = 'red';
    calendarBtn.current.style.color = 'black';
    noticeBtn.current.style.color = 'black';
  };
  const calendarOnclick = () => {
    setValue(CALENDAR_NUMBER);
    calendarBtn.current.style.color = 'red';
    pickerBtn.current.style.color = 'black';
    noticeBtn.current.style.color = 'black';
  };
  const noticeBoardOnclick = () => {
    setValue(NOTICE_NUMBER);
    calendarBtn.current.style.color = 'black';
    pickerBtn.current.style.color = 'black';
    noticeBtn.current.style.color = 'red';
  };
  useEffect(() => {
    pickerBtn.current.style.color = 'red';
    calendarBtn.current.style.color = 'black';
    noticeBtn.current.style.color = 'black';
  }, []);

  return (
    <SideContainer>
      <Menus>
        <Menu onClick={pickerOnclick} ref={pickerBtn}>
          문제 뽑기
        </Menu>
        <Menu onClick={calendarOnclick} ref={calendarBtn}>
          대회 일정
        </Menu>
        <Menu onClick={noticeBoardOnclick} ref={noticeBtn}>
          커뮤니티
        </Menu>
      </Menus>
    </SideContainer>
  );
};

export default SideNav;
