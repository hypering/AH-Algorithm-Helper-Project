import React from 'react';
import { Container, HeaderLeft, HeaderRight } from './style';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { useUserState } from '../../../../../context/index';
import SearchBar from '../SearchBar';
const Header = ({
  url,
  setUrl,
  value,
  setValue,
  searchType,
  setSearchType,
  title,
  description,
}) => {
  const isLogined = useUserState();
  const history = useHistory();

  const onWriteClick = () => {
    if (isLogined && isLogined.isLogined) history.push('/board/write');
    else alert('로그인을 후 글쓰기가 가능합니다.');
  };
  return (
    <Container>
      <HeaderLeft>
        <h5>{title}</h5>
        <div>{description}</div>
      </HeaderLeft>
      <HeaderRight>
        <FontAwesomeIcon
          icon={faPenSquare}
          color="#707070"
          onClick={onWriteClick}
        />
        <SearchBar
          url={url}
          setUrl={setUrl}
          value={value}
          setValue={setValue}
          searchType={searchType}
          setSearchType={setSearchType}
        />
      </HeaderRight>
    </Container>
  );
};

export default Header;
