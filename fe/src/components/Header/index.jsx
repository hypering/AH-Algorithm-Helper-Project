import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from './style';
import { faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUserState, useUserDispatch } from '../../context/index';
import API from '../../lib/api';

const Header = () => {
  const isLogined = useUserState();
  const dispatch = useUserDispatch();
  const history = useHistory();

  const onLogOutClick = async () => {
    await API.get('user/logout');
    dispatch({
      type: 'SET_IS_LOGINED',
      payload: { isLogined: false, userKey: '', userId: '', profile: '' },
    });

    history.push('/');
    alert('로그아웃 되었습니다.');
  };

  return (
    <Container>
      <div className="logo">
        <Link to="/">Algorithm Helper</Link>
      </div>

      <div className="buttons">
        {isLogined && isLogined.isLogined ? (
          <FontAwesomeIcon
            icon={faSignOutAlt}
            size="2x"
            color="#707070"
            onClick={onLogOutClick}
          />
        ) : (
          <Link to="/">
            <FontAwesomeIcon icon={faSignInAlt} size="2x" color="#707070" />
          </Link>
        )}
      </div>
    </Container>
  );
};

export default Header;
