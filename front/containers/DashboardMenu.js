import React from 'react';
import Link from 'next/link';
import styled from "styled-components";

import Menu from '../components/Menu'; 

const SideMenuList = styled.div`
  border-top: 1px solid #CCC;
`;

const Item = styled.div`
  background: #FFF;
  &:hover {
    background: #FBFBFB;
  }
`;


const dummy = [
  {
    url: '/dashboard/edit',
    text: 'プロフィール編集',
    icon: 'edit',
  },
  {
    url: '/dashboard/ordered',
    text: '受注した仕事',
    icon: 'ordered',
  },
  {
    url: '/dashboard/order',
    text: '発注した仕事',
    icon: 'order',
  },
  {
    url: '/dashboard/job',
    text: '仕事を掲載する',
    icon: 'job',
  },
  {
    url: '/dashboard/payment',
    text: 'JOBHUB口座',
    icon: 'payment',
  },

]

const DashboardMenu = ({path}) => {
  return (
    <>
      <SideMenuList>
        {dummy.map((result, i) => {
          return (
            <Item>
              <Menu url={result.url} text={result.text} icon={result.icon} path={path}/>
            </Item>
          )
        })}
      </SideMenuList>
    </>
  )
}

export default DashboardMenu;