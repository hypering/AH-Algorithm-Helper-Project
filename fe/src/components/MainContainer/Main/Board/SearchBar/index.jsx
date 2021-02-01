import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonBox, InputBox, SearchBox, SelectBox } from './style';
const SearchBar = ({
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
  };

  const onTypeChange = (e) => {
    setSearchType(e.target.value);
  };
  useEffect(() => {
    setUrl(`/search?type=${searchType}&value=${value}`);
  }, [url, value]);
  return (
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
      <NavLink to={url}>
        <ButtonBox>
          <FontAwesomeIcon icon={faSearch} color="#707070" />
        </ButtonBox>
      </NavLink>
    </SearchBox>
  );
};

export default SearchBar;
