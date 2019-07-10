import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DashboardLayout from '../../../components/layout/DashboardLayout';
import SectionH2 from '../../../components/SectionH2'
import HeaderCount from '../../../components/HeaderCount'
import Notification from '../../../containers/Notification'


const notification = () => {

  return (
    <>
      <DashboardLayout>
        <SectionH2 text='通知一覧'>
          <HeaderCount />
          <Notification />
        </SectionH2>
      </DashboardLayout>
    </>
  )
};

export default notification;