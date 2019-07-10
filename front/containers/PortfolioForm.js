import React from 'react';
import styled from 'styled-components';

import { Select } from '../components/shared/Select';
import { TextAreaWrapper, ActionWrapper, UploadWrapper } from '../components/shared/Wrapper';
import { TextArea, Input } from '../components/shared/Input';
import { ButtonSubmit } from '../components/shared/Button';

const EditList = styled.ul`
  padding: 14px 20px 0;
  background: #FBFBFB;
`;

const EditTitle = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 100px;
`;

const EditTitleTop = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 100px;
  margin-top: 20px;
  margin-bottom: auto
`;

const EditBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const EditText = styled.div`
  font-size: 12px;
`;


const Required = styled.span`
  margin-left: 8px;
  font-size: 12px;
  font-weight: 600;
  color: #E52C39;
`;

const EditItem = styled.li`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  &:not(:first-child) {
    margin-top: 24px;
  }
`;

const SelectGroup = styled.ul`
  display: flex;
  align-items: center;
`;

const ItemSelect = styled.li`
  display: flex;
  align-items: center;
`;

const SelectText = styled.span`
  margin: 0 6px;
`;

const SelectTextEnd = styled.span`
  margin-left: 6px;
`;

const Any = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #999;
  margin-left: 8px;
`;


const PortfolioForm = () => {
  return (
    <>
      <EditList>
        <EditItem>
          <EditTitle>タイトル<Required>[必須]</Required></EditTitle>
          <EditBody>
            <Input type="text" placeholder="株式会社〇〇のロゴデザイン" />
          </EditBody>
        </EditItem>
        <EditItem>
          <EditTitleTop>説明文<Any>[任意]</Any></EditTitleTop>
          <EditBody>
            <TextAreaWrapper>
              <TextArea maxlength={1000} size="h100"></TextArea>
            </TextAreaWrapper>
          </EditBody>
        </EditItem>
        <EditItem>
          <EditTitle>ファイル<Any>[任意]</Any></EditTitle>
          <EditBody>
            <UploadWrapper />
          </EditBody>
        </EditItem>
        <EditItem>
          <EditTitle>URL<Required>[必須]</Required></EditTitle>
          <EditBody>
            <Input type="text" placeholder="入力すると候補が出てきます" />
          </EditBody>
        </EditItem>
        <ActionWrapper>
          <ButtonSubmit type="submit" size={"w306_h48_f14"}>ポートフォリオを追加する</ButtonSubmit>
        </ActionWrapper>
      </EditList>
    </>
  )
}

export default PortfolioForm;
