import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import BackNumberCard from '../components/BackNumberCard';

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

const BackNumberWrapper = styled.div`
  width: 204px;
  box-sizing: border-box;
  padding: 20px;
  background: #FBFBFB;
  font-size: 12px;
  border-radius: 5px;
`;

const Title= styled.div`
  font-weight: bold;
`;

const BackNumberList= styled.ul`
  margin-top: 18px;
`;

const Item = styled.li`
  &:not(:first-child) {
    margin-top: 12px;
  }
`;


const BackNumber = () => {
  return (
    <>
      <BackNumberWrapper>
        <Title>バックナンバー</Title>
        <BackNumberList>
          {dummy.map((backnumber, i) => {
            return (
              <Item>
                <BackNumberCard result={backnumber} />
              </Item>
            );
          }
          )}
        </BackNumberList>
      </BackNumberWrapper>
    </>
  );
}

export default BackNumber;