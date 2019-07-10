import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import styled from "styled-components";
import Router from 'next/router';

import { IconSetup, IconAccountSetup, IconHelp, IconLogout } from './shared/Icon';
import { LOG_OUT_REQUEST } from '../reducers/user';

const Setup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background: #F2F2F2;
  }
`;

const RelativeArea = styled.div`
  position: relative;
`;

const SetupWrapper = styled.div`
  display: none;
  position: absolute;
  top: 38px;
  left: -293px;
  z-index: 1;
  width: 360px;
  box-shadow: #CCC 0 0 5px;
  filter: drop-shadow(rgba(0, 0, 0, 0.3) 0 0 5px);
  border-radius: 5px;
  &.isActive {
    display: block;
  }
`;

const RelativePopupArea = styled.div`
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid #FFF;
    right: 46px;
    top: -10px;
    z-index: 2;
  }
`;

const PopupList = styled.ul`
  background: #FFF;
  border-radius: 5px;
`;

const PopupItem = styled.li`
  &:not(:first-child) {
    border-top: 1px solid #F2F2F2;
  }
`;

const SettingItem = styled.a`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 16px 16px 16px 30px;
  color: #333;
  font-weight: bold;
  background: url(/static/img/icons/arrow_right.png) no-repeat right 20px center;
  background-size: 7px, 12px;
`;

const AccountSettingText = styled.span`
  margin-left: 14px;
`;

const HelpText = styled.span`
  margin-left: 14px;
`;

const LogoutText = styled.span`
  margin-left: 11px;
`;

const NotificationPopup = () => {

  // logout
  const dispatch = useDispatch();

  const onLogout = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: LOG_OUT_REQUEST,
    });
    Router.push('/');
  }, []);

  // toggle
  const [toggleState, setToggleState] = useState('');

  const toggle = () => {
    setToggleState(!toggleState ? 'isActive' : '');
  }

  return (
    <>
      <Setup onClick={toggle}>
        <RelativeArea>
          <IconSetup />
          <SetupWrapper className={toggleState}>
            <RelativePopupArea>
              <PopupList>
                <PopupItem>
                  <SettingItem>
                    <IconAccountSetup/>
                    <AccountSettingText>アカウント設定</AccountSettingText>
                  </SettingItem>
                </PopupItem>
                <PopupItem>
                  <SettingItem>
                    <IconHelp/>
                    <HelpText>ヘルプ（よくある質問）</HelpText>
                  </SettingItem>
                </PopupItem>
                <PopupItem>
                  <SettingItem onClick={onLogout}>
                    <IconLogout/>
                    <LogoutText>ログアウト</LogoutText>
                  </SettingItem>
                </PopupItem>
              </PopupList>
            </RelativePopupArea>
          </SetupWrapper>
        </RelativeArea>
      </Setup>
    </>   
  )
};

export default NotificationPopup;