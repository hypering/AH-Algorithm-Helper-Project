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
    pickerBtn.current.style.color = 'white';
    pickerBtn.current.style.backgroundColor = '#707070';
    calendarBtn.current.style.color = '#707070';
    calendarBtn.current.style.backgroundColor = 'white';
    noticeBtn.current.style.color = '#707070';
    noticeBtn.current.style.backgroundColor = 'white';
  };
  const calendarOnclick = () => {
    setValue(CALENDAR_NUMBER);
    pickerBtn.current.style.color = '#707070';
    pickerBtn.current.style.backgroundColor = 'white';
    calendarBtn.current.style.color = 'white';
    calendarBtn.current.style.backgroundColor = '#707070';
    noticeBtn.current.style.color = '#707070';
    noticeBtn.current.style.backgroundColor = 'white';
  };
  const noticeBoardOnclick = () => {
    setValue(NOTICE_NUMBER);
    pickerBtn.current.style.backgroundColor = 'white';
    pickerBtn.current.style.color = '#707070';
    calendarBtn.current.style.backgroundColor = 'white';
    calendarBtn.current.style.color = '#707070';
    noticeBtn.current.style.color = 'white';
    noticeBtn.current.style.backgroundColor = '#707070';
  };
  useEffect(() => {
    pickerBtn.current.style.color = 'white';
    pickerBtn.current.style.backgroundColor = '#707070';
    calendarBtn.current.style.color = '#707070';
    calendarBtn.current.style.backgroundColor = 'white';
    noticeBtn.current.style.color = '#707070';
    noticeBtn.current.style.backgroundColor = 'white';
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
