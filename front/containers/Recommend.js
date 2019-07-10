import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import RecommendCard from '../components/RecommendCard';


const RecommendList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  margin-left: 16px;
  &:nth-child(3n+1) {
    margin-left: 0;
  }
  &:nth-child(n+4) {
    margin-top: 16px;
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

const Recommend = ({}) => {
  return (
    <>
      <RecommendList>
        {dummy.map((recommend, i) => {
          return (
          <Item>
            <RecommendCard result={recommend} />
          </Item>
          );
        }
        )}
      </RecommendList>
    </>
  );
};

export default Recommend;