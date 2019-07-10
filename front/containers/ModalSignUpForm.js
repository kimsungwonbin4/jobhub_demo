import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { HIDDEN_MODAL_SIGNUP } from '../reducers/modal';

import styled, { css } from 'styled-components';
import Link from 'next/link';

import ModalLayout from '../components/layout/ModalLayout'; 
import SnsBtnList from './SnsBtnList';
import ModalBg from '../components/modal/ModalBg';

import { Input } from '../components/shared/Input';
import { IconClose } from '../components/shared/Icon';
import { ButtonSubmit } from '../components/shared/Button';

const RegisterForm = styled.ul`
  margin-top: 20px;
`;

const Item = styled.li`
  display: block;
  &:not(:first-child) {
    margin-top: 16px;
  }
`;

const RegisterWrapper = styled.div`
  display: flex;
`;

const RegisterFormWrapper = styled.div`
  width: 326px;
  margin-left: 66px;
`;

const RegisterFormTitle = styled.div`
  font-size: 16px;
`;

const CrumbsWrapper = styled.div`
  margin-top: 34px;
`;

const Crumbs = styled.ul`
  display: flex;
  align-items: center;
  >li {
    &:not(&:first-child) {
      margin-left: -4px;
    }
    &:first-child {
      .crumb {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        padding-left: 22px;
        padding-right: 20px;
        font-size: 12px;
        &:before {
          display: none;
        }
      }
    }
    &:last-child {
      .crumb {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        margin-right: 0;
        padding-left: 30px;
        padding-right: 28px;
        font-size: 12px;
        &:after {
          display: none;
        }
      }
    }
  }
  >li {
    .crumb {
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      height: 30px;
      background: #E6E6E6;
      text-align: center;
      padding-left: 22px;
      padding-right: 20px;
      position: relative;
      margin-right: 8px;
      font-size: 12px;
      text-decoration: none;
      color: #999;
      &:before {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        content: "";
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 10px solid #FFF;
      }
      &:after {
        position: absolute;
        top: 0;
        right: -10px;
        z-index: 2;
        content: "";
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 10px solid #E6E6E6;
      }
      &.is-active {
        background: #E52C39;
        color: #FFF;
        &:after {
          border-left-color: #E52C39;
        }
      }
    }
  }
`;

const ButtonSubmitWrapper = styled.div`
  margin-top: 116px;
`;

const MemberLoginWrapper = styled.div`
  margin-top: 14px;
`;

const MemberLogin = styled.div`

`;

const MemberLoginLink = styled.a`
  color: #1A94E0;
  &:hover {
    text-decoration: underline;
  }
`;

const CloseBtn = styled.a`
  position: absolute;
  top: 24px;
  right: 20px;
  z-index: 99999;
  display: inline-block;
  width: 14px;
  height: 14px;
`;



const ModalSignUpForm = () => {

  const dispatch = useDispatch();
  
  // Modal
  const onModalClose = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: HIDDEN_MODAL_SIGNUP,
    })
  }, []);

  return (
    <>
      <ModalLayout title={'会員登録'}>
        <RegisterWrapper>
          <RegisterFormWrapper>
            <RegisterFormTitle>メールアドレスで登録</RegisterFormTitle>
            <CrumbsWrapper>
              <Crumbs>
                <li>
                  <div class="crumb is-active">アドレス入力</div>
                </li>
                <li>
                  <div class="crumb">会員情報入力</div>
                </li>
                <li>
                  <div class="crumb">完了</div>
                </li>
              </Crumbs>
            </CrumbsWrapper>
            <RegisterForm>
              <Item>
                <Input type="text" placeholder="メールアドレス" />
              </Item>
            </RegisterForm>
            <ButtonSubmitWrapper>
              <ButtonSubmit type="submit" size={"w326_h48_f14"}>メールを送信して登録</ButtonSubmit>
            </ButtonSubmitWrapper>
            <MemberLoginWrapper>
              <MemberLogin>
                アカウントをお持ちの方は
                  <Link><MemberLoginLink>こちら</MemberLoginLink></Link>
                からログイン
              </MemberLogin>
            </MemberLoginWrapper>
          </RegisterFormWrapper>
          <SnsBtnList />
          <CloseBtn onClick={onModalClose}><IconClose/></CloseBtn>
        </RegisterWrapper>
      </ModalLayout>
      <ModalBg/>
    </>
  )
}

export default ModalSignUpForm;