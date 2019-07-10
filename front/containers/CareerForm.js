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
  padding: 14px 20px;
  background: #F2F2F2;
`;

const TitleCareer = styled.div`
  flex: 1;
  font-size: 12px;
`;

const TitleRemarks = styled.div`
  width: 140px;
  font-size: 12px;
`;

const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0px;
  background: #FFF;
`;

const EditCareerList = styled.ul`
  
`;

const EditCareerItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 20px;
  &:not(:first-child) {
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid #E6E6E6;
  }
`;

const Career = styled.div`
  width: 578px;
`;

const ActionEditTopWrapper = styled.ul`
  display: flex;
  margin-left: auto;
  margin-bottom: auto;
`;

const Item = styled.li `
  &:not(:first-child) {
    margin-left: 6px;
  }
`;

const CareerInfoWrapper = styled.div`
  width: 578px;
`;

const CareerTitle = styled.div`
  font-size: 12px;
`;

const CareerCompany = styled.div`
  margin-top: 16px;
  font-weight: bold;
`;

const CarrerDate = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: #B3B3B3;
`;

const CarrerDesc = styled.div`
  margin-top: 8px;
  font-size: 12px;
  line-height: 1.6;
`;

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
  display: flex;
  align-items: center;
`;

const SelectText = styled.span`
  margin: 0 6px;
`;

const SelectTextEnd = styled.span`
  margin-left: 6px;
`;

const CareerForm = () => {
  return (
    <>
      <FormEditWrapper>
        <TitleWrapper>
          <TitleCareer>経歴</TitleCareer>
        </TitleWrapper>
        <EditWrapper>
          <EditCareerList>
            <EditCareerItem>
              <CareerInfoWrapper>
                <CareerTitle>会社名companynamecompanynamecompanyname（非公開）</CareerTitle>
                <CareerCompany>Yahoo!オークション販売経験７年</CareerCompany>
                <CarrerDate>2018/00/00〜2018/00/00</CarrerDate>
                <CarrerDesc>
                  親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない
                </CarrerDesc>
              </CareerInfoWrapper>
              <ActionEditTopWrapper>
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
              </ActionEditTopWrapper>
            </EditCareerItem>
            <EditCareerItem>
              <CareerInfoWrapper>
                <CareerTitle>会社名companynamecompanynamecompanyname（非公開）</CareerTitle>
                <CareerCompany>Yahoo!オークション販売経験７年</CareerCompany>
                <CarrerDate>2018/00/00〜2018/00/00</CarrerDate>
                <CarrerDesc>
                  親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない
                </CarrerDesc>
              </CareerInfoWrapper>
              <ActionEditTopWrapper>
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
              </ActionEditTopWrapper>
            </EditCareerItem>
          </EditCareerList>
        </EditWrapper>

        <EditList>
          <EditItem>
            <EditTitle>タイトル</EditTitle>
            <EditBody>
              <Input type="text" placeholder="会社名/学歴/業界など" />
            </EditBody>
          </EditItem>
          <EditItem>
            <EditTitle>時期</EditTitle>
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
                <SelectTextEnd>日</SelectTextEnd>
                <SelectText>〜</SelectText>
              </ItemSelect>
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
                <SelectTextEnd>日</SelectTextEnd>
              </ItemSelect>
            </SelectGroup>
            </EditBody>
          </EditItem>
          <EditItem>
            <EditTitleTop>詳細</EditTitleTop>
            <EditBody>
              <TextAreaWrapper>
                <TextArea maxlength={1000} size="h100"></TextArea>
              </TextAreaWrapper>
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

export default CareerForm;