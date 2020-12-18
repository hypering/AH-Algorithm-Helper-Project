import React, { useRef } from "react";
import { SideContainer, Menus, Menu } from "./style";
const SideNav = ({ setValue }) => {
  const PickerBtn = useRef();
  const CalendarBtn = useRef();
  const PickerOnclick = () => {
    setValue(0);
    PickerBtn.current.style.color = "red";
    CalendarBtn.current.style.color = "black";
  };
  const CalendarOnclick = () => {
    setValue(1);
    CalendarBtn.current.style.color = "red";
    PickerBtn.current.style.color = "black";
  };

  return (
    <SideContainer>
      <Menus>
        <Menu onClick={PickerOnclick} ref={PickerBtn}>
          문제 뽑기
        </Menu>
        <Menu onClick={CalendarOnclick} ref={CalendarBtn}>
          대회 일정
        </Menu>
      </Menus>
    </SideContainer>
  );
};

export default SideNav;
