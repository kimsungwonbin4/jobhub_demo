import React, { useState } from 'react';
import Link from 'next/link';
import styled from "styled-components";

import { IconMessage } from './shared/Icon';

const Message = styled.div`
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

const Count = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 1;
  display: flex;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  background: #FF0000;
  border-radius: 50%;
  color: #FFF;
  font-weight: bold;
  font-size: 10px;
`;

const MessageWrapper = styled.div`
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

const PopupTitle = styled.div`
  padding: 16px 16px 12px;
  font-weight: bold;
  border-bottom: 1px solid #E6E6E6;
  background: #FFF;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const PopupList= styled.ul`
  background: #FFF;
  height: 218px;
  overflow-y: auto;
`;

const PopupItem= styled.li`
  &:not(:first-child) {
    border-top: 1px solid #F2F2F2;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  padding: 10px 16px;
`;

const Thumbnail = styled.div`
  width: 40px;
`;

const MessageContent = styled.div`
  flex: 1;
  margin-left: 14px;
`;

const BetweenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WriteName = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const WriteDate = styled.div`
  font-size: 10px;
  color: #999;
`;

const MessageDesc = styled.div`
  margin-top: 8px;
  font-size: 12px;
  line-height: 1.4;
`;

const MessagePopup = () => {
  const [toggleState, setToggleState] = useState('');

  const toggle = () => {
    setToggleState(!toggleState ? 'isActive' : '');
  }

  return (
    <>
      <Message onClick={toggle}>
        <RelativeArea>
          <IconMessage>
            <Count>9</Count>
          </IconMessage>
          <MessageWrapper className={toggleState}>
            <RelativePopupArea>
              <PopupTitle>メッセージ</PopupTitle>
              <PopupList>
                <PopupItem>
                  <ContentWrapper>
                    <Thumbnail>
                      <img src="/static/img/test_img.png" width="40" height="40" alt=""/>
                    </Thumbnail>
                    <MessageContent>
                      <BetweenWrapper>
                        <WriteName>名前名前名前</WriteName>
                        <WriteDate>00時間前</WriteDate>
                      </BetweenWrapper>
                      <MessageDesc>
                        親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて
                      </MessageDesc>
                    </MessageContent>
                  </ContentWrapper>
                </PopupItem>
              </PopupList>
            </RelativePopupArea>
          </MessageWrapper>
        </RelativeArea>
      </Message>
    </>   
  )
};

export default MessagePopup;