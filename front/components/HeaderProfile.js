import React from 'react';
import Link from 'next/link';
import styled from "styled-components";

const Profile = styled.a`
  display: flex;
  align-items: center;
  color: #333;
`;

const Thumbnail = styled.div`
  width: 40px;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px
  color: #333;
`;

const Text = styled.span`
  font-size: 10px;
`;

const HeaderProfile = ({}) => {
  return (
    <>
      <Profile>
        <Thumbnail>
          <img src="/static/img/test_img.png" width="40" height="40" alt="" />
        </Thumbnail>
        <UserName>
          名前名前名前<Text>さん</Text>
        </UserName>
      </Profile>
    </>
  )
}

export default HeaderProfile;