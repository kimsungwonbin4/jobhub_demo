import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DashboardLayout from '../../../components/layout/DashboardLayout';
import SectionH2 from '../../../components/SectionH2';
import SectionH3 from '../../../components/SectionH3';
import MoreLink from '../../../components/MoreLink';

import Notification from '../../../containers/Notification';
import Induce from '../../../containers/Induce';
import Recommend from '../../../containers/Recommend';
import Notice from '../../../containers/Notice';

const Top = () => {
  
  const { me } = useSelector(state => state.user);

  // const [note, setNote] = useState('');
  
  // useEffect(() => {
  //   let note = `未読件数：${dummy.length}件`;
  //   setNote(note);
  // }, []);

  return (
    <>
      <DashboardLayout>
        <SectionH2 title={ me && me.email ? `${me.email}さんのマイページトップ` : 'ログインしてください'}>
          <Induce />
          <SectionH3 text={'通知'} note={'未読件数：3件'}> 
            <Notification />
          </SectionH3>
          <MoreLink text='すべての通知をみる' url='/dashboard/notification' />
          <SectionH3 text={'あなたにおすすめの仕事'}> 
            <Recommend />
          </SectionH3>
          <SectionH3 text={'お知らせ'}> 
            <Notice />
          </SectionH3>
          <MoreLink text='すべてのお知らせをみる ' url='/dashboard/notice' />
        </SectionH2>
      </DashboardLayout>
    </>
  )
};

export default Top;