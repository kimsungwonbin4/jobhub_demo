import React from 'react';
import styled from 'styled-components';

const PerfectionWrapper = styled.div`
  margin-top: 30px;
  box-sizing: border-box;
  padding: 12px 12px 12px 20px;
  background: #FFF;
  border-radius: 5px;
`;

const Perfection = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`

`;

const Percent = styled.div`
  margin-left: 18px;
  color: #1A94E0;
  font-size: 16px;
  font-weight: 600;
`;

const ProgressWrapper = styled.div`
  margin-left: 26px;
`;

const Progress = styled.div`
  width: 510px;
  background: #E6E6E6;
  border-radius: 13px;
`;

const Bar = styled.div`
  background: #1A94E0;
  height: 5px;
  border-radius: 10px;
`;

const PerfectionBar = () => {
  
  return (
    <>
      <PerfectionWrapper>
        <Perfection>
          <Title>プロフィール完成度</Title>
          <Percent>25%</Percent>
          <ProgressWrapper>
            <Progress>
              <Bar style={{ width: 50 }}></Bar>
            </Progress>
          </ProgressWrapper>
        </Perfection>
      </PerfectionWrapper>
    </>
  );
};

export default PerfectionBar;