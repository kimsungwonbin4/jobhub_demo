import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SHOW_MODAL, SHOW_MODAL_SIGNUP } from '../reducers/modal';

import Link from 'next/link';
import styled from 'styled-components';

import { ButtonLink } from '../components/shared/Button';
import { IconLogin } from '../components/shared/Icon';

import HeaderSearchMenu from '../components/HeaderSearchMenu';
import HeaderProfile from '../components/HeaderProfile';
import PopupBtns from '../components/PopupBtns';
import SearchBar from '../components/SearchBar';

import ModalLoginForm from '../containers/ModalLoginForm';
import ModalSignUpForm from './ModalSignUpForm';

const HeaderFix = styled.div`
  z-index: 5;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 0 16px;
  background: url(/static/img/header-line.png) repeat-x top center;
  background-size: 1280px, 6px;
  background-color: #FFF;
  box-shadow: 0 3px 3px -3px #CCC;
`;

const HeaderWapper = styled.div`
  position: relative;
  width: 944px;
  margin: 0 auto;
`;


const HeaderTop = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.a`
  
`;



const HeaderSub = styled.div`
  margin-top: 20px;  
`;


const HeaderSubMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
`;


const LoginBtn = styled.div`
  
`;

const SignUpBtn = styled.div`
  
`;

const HeaderAction = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBarWapper = styled.div`
  display: flex;
  flex: 1;
  margin-left: 54px;
`;

const SignUpBtnWrapper = styled.div`
  margin-left: 32px;
`;

const PopupBtnsWrapper = styled.div`
  margin-left: 30px;
`;


const Header = () => {
  // LOGIN STATE
  const { me } = useSelector(state => state.user);
  console.log(me);


  // MODAL
  const { modalIsOpen } = useSelector(state => state.modal);
  const { modalSignUpIsOpen } = useSelector(state => state.modal);

  const dispatch = useDispatch();
  const onLogin = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: SHOW_MODAL,
    })
  }, []);

  const onSignUp = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: SHOW_MODAL_SIGNUP,
    })
  }, []);

  return (
    <>
      <HeaderFix>
        <HeaderWapper>
          <HeaderTop>
            <Link href="/">
              <HeaderLogo>
                <img src="/static/img/logo.png" width="105" height="16" alt="" />
              </HeaderLogo>
            </Link>
            <SearchBarWapper>
              <SearchBar />
            </SearchBarWapper>
          </HeaderTop>
          <HeaderSub>
            <HeaderSubMenu>
              <HeaderSearchMenu />
              {
                me ?
                  <HeaderAction>
                    <HeaderProfile />
                    <PopupBtnsWrapper>
                      <PopupBtns />
                    </PopupBtnsWrapper>
                  </HeaderAction>
                  :
                  <HeaderAction>
                    <LoginBtn>
                      <ButtonLink type="login" size="inline" onClick={onLogin}>
                        <IconLogin />ログイン
                    </ButtonLink>
                    </LoginBtn>
                    <SignUpBtnWrapper>
                      <SignUpBtn>
                        <ButtonLink type="action" size="w160_h38_f16" onClick={onSignUp}>新規登録（無料）</ButtonLink>
                      </SignUpBtn>
                    </SignUpBtnWrapper>
                  </HeaderAction>
              }
            </HeaderSubMenu>
          </HeaderSub>
        </HeaderWapper>
      </HeaderFix>
      {modalIsOpen && <ModalLoginForm />}
      {modalSignUpIsOpen && <ModalSignUpForm />}
    </>
  );
};

export default Header;