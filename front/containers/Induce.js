import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import InduceCard from '../components/InduceCard';

const dummy = [
  {
    id: 1,
    title: '基本情報を登録しよう',
  },
  {
    id: 2,
    title: '本人確認書類を提出しよう（住所登録後に実施可能） '
  }
];


const InduceWrapper = styled.ul`
  margin-bottom: 10px;
  padding: 22px 18px;
  background: #FAFFBD;
  border: 1px solid #F6D836;
  border-radius: 5px;
`;

const Item = styled.li`
  &:not(:first-child) {
    margin-top: 12px;
  }
`;

const Induce = () => {
  const [InduceList, setInduceList] =  useState(dummy);

  return (
    <>
      <InduceWrapper>
          {InduceList.map((Induce, i) => {
            return (
            <Item>
              <InduceCard result={Induce} />
            </Item>
            );
          }
          )}
      </InduceWrapper>
    </>
  );
};

export default Induce;