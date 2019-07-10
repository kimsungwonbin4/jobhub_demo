import React from 'react';
import styled from "styled-components";

const HeaderCountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #999;
`;

const From = styled.span`
  font-size: 16px;
`;

const Wave = styled.span`
  margin: 0 4px;
  font-size: 16px;
  color: #999;
`;

const To = styled.span`
  font-size: 16px;
`;

const Text = styled.span`
  margin-left: 4px;
  font-size: 12px;
`;


const HeaderCount = () => {
  return (
    <>
      <HeaderCountWrapper>
        <From>1</From>
        <Wave>〜</Wave>
        <To>10</To>
        <Text>件を表示中</Text>
      </HeaderCountWrapper>
    </>
  );
}

export default HeaderCount;