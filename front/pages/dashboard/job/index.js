import React from 'react';
import styled from 'styled-components';

import DashboardLayout from '../../../components/layout/DashboardLayout';
import SectionH2 from '../../../components/SectionH2';



const TabWrapper = styled.div`
  margin-top: 24px;
`;


const Job = ({pathname}) => {
  return (
    <>
      <DashboardLayout path={ pathname }>
        <SectionH2 title="JOBを掲載する">
          
        </SectionH2>
      </DashboardLayout>
    </>
  )
};

Job.getInitialProps = async (context) => {
  const { pathname } = context;
  const state = context.store.getState();

  return { pathname };
  
};

export default Job;