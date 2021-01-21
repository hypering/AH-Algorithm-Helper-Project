import React from 'react';
import { NavLink } from 'react-router-dom';
import { SideContainer, Menus, Menu } from './style';

const SideNav = () => {
  return (
    <SideContainer>
      <Menus>
        <NavLink to="/picker">
          <Menu>문제 뽑기</Menu>
        </NavLink>
        <NavLink to="/calendar">
          <Menu>대회 일정</Menu>
        </NavLink>
        <NavLink to="/board">
          <Menu>커뮤니티</Menu>
        </NavLink>
      </Menus>
    </SideContainer>
  );
};

export default SideNav;
