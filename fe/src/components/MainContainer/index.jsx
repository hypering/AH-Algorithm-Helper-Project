import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import SideNav from './SideNav';
import Main from './Main';
import { Container } from './style';
import { UserDispatch } from '../../App';
import loadLoginInfo from '../../hooks/loadLoginInfo';
const MainContainer = ({ curIp }) => {
  const dispatch = useContext(UserDispatch);
  const [value, setValue] = useState(0);
  useEffect(() => {
    loadLoginInfo(dispatch);
  }, []);
  return (
    <Container>
      <SideNav value={value} setValue={setValue} />
      <Main curIp={curIp} />
    </Container>
  );
};

export default MainContainer;
