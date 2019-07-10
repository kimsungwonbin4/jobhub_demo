import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ButtonSubmit } from './shared/Button';
import DashboardMenu from '../containers/DashboardMenu';

const Title = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 28px;
  padding: 0 12px;
  background: #333;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 12px;
  color: #FFF;
  font-weight: bold;
}
`;

const AsideWrapper = styled.div`
  background: #FFF;
`;

const ProfileInfo = styled.div`
  padding: 16px 16px 0;
`;

const ProfileImg = styled.div`
  text-align: center;
`;

const ProfileName = styled.div`
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #1A94E0;
`;

const Purpose = styled.div`
  margin-top: 16px;
  padding: 16px 16px 12px;
  border-top: 1px solid #F2F2F2;
`;

const PurposeTitle = styled.div`

`;

const PurposeWrapper = styled.div`
  
`;

const PurposeCount = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const PurposeProgress = styled.div`
  margin-top: 6px;
  width: 172px;
  background: #E6E6E6;
  border-radius: 13px;
`;

const PurposeProgressBar = styled.div`
  background: #1A94E0;
  height: 5px;
  border-radius: 10px;
`;

const Remaining = styled.div`
  margin-top: 6px;
  font-size: 12px;
  color: #999;
`;

const Input = styled.input`
  width: 100px;
  padding: 0;
  outline: none;
  border: 1px solid #FFF;
  font-weight: bold;
  font-size: 14px;
`;

const IconEdit = styled.i`
  display: inline-block;
  background-image: url(/static/img/icons/edit_big.png);
  width: 10px;
  height: 10px;
  background-size: 10px 10px;
`;


const DashboardAside = ({path}) => {
  return (
    <>
      <Link href="/dashboard/top">
        <Title>マイページ</Title>
      </Link>
      <AsideWrapper>
        <ProfileInfo>
          <ProfileImg><img src="/static/img/test_img.png" width="60" height="60" alt="" /></ProfileImg>
          <ProfileName>名前名前名前</ProfileName>
        </ProfileInfo>
        <Purpose>
          <PurposeTitle>00月の目標</PurposeTitle>
          <PurposeWrapper>
            <PurposeCount>
              ¥<Input type="text" value="500,000" maxlength="7" readonly="" />
              <ButtonSubmit type="edit" size={"w50_h28_f12"}>
                <IconEdit />編集
              </ButtonSubmit>
            </PurposeCount>
            <PurposeProgress>
              <PurposeProgressBar />
            </PurposeProgress>
            <Remaining>残り¥0</Remaining>
          </PurposeWrapper>
        </Purpose>
        <DashboardMenu path={path}/>
      </AsideWrapper>
    </>
  );
};

export default DashboardAside;