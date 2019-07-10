import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Tab = styled.a`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  height: 50px;
  font-size: 14px;
  background: #E6E6E6;
  color: #999;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  &.isActive {
    color: #333;
    background: #FFF;
    border-top: 3px solid #1A94E0;
  }
`;

const TabItem = ({result, path}) => {

  return (
    <>
      <Link href={result.url}>
        <Tab className={result.url === path ? `isActive` : '' }>{result.title}</Tab>
      </Link>
    </>
  );
};

export default TabItem;