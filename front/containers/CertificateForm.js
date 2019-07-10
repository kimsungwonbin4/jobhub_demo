import React from 'react';
import styled from 'styled-components';

import { IconEdit, IconDelete } from '../components/shared/Icon';
import { TextAreaWrapper, ActionWrapper } from '../components/shared/Wrapper';
import { TextArea, Input } from '../components/shared/Input';
import { ButtonSubmit, ButtonLink } from '../components/shared/Button';
import { Select } from '../components/shared/Select';


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

const TitleCertificate = styled.div`
  width: 480px
  font-size: 12px;
`;

const TitleRemarks = styled.div`
  width: 140px;
  font-size: 12px;
`;

const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 14px 20px;
  background: #FFF;
`;

const EditCertificate = styled.div`
  width: 480px;
  font-size: 12px;
`;

const EditDate = styled.div`
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

const SelectGroup = styled.ul`
  display: flex;
  align-items: center;
`;

const ItemSelect = styled.li`

`;

const SelectText = styled.span`
  margin: 0 6px;
`;


const CertificateForm = () => {
  return (
    <>
      <FormEditWrapper>
        <TitleWrapper>
          <TitleCertificate>資格</TitleCertificate>
          <TitleRemarks>取得時期</TitleRemarks>
        </TitleWrapper>
        <EditWrapper>
          <EditCertificate>普通二輪免許</EditCertificate>
          <EditDate>2018/10</EditDate>
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
            <EditTitle>資格<Required>[必須]</Required></EditTitle>
            <EditBody>
              <Input type="text" placeholder="入力すると候補が出てきます" />
            </EditBody>
          </EditItem>
          <EditItem>
            <EditTitle>取得時期<Any>[任意]</Any></EditTitle>
            <EditBody>
            <SelectGroup>
              <ItemSelect>
                <Select size={"w64_h38_f12"}>
                  <option value="">2000</option>
                  <option value="">2001</option>
                  <option value="">2002</option>
                </Select>
                <SelectText>年</SelectText>
              </ItemSelect>
              <ItemSelect>
                <Select size={"w64_h38_f12"}>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </Select>
                <SelectText>月</SelectText>
              </ItemSelect>
              <ItemSelect>
                <Select size={"w64_h38_f12"}>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </Select>
                <SelectText>日</SelectText>
              </ItemSelect>
            </SelectGroup>
            </EditBody>
          </EditItem>
          <ActionWrapper>
            <ButtonSubmit type="submit" size={"w306_h48_f14"}>資格を追加する</ButtonSubmit>
          </ActionWrapper>
        </EditList>
      </FormEditWrapper>
    </>
  );
};

export default CertificateForm;