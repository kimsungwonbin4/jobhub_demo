
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';


const Search = styled.div`
  position: relative;
  flex: 1;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #F2F2F2;
  background-image: url(/static/img/icons/search.png);
  background-repeat: no-repeat;
  background-position: center right 14px;
  background-size: 18px, 21px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  color: #333;
  border: none;
  outline: none;
  background: transparent;
  appearance: none;
  &.isActive {
    box-shadow: #1A94E0 0 0 0 2px;
    border-radius: 5px;
  }
`;

const SearchList = styled.ul`
  display: none;
  position: absolute;
  z-index: 99;
  top: 42px;
  left: 0;
  width: 428px;
  height: 460px;
  background: #FFF;
  box-shadow: #CCC 0 0 5px -1px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  &.isActive {
    display: block;
  }
`;

const Item = styled.li`
  margin-top: 16px;
  &:first-child {
    margin-top: 20px;
  }
`;

const SearchTitle = styled.div`
  margin-bottom: 6px;
  padding: 0 16px;
  color: #999;
`;

const SearchLink = styled.a`
  display: block;
  box-sizing: border-box;
  padding: 16px;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #F2F2F2;
  }
`;


const useFocus = (ref) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const onFocus = () => setState(true);
    const onBlur = (e) => {
      setState(false);
    }
    const onKeyPress = (e) => {
      setState(true);
      if (e.key === 'Enter') {
        setState(false);
      } 
    }

    ref.current.addEventListener('focus', onFocus);
    ref.current.addEventListener('blur', onBlur);
    ref.current.addEventListener('keypress', onKeyPress);

    return () => {
      ref.current.removeEventListener('focus', onFocus);
    }

  }, []);

  return state;
}

const SearchBar = () => {

  const [searchInput, setSearchInput] = useState('');

  const ref = useRef();
  const focused = useFocus(ref);
  const onSubmitForm = (e) => {
    e.preventDefault();
    setSearchInput('');
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  return (
    <Search>
      <form onSubmit={onSubmitForm}>
        <Input 
          placeholder='キーワードで仕事・ユーザーを検索' 
          ref={ref} 
          className={focused && `isActive`} 
          value={searchInput}
          onChange={handleChange}
        />
      </form>
      <SearchList className={focused && `isActive`}>
        <Item>
          <SearchTitle>人気ワード</SearchTitle>
            <SearchLink>注目</SearchLink>
            <SearchLink>注目</SearchLink>
        </Item>
        <Item>
          <SearchTitle>人気ワード</SearchTitle>
            <SearchLink>注目</SearchLink>
            <SearchLink>注目</SearchLink>
        </Item>
      </SearchList>
    </Search>
  );
};

export default SearchBar;