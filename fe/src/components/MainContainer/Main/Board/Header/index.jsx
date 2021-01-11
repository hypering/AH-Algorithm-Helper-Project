import React from 'react';
import {
  Container,
  HeaderWrap,
  SelectBox,
  InputBox,
  ButtonBox,
  SearchBox,
} from './style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
const Header = ({
  url,
  setUrl,
  value,
  setValue,
  searchType,
  setSearchType,
}) => {
  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
    setUrl(`/board/search?type=${searchType}&value=${value}`);
  };

  const onTypeChange = (e) => {
    setSearchType(e.target.value);
  };
  return (
    <Container>
      <HeaderWrap>
        <h5>
          <a href="/">자유</a>
        </h5>
        <Link to="/board/write">
          <FontAwesomeIcon icon={faPenSquare} color="#707070" />
        </Link>
      </HeaderWrap>
      <HeaderWrap>
        <div>자유게시판에 오신 것을 환영합니다!</div>
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
      </HeaderWrap>
    </Container>
  );
};

export default Header;
