import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SideNav from './SideNav';
import Main from './Main';
import { Container } from './style';

const MainContainer = () => {
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;
    // const searchParams = new URLSearchParams(location.search);
    console.log(currentPath);
  }, [location]);

  const [value, setValue] = useState(0);
  return (
    <Container>
      <SideNav value={value} setValue={setValue} />
      <Main />
    </Container>
  );
};

export default MainContainer;
