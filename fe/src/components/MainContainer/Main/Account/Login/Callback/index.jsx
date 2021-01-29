import React, { useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { UserDispatch } from '../../../../../../App';

const Callback = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const code = searchParams.get('code');
  const dispatch = useContext(UserDispatch);
  const history = useHistory();

  const getHitHubLogin = async (code) => {
    fetch(`${process.env.BASE_URL}/user/github`, {
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
    })
      .then((response) => response.json())
      .then((json) => {
        history.push('/picker');
        dispatch({ type: 'SET_IS_LOGINED', payload: json });
      });
  };

  useEffect(() => {
    getHitHubLogin(code);
  }, []);

  return <div />;
};

export default Callback;
