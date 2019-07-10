import React from 'react';
import styled from 'styled-components';

import PortfolioCard from '../components/PortfolioCard';

const FormEditWrapper = styled.div`
  background: #FBFBFB;
  padding-bottom: 24px;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
`;

const PortfolioList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  margin-left: 42px;
  &:nth-child(3n+1) {
    margin-left: 0;
  }
  &:nth-child(n+4) {
    margin-top: 40px;
  }
`;

const dummy = [
  {
    id: 1,
    filename: '/static/img/test_img_book.png',
    title: 'タイトル株式会社〇〇のロゴデザイン',
  },
  {
    id: 2,
    filename: '/static/img/test_img_book.png',
    title: 'タイトル株式会社〇〇のロゴデザイン',
  },
  {
    id: 3,
    filename: '/static/img/test_img_book.png',
    title: 'タイトル株式会社〇〇のロゴデザイン',
  },
  {
    id: 4,
    filename: '/static/img/test_img_book.png',
    title: 'タイトル株式会社〇〇のロゴデザイン',
  }
];

const PortfolioInfo = () => {
  return (
    <>
      <PortfolioList>
        {dummy.map((result, i) => {
          return (
            <Item>
              <PortfolioCard filename={result.filename} title={result.title} />
            </Item>
          )
        })}
      </PortfolioList>
    </>
  )
}

export default PortfolioInfo;