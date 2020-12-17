import React from "react";
import { SideContainer, Menus, Menu } from "./style";
const SideNav = () => {
  return (
    <SideContainer>
      <Menus>
        <Menu>문제 뽑기</Menu>
        <Menu>대회 일정</Menu>
      </Menus>
    </SideContainer>
  );
};

export default SideNav;
