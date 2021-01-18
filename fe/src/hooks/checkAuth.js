import { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserDispatch } from '../App';
const useCheckAuth = () => {
  const history = useHistory();
  const location = useLocation();
  const pathsToCheck = ['/account/edit', '/', '/account/signup'];
  const dispatch = useContext(UserDispatch);
  const checkAuth = async () => {
    if (!pathsToCheck.includes(location.pathname)) return;

    try {
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
          if (!json.isLogined) {
            history.push('/');
          } else {
            if (location.pathname == '/') history.push('/picker');
            if (location.pathname == '/account/signup') history.push('/picker');
          }
        });
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
