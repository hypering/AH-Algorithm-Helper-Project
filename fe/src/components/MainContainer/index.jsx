import React, { useEffect, useContext } from 'react';
import SideNav from 'components/MainContainer/SideNav';
import Main from 'components/MainContainer/Main';
import { Container } from 'components/MainContainer/style';
import { useUserDispatch } from '../../context/index';
import API from '../../lib/api';

const loadLoginInfo = async (dispatch) => {
  const result = await API.get('user');
  dispatch({ type: 'SET_IS_LOGINED', payload: result });
};

const MainContainer = ({ curIp }) => {
  const dispatch = useUserDispatch();

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
