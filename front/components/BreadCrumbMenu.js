import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const BreadCrumbWrapper = styled.div`
  box-sizing: border-box;
  margin-top: 134px;
  padding-top: 16px;
  padding-bottom: 32px;
  background: #F2F2F2;
`;

const BreadCrumbList = styled.ol`
  width: 1000px;
  margin: 0 auto;
`;

const Item = styled.li`
  display: inline-block;
  font-size: 12px;
  line-height: 1.6;
  &:after {
    content: ">";
    margin: 0 5px;
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
`;

const BreadCrumb = styled.a`
  color: #1A94E0;
  text-decoration: underline;
`;

const BreadCrumbMenu = () => {
  return (
    <>
      <BreadCrumbWrapper>
        <BreadCrumbList>
          <Item>
            <Link href="/"><BreadCrumb>JOBHUBトップ</BreadCrumb></Link>
          </Item>
          <Item>
            <Link href="/dashboard/top/"><BreadCrumb >マイページ</BreadCrumb></Link>
          </Item>
          <Item>
            <Link><BreadCrumb>発注したJOB</BreadCrumb></Link>
          </Item>
          <Item>案件名が入ります。【リモートワーカーエンジニア募集！】アジア最大級のソーシャルメディア案件名が入ります。</Item>
        </BreadCrumbList>
      </BreadCrumbWrapper>
    </>
  );
};

export default BreadCrumbMenu;