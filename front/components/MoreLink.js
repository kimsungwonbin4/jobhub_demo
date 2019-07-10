import React from 'react';
import styled from "styled-components";
import Link from 'next/link';

const MoreLayout = styled.div`
  display: flex;
  margin-top: 14px;
`;

const More = styled.a`
  display: flex;
  align-items: center;
  margin-left: auto;
  font-size: 12px;
  color: #1A94E0;
  cursor: pointer;
`;

const IconArrowRight = styled.i`
  margin-left: 10px;
  display: inline-block;
  background-image: url(/static/img/icon.png);
  background-position: -130px -98px;
  width: 5px;
  height: 8px;
  background-size: 174px auto;
`;

const MoreLink = ({text, url}) => {
  return (
    <>
      <MoreLayout>
        <Link href={url}><More>{text}<IconArrowRight /></More></Link>
      </MoreLayout>
    </>
  )
};

export default MoreLink;