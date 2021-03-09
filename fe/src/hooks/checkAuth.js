import { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUserDispatch } from '../context/index';
import API from '../lib/api';

const useCheckAuth = () => {
  const history = useHistory();
  const location = useLocation();
  const pathsToCheck = ['/account/edit', '/', '/account/signup'];
  const dispatch = useUserDispatch();

  const checkAuth = async () => {
    if (!pathsToCheck.includes(location.pathname)) return;
    try {
      const result = await API.get('user');
      dispatch({ type: 'SET_IS_LOGINED', payload: result });
      if (result.isLogined) {
        if (location.pathname == '/account/signup') history.push('/picker');
        else if (location.pathname == '/') history.push('/picker');
      } else {
        if (location.pathname == '/account/edit') history.push('/');
      }
    } catch (error) {
      alert('로그인이 필요합니다!');
      history.push('/login');
    }
  };

  useEffect(() => {
    checkAuth();
  }, [location.pathname]);
};
export default useCheckAuth;
