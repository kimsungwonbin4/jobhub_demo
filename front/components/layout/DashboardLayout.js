import React from 'react';

import Link from 'next/link';
import styled from "styled-components";

import Header from '../../containers/Header';
import BreadCrumbMenu from "../BreadCrumbMenu";
import DashboardAside from "../DashboardAside";


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

const Aside = styled.div`
  width: 204px;
  margin-bottom: 50px;
  background: #F2F2F2;
`;

const Article = styled.div`
  width: 776px;
`;

const DashboardLayout = ({ children, path }) => {

  return (
    <>
      <Header />
      <BreadCrumbMenu />
      <MainWrapper>
        <Main>
          <Aside>
            <DashboardAside path={path}/>
          </Aside>
          <Article>
            {children}
          </Article>
        </Main>
      </MainWrapper>
    </>
  )
}

export default DashboardLayout;