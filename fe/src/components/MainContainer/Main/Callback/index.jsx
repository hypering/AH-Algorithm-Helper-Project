import React, { useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { UserDispatch } from '../../../../App';

const Callback = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const code = searchParams.get('code');
  const dispatch = useContext(UserDispatch);
  const history = useHistory();

  const getHitHubLogin = async (code) => {
    fetch('http://127.0.0.1:4000/user/github', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({
        code,
      }),
    }).then((res) => {
      history.push('/picker');
      dispatch({ type: 'SET_IS_LOGINED', payload: true });
    });
  };

  useEffect(() => {
    getHitHubLogin(code);
  }, []);

  return <div />;
};

export default Callback;
