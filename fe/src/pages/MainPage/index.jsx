import React, { useEffect } from 'react';
import SideNav from 'components/MainContainer/SideNav';
import Main from 'components/MainContainer/Main';
import { Container } from './style';
import { useUserDispatch } from '../../context';
import API from '../../lib/api';

const loadLoginInfo = async (dispatch) => {
  const result = await API.get('user');
  dispatch({ type: 'SET_IS_LOGINED', payload: result });
};

const MainPage = ({ curIp }) => {
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

export default MainPage;
