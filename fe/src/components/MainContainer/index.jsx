import React, { useEffect, useContext } from 'react';
import SideNav from 'components/MainContainer/SideNav';
import Main from 'components/MainContainer/Main';
import { Container } from 'components/MainContainer/style';
import { UserDispatch } from 'App';
import loadLoginInfo from 'hooks/loadLoginInfo';

const MainContainer = ({ curIp }) => {
  const dispatch = useContext(UserDispatch);

  useEffect(() => {
    loadLoginInfo(dispatch);
  }, []);

  return (
    <Container>
      <SideNav />
      <Main curIp={curIp} />
    </Container>
  );
};

export default MainContainer;
