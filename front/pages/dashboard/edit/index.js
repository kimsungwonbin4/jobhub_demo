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
    title: '基本情報',
    url: '/dashboard/edit',
    isActive: true
  },
  {
    id: 2,
    title: 'スキル・資格',
    url: '/dashboard/skill',
    isActive: false
  },
  {
    id: 3,
    title: '経歴',
    url: '/dashboard/career',
    isActive: false
  },
  {
    id: 4,
    title: 'ポートフォリオ',
    url: '/dashboard/portfolio',
    isActive: false
  }
];

const Edit = ({pathname}) => {
  return (
    <>
      <DashboardLayout path={ pathname }>
        <SectionH2 title="プロフィール編集">
          <Perfection />
          <TabWrapper>
            <Tab path={ pathname } result={dummy} />
            <TabInfoLayout>
              <EditTabInfo />
            </TabInfoLayout>
          </TabWrapper>
        </SectionH2>
      </DashboardLayout>
    </>
  )
};

Edit.getInitialProps = async (context) => {
  const { pathname } = context;
  const state = context.store.getState();

  return { pathname };
  
};

export default Edit;