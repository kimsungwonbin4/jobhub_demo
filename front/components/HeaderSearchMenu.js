import React from 'react';
import Link from 'next/link';
import styled from "styled-components";

import { IconWork, IconUser } from '../components/shared/Icon';

const Menus = styled.ul`
  display: flex;
`;

const Item = styled.li`
  &:not(:first-child) {
    margin-left: 26px;
  }
`;

const MenuWork = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: "Montserrat";
  color: #E52C39;
`;

const MenuUser = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: "Montserrat";
  color: #0EB8AD;
`;

const HeaderSearchMenu = ({}) => {
  return (
    <>
      <Menus>
        <Item>
          <Link href="/search/work">
            <MenuWork>
              <IconWork />WORK
            </MenuWork>
          </Link>
        </Item>
        <Item>
          <Link href="/search/user">
            <MenuUser>
              <IconUser />USER
            </MenuUser>
          </Link>
        </Item>
      </Menus>
    </>   
  )
};

export default HeaderSearchMenu;



{/* <div class="fixarea_submenu-search">
  <ul class="l-fixarea_submenu_list">
    <li>
      <a href="/search/work/" class="fixarea_submenu_list fixarea_submenu_list--work">
        <i class="icon icon--work"></i>
        WORK<span class="fixarea_submenu_list-desc">仕事を探す</span>
      </a>
    </li>
    <li>
      <a href="/search/user/" class="fixarea_submenu_list fixarea_submenu_list--user">
        <i class="icon icon--user"></i>
        USER<span class="fixarea_submenu_list-desc">ユーザーを探す</span>
      </a>
    </li>
  </ul>
</div> */}