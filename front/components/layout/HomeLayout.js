import React from 'react';

import styled from "styled-components";

import Header from '../../containers/Header';

const MainWrapper = styled.div`
  padding-bottom: 50px;
  background: #F2F2F2;
`;

const Main = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1000px;
  background: #F2F2F2;
`;


const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Main>
          {children}
        </Main>
      </MainWrapper>
    </>
  );
  
}

export default HomeLayout;