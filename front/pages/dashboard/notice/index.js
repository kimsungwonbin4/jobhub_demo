import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import DashboardLayout from '../../../components/layout/DashboardLayout';
import SectionH2 from '../../../components/SectionH2';
import HeaderCount from '../../../components/HeaderCount';

import NoticeContainer from '../../../containers/Notice';
import BackNumber from '../../../containers/BackNumber';

const NoticeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Main = styled.div`

`;

const Aside = styled.div`

`;

const Notice = () => {

  return (
    <>
      <DashboardLayout>
        <SectionH2 text='お知らせ一覧'>
          <NoticeWrapper>
            <Main>
              <HeaderCount />
              <NoticeContainer />
            </Main>
            <Aside>
              <BackNumber />
            </Aside>
          </NoticeWrapper>
        </SectionH2>
      </DashboardLayout>
    </>
  )
};

export default Notice;