import React from 'react';
import Link from 'next/link';
import styled from "styled-components";

import { IconMenus } from './shared/Icon';

const SideMenu = styled.a`
  display: flex;
  align-items: center;
  padding: 18px 16px;
  &.isActive {
    background: #FBFBFB;
  }
`;

const SideMenuText = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

const IconArrowRight = styled.i`
  margin-left: auto;
  display: inline-block;
  background-image: url(/static/img/icons/arrow_right.png);
  background-size: 8px 12px;
  width: 8px;
  height: 12px;
`;

const Menu = ({ url, text, icon, path }) => {
  return (
    <>
      <Link href={ url }>
        <SideMenu className={url === path ? `isActive` : '' }>
          <IconMenus className={icon}/>
          <SideMenuText>{ text }</SideMenuText>
          <IconArrowRight />
        </SideMenu>
      </Link>
    </>
  )
}

export default Menu;