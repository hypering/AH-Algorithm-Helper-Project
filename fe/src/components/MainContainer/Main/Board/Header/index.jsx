import React, { useContext } from 'react';
import {
  Container,
  HeaderLeft,
  HeaderRight,
  SelectBox,
  InputBox,
  ButtonBox,
  SearchBox,
} from './style';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IsLoginedState } from '../../../../../App';
const Header = ({
  url,
  setUrl,
  value,
  setValue,
  searchType,
  setSearchType,
}) => {
  const isLogined = useContext(IsLoginedState);
  const history = useHistory();
  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
    setUrl(`/board/search?type=${searchType}&value=${value}`);
  };

  const onTypeChange = (e) => {
    setSearchType(e.target.value);
  };
  const onWriteClick = (e) => {
    if (isLogined && isLogined.isLogined) history.push('/board/write');
    else alert('로그인을 후 글쓰기가 가능합니다.');
  };
  return (
    <Container>
      <HeaderLeft>
        <h5>자유게시판</h5>
        <div>자유게시판에 오신 것을 환영합니다!</div>
      </HeaderLeft>
      <HeaderRight>
        <FontAwesomeIcon
          icon={faPenSquare}
          color="#707070"
          onClick={onWriteClick}
        />
        <SearchBox>
          <SelectBox value={searchType} name="target" onChange={onTypeChange}>
            <option value="tag">해쉬태그</option>
            <option value="author">작성자</option>
          </SelectBox>
          <InputBox
            type="text"
            placeholder="검색"
            value={value}
            onChange={onChange}
          />
          <Link to={url}>
            <ButtonBox>
              <FontAwesomeIcon icon={faSearch} color="#707070" />
            </ButtonBox>
          </Link>
        </SearchBox>
      </HeaderRight>
    </Container>
  );
};

export default Header;
