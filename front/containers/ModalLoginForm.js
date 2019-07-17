import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { HIDDEN_MODAL } from '../reducers/modal';

import Link from 'next/link';
import styled from 'styled-components';
import { IconClose } from '../components/shared/Icon';
import { Input } from '../components/shared/Input';
import Checkbox from '../components/shared/Checkbox';
import { ButtonSubmit } from '../components/shared/Button';
import ModalBg from '../components/modal/ModalBg';
import SnsBtnList from './SnsBtnList';

import { LOG_IN_REQUEST, REASON_RESET_REQUEST } from '../reducers/user';
import { SHOW_LOADING, HIDDEN_LOADING } from '../reducers/loading';

const ModalWrapper = styled.div`
  position: absolute;
  top: 126px;
  left: 50%;
  z-index: 9999;
  box-sizing: border-box;
  width: 796px;
  margin-left: -398px;
  margin-bottom: 200px;
  padding: 24px 20px 54px;
  background: #FFF;
  border-radius: 5px;
`;

const ModalTitle = styled.div`
  margin-top: 32px;
  font-size: 20px;
  text-align: center;
  line-height: 1.6;
`;


const ModalBody = styled.div`
  margin-top: 32px;
`;

const LoginWrapper = styled.div`
  display: flex;
`;

const LoginFormWrapper = styled.div`
  width: 326px;
  margin-left: 66px;
`;

const LoginFormTitle = styled.div`
  font-size: 16px;
`;

const LoginForm = styled.ul`
  margin-top: 20px;
`;

const Item = styled.li`
  display: block;
  &:not(:first-child) {
    margin-top: 16px;
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

const ForgetPassword = styled.div`
  margin-top: 16px;
`;

const ForgetPasswordLink = styled.a`
  color: #1A94E0;
`;

const LoginAuto = styled.div`
  margin-top: 60px;
`;

const ButtonSubmitWrapper = styled.div`
  margin-top: 16px;
`;

const InputError = styled.div`
  margin-top: 6px;
  margin-left: 2px;
  color: #E52C39;
  font-size: 12px;
`;



export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const ModalLoginForm = () => {
  // is login??
  const { isSigningUp, me } = useSelector(state => state.user);

  useEffect(() => {
    if (me) {
      Router.push('/dashboard/top');
    }
  }, [me && me.id]);

  // init focus
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const dispatch = useDispatch();
  const { logInErrorReason } = useSelector(state => state.user);

  // Modal
  const onModalClose = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: HIDDEN_MODAL,
    })
  }, []);

  // LoginForm Submit
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    

    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        userId: email,
        password
      }
    })


  }, [email, password]);

  // Login Form Validation
  const isFormValid = () => {
    return email && password;
  }

  // Login Form Error message reset
  useEffect(() => {
    if (!email.length || !password.length) {
      dispatch({
        type: REASON_RESET_REQUEST,
      });
    }
  },[email, password]);

  return (
    <>
     <ModalWrapper>
      <ModalTitle>ログイン</ModalTitle>
      <ModalBody>
        <LoginWrapper>
          <LoginFormWrapper>
            <LoginFormTitle>メールアドレスでログイン</LoginFormTitle>
            <form onSubmit={onSubmitForm}>
              <LoginForm>
                <Item>
                  <Input type="text" placeholder="メールアドレス" value={email} onChange={onChangeEmail} ref={inputRef} />
                  <InputError>
                    {logInErrorReason==='存在してないメールアドレスです。' ? logInErrorReason : ''}
                  </InputError>
                </Item>
                <Item>
                  <Input type="password" placeholder="パスワード" value={password} onChange={onChangePassword}/>
                  <InputError>{logInErrorReason==='パスワードを確認してください。' ? logInErrorReason : ''}</InputError>
                </Item>
              </LoginForm>
              <ForgetPassword>
                パスワードを忘れた方は<Link href=""><ForgetPasswordLink>こちら</ForgetPasswordLink></Link>
              </ForgetPassword>
              <LoginAuto>
                <Checkbox text={'次回から自動的にログイン'} />
              </LoginAuto>
              <ButtonSubmitWrapper>
                <ButtonSubmit type="submit" size={"w326_h48_f14"} disabled={!isFormValid} className={email && password ? '' : `isDisable` }>ログイン</ButtonSubmit>
              </ButtonSubmitWrapper>
            </form>
          </LoginFormWrapper>
          <SnsBtnList />
        </LoginWrapper>
      </ModalBody>
      <CloseBtn onClick={onModalClose}><IconClose/></CloseBtn>
     </ModalWrapper>
     <ModalBg/>
    </>
  )
}

export default ModalLoginForm;