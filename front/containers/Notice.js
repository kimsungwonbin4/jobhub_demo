import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import NoticeCard from '../components/NoticeCard';


const NoticeList = styled.ul`
  background: #FFF;
  border-radius: 5px;
  box-shadow: #CCC 0 0 5px;
`;

const Item = styled.li`
  &:not(:first-child) {
    border-top: 1px solid #E6E6E6;    
  }
`;


const dummy = [
  {
    id: 1,
    title: '個人自立社会の実現に向けて。新しいJOBHUBがスタートしました。',
    writeDate: '2018/00/00'
  },
  {
    id: 2,
    title: '個人自立社会の実現に向けて。新しいJOBHUBがスタートしました。',
    writeDate: '2018/00/00'
  },
  {
    id: 3,
    title: '個人自立社会の実現に向けて。新しいJOBHUBがスタートしました。',
    writeDate: '2018/00/00'
  }
]

const Notice = ({}) => {
  return (
    <>
      <NoticeList>
        {dummy.map((notice, i) => {
          return (
          <Item>
            <NoticeCard result={notice} />
          </Item>
          );
        }
        )}
      </NoticeList>
    </>
  );
};

export default Notice;