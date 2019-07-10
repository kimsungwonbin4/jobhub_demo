import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import NotificationCard from '../components/NotificationCard';


const Notifications = styled.ul`
  box-shadow: #CCC 0 0 5px;
  border-radius: 5px;
  background: #FFF;
`;

const Item = styled.li`
  &:not(:first-child) {
    border-top: 1px solid #E6E6E6;    
  }
`;


const dummy = [
  {
    id: 1,
    name: 'テスト1',
    title: 'さんから作業完了報告がありました。納品内容を確認し、お支払いをしてください。',
    writeDate: '1時間前'
  },
  {
    id: 2,
    name: 'テスト2',
    title: 'さんから作業完了報告がありました。納品内容を確認し、お支払いをしてください。',
    writeDate: '1時間前'
  },
  {
    id: 3,
    name: 'テスト3',
    title: 'さんから作業完了報告がありました。納品内容を確認し、お支払いをしてください。',
    writeDate: '1時間前'
  }
]

const Notification = ({}) => {
  return (
    <>
      <Notifications>
        {dummy.map((notifications, i) => {
          return (
          <Item>
            <NotificationCard result={notifications} />
          </Item>
          );
        }
        )}
      </Notifications>
    </>
  );
};

export default Notification;