import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import SideNav from './SideNav';
import Main from './Main';
import { Container } from './style';
import { UserDispatch } from '../../App';
const MainContainer = ({ curIp }) => {
  const dispatch = useContext(UserDispatch);
  const location = useLocation().pathname.substr(1);
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (location.includes('picker')) setValue(0);
    if (location.includes('calendar')) setValue(1);
    if (location.includes('board')) setValue(2);
  }, [location]);
  useEffect(() => {
    fetch(`${process.env.BASE_URL}/user`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: 'SET_IS_LOGINED', payload: json });
      });
  }, []);
  return (
    <Container>
      <SideNav value={value} setValue={setValue} />
      <Main curIp={curIp} />
    </Container>
  );
};

export default MainContainer;
