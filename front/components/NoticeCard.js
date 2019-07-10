import React from 'react';
import Link from 'next/link';
import styled from "styled-components";


const Notice = styled.a`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 28px;
`;

const Date = styled.div`
  color: #999;
  font-size: 12px;
`;

const Title = styled.div`
  margin-left: 18px;
  color: #3B4043;
  font-size: 12px;
  font-weight: bold;
`;

const NoticeCard = ({}) => {
  return (
    <>
     <Link href="/">
        <Notice>
          <Date>2018/00/00</Date>
          <Title>個人自立社会の実現に向けて。新しいJOBHUBがスタートしました。</Title>
        </Notice>
      </Link>
    </>   
  )
};

export default NoticeCard;