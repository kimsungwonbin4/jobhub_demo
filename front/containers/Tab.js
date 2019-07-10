import React from 'react';
import styled from 'styled-components';

import TabItem from '../components/TabItem';

const TabList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Item = styled.li`
  flex: 1;
  &:not(:first-child) {
    margin-left: 16px;
  }
`;


const Tab = ({ path, result }) => {
  return (
    <>
      <TabList>
      { result.map((item, i) => {
        return (
        <Item>
          <TabItem result={item} path={path}/>
        </Item>
        )
      })}
      </TabList>
      
    </>
  )
}

export default Tab;