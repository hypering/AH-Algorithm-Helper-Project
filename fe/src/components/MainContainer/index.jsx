import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SideNav from './SideNav';
import Main from './Main';
import { Container } from './style';

const MainContainer = ({ curIp }) => {
  const location = useLocation().pathname.substr(1);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (location.includes('picker')) setValue(0);
    if (location.includes('calendar')) setValue(1);
    if (location.includes('board')) setValue(2);
  }, [location]);

  return (
    <Container>
      <SideNav value={value} setValue={setValue} />
      <Main curIp={curIp} />
    </Container>
  );
};

export default MainContainer;
