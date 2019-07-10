import React from 'react';
import styled from 'styled-components';

import { ButtonLink } from '../components/shared/Button';
import { IconEdit, IconDelete } from '../components/shared/Icon';
import { TextAreaWrapper, ActionWrapper } from '../components/shared/Wrapper';
import { TextArea } from '../components/shared/Input';
import { ButtonSubmit } from '../components/shared/Button';

const FormEditWrapper = styled.div`
  background: #FBFBFB;
  padding-bottom: 24px;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 14px 20px;
  background: #F2F2F2;
`;

const TitleSkill = styled.div`
  width: 124px;
  font-size: 12px;
`;

const TitleRemarks = styled.div`
  width: 140px;
  font-size: 12px;
`;

const EditWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 14px 20px;
  background: #FFF;
`;

const EditSkill = styled.div`
  width: 124px;
  font-size: 12px;
`;

const EditRemarks = styled.div`
  width: 334px;
  font-size: 12px;
  line-height: 1.4;
`;

const ActionEditWrapper = styled.ul`
  display: flex;
  margin-left: auto;
`;

const Item = styled.li `
  &:not(:first-child) {
    margin-left: 6px;
  }
`;

const EditList = styled.ul`
  padding: 14px 20px 0;
  background: #FBFBFB;
`;

const EditTitle = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 124px;
`;

const EditTitleTop = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 124px;
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

const Any = styled.span`
  margin-left: 8px;
  font-size: 12px;
  font-weight: 600;
  color: #999;
`;


const SkillForm = () => {
  return (
    <>
      <FormEditWrapper>
        <TitleWrapper>
          <TitleSkill>スキル</TitleSkill>
          <TitleRemarks>備考</TitleRemarks>
        </TitleWrapper>
        <EditWrapper>
          <EditSkill>AdobePhotoshop</EditSkill>
          <EditRemarks>
            主にイラストを描く際に使用しています。前職では、webの素材やパーツの作成に3年ほど使っていました。
          </EditRemarks>
          <ActionEditWrapper>
            <Item>
              <ButtonLink type="circle" size="w36_h36_f12">
                <IconEdit />
              </ButtonLink>
            </Item>
            <Item>
              <ButtonLink type="circle" size="w36_h36_f12">
                <IconDelete />
              </ButtonLink>
            </Item>
          </ActionEditWrapper>
        </EditWrapper>
        <EditList>
          <EditItem>
            <EditTitle>スキル<Required>[必須]</Required></EditTitle>
            <EditBody>
              <EditText>AdobePhotoshop</EditText>
              <ButtonLink type="edit" size="w102_h28_f12">スキルを選択する</ButtonLink>
            </EditBody>
          </EditItem>
          <EditItem>
            <EditTitleTop>備考<Any>[任意]</Any></EditTitleTop>
            <EditBody>
              <TextAreaWrapper>
                <TextArea maxlength={1000} size="h100"></TextArea>
              </TextAreaWrapper>
            </EditBody>
          </EditItem>
          <ActionWrapper>
            <ButtonSubmit type="submit" size={"w306_h48_f14"}>スキルを追加する</ButtonSubmit>
          </ActionWrapper>
        </EditList>
      </FormEditWrapper>
    </>
  )
}

export default SkillForm;