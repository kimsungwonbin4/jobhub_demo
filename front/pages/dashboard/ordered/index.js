import React from 'react';
import styled from 'styled-components';

import DashboardLayout from '../../../components/layout/DashboardLayout';
import SectionH2 from '../../../components/SectionH2';
import TabInfoLayout from '../../../components/layout/TabInfoLayout';

import Perfection from '../../../containers/Perfection';
import Tab from '../../../containers/Tab';
import EditTabInfo from '../../../containers/EditTabInfo';

const TabWrapper = styled.div`
  margin-top: 24px;
`;

const dummy = [
  {
    id: 1,
    title: '進行中の仕事',
    count: '10',
    url: '/dashboard/ordered'
  },
  {
    id: 2,
    title: 'オファーされた仕事',
    count: '10',
    url: '/dashboard/ordered2'
  },
  {
    id: 3,
    title: '完了済みの仕事',
    count: '10',
    url: '/dashboard/ordered3'
  }
];

const Ordered = ({pathname}) => {
  return (
    <>
      <DashboardLayout path={ pathname }>
        <SectionH2 title="受注したJOB">
          <TabWrapper>
            <Tab path={ pathname } result={dummy}/>
            <TabInfoLayout>
              
            </TabInfoLayout>
          </TabWrapper>
        </SectionH2>
      </DashboardLayout>
    </>
  )
};

Ordered.getInitialProps = async (context) => {
  const { pathname } = context;
  const state = context.store.getState();

  return { pathname };
  
};

export default Ordered;