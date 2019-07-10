import React from 'react';
import styled from 'styled-components';
import { InputLimit, TextAreaLimit, Input } from '../components/shared/Input';
import { Select } from '../components/shared/Select';
import { Radio, RadioLabel } from '../components/shared/Radio';
import { IconAdd } from '../components/shared/Icon';
import { ButtonSubmit } from '../components/shared/Button';

const FormList = styled.ul`
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
`;

const Item = styled.li`
  &:not(:first-child) {
    border-top: 1px solid #E6E6E6;
  }
`;

const FormData = styled.div`
  display: flex;
  align-items: center;
  background: #F2F2F2;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  width: 124px;
  font-size: 12px;
  font-weight: 600;
`;

const TitleTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: auto;
  padding: 0 12px;
  width: 124px;
  margin-top: 33px;
  font-size: 12px;
  font-weight: 600;
`;


const TitleBlock = styled.div`
  padding: 0 12px;
  width: 124px;
  font-size: 12px;
  font-weight: 600;
`;

const Body = styled.div`
  flex: 1;
  padding: 12px 2px 12px 22px;
  box-sizing: border-box;
  background: #FFF;
`;

const Any = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #999;
`;

const AnyBlock = styled.div`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #999;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 60px;
`;

const UploadWrapper = styled.div`
  margin-left: 22px;
  display: inline-flex;
  align-items: center;
`;

const LabelUpload = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 122px;
  height: 18px;
  font-size: 10px;
  background: linear-gradient(#fbfbfb, #e6e6e6);
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #999;
`;

const InputUpload = styled.input`
  display: none;
`;

const UploadText = styled.div`
  margin-left: 12px;
  font-size: 10px;
`;

const FormText = styled.div`
  margin: 4px 0;
`;

const FormInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
`;

const LimitTextWrapper = styled.div`
  position: absolute;
  right: 12px;
  z-index: 1;
  font-size: 12px;
  color: #999;
`;

const Limit = styled.span`

`;

const FormTextareaWrapper = styled.div`
  padding: 12px 12px 20px 12px;
  border: 1px solid #CCC;
  border-radius: 5px;
`;

const LimitTextAreaWrapper = styled.div`
  flex: 1;
  margin-top: 12px;
  text-align: right;
  font-size: 12px;
  color: #999;
`;

const FormSelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SelectAddWrapper = styled.div`
  margin-top: 8px;
`;

const SelectAdd = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  color: #1A94E0;
  font-weight: 600;
`;

const SubmitWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const TitleMainWrapper = styled.div`
  display: flex;
  margin-top: 50px;
`;

const TitleSubWrapper = styled.div`
  display: flex;
  margin-top: 12px;
`;

const TitleSub = styled.div`
  font-size: 12px;
  line-height: 1.6;
`;

const Required = styled.span`
  font-weight: bold;
  color: #E52C39;
  font-size: 12px;
`;

const UseWrapper = styled.div`
  margin-top: 12px;
`;

const UseList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const ItemUse = styled.li`
  &:not(:first-child) {
    margin-left: 22px;
  }
`;

const FormListWrapper = styled.div`
  margin-top: 40px;
`;

const InputList = styled.ul`

`;

const InputItem = styled.li`
  &:not(:first-child) {
    margin-top: 8px;
  }
`;

const RadioGroup = styled.ul`
  display: flex;
`;

const ItemRadio = styled.li`
  &:not(:first-child) {
    margin-left: 32px;
  }
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

const RadioList = styled.ul`

`;

const ItemRadioList = styled.li`
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const EditTabInfo = () => {
  return (
    <>
      <FormList>
        <Item>
          <FormData>
            <TitleBlock>
              プロフィール写真<AnyBlock>[任意]</AnyBlock>
            </TitleBlock>
            <Body>
              <Profile>
                <ProfileImg>
                  <img src="/static/img/test_img.png" width="60" height="60" alt="" />
                </ProfileImg>
                <UploadWrapper>
                  <LabelUpload>ファイルを選択
                    <InputUpload type="file"/>
                  </LabelUpload>
                  <UploadText>選択されていません</UploadText>
                </UploadWrapper>
              </Profile>
            </Body>
          </FormData>
        </Item>
        <Item>
          <FormData>
            <Title>
              ユーザーID
            </Title>
            <Body>
              <FormText>Abcdefghijklmn</FormText>
            </Body>
          </FormData>
        </Item>
        <Item>
          <FormData>
            <Title>
              ニックネーム
            </Title>
            <Body>
              <FormInputWrapper>
                <InputLimit placeholder="ニックネーム" maxlength={30}/>
                <LimitTextWrapper>
                  <Limit>0</Limit>/30
                </LimitTextWrapper>
              </FormInputWrapper>
            </Body>
          </FormData>
        </Item>
        <Item>
          <FormData>
            <TitleTop>
              自己紹介
            </TitleTop>
            <Body>
              <FormTextareaWrapper>
                <TextAreaLimit maxlength={1000}></TextAreaLimit>
                <LimitTextAreaWrapper>
                  0/1000
                </LimitTextAreaWrapper>
              </FormTextareaWrapper>
            </Body>
          </FormData>
        </Item>
        <Item>
          <FormData>
            <TitleTop>
              職種
            </TitleTop>
            <Body>
              <FormSelectWrapper>
                <Select size={"w308_h38_f12"}>
                  <option value="">Webエンジニア・Webプログラマ</option>
                  <option value="">インエンジニア</option>
                  <option value="">その他</option>
                </Select>
              </FormSelectWrapper>
              <SelectAddWrapper>
                <SelectAdd>
                  <IconAdd />職種を追加する（最大５つまで）
                </SelectAdd>
              </SelectAddWrapper>
            </Body>
          </FormData>
        </Item>
      </FormList>
      <SubmitWrapper>
        <ButtonSubmit type="submit" size={"w326_h48_f14"}>更新する</ButtonSubmit>
      </SubmitWrapper>
      <TitleMainWrapper>
        <TitleSub>
          以下の項目は全て<Required>[必須]</Required>です。<br />
          JOBHUBの主な利用用途
        </TitleSub>
      </TitleMainWrapper>
      <UseWrapper>
        <UseList>
          <ItemUse>
            <RadioLabel text={'仕事を受注する'} name={'test'} />
          </ItemUse>
          <ItemUse>
            <RadioLabel text={'仕事を発注する'} name={'test'} />
          </ItemUse>
        </UseList>
      </UseWrapper>
      <TitleSubWrapper>
        <TitleSub>
          JOBHUBの利用形態
        </TitleSub>
      </TitleSubWrapper>
      <UseWrapper>
        <UseList>
          <ItemUse>
            <RadioLabel text={'個人として利用する'} name={'test1'} />
          </ItemUse>
          <ItemUse>
            <RadioLabel text={'法人として利用する'} name={'test1'} />
          </ItemUse>
        </UseList>
      </UseWrapper>
      <FormListWrapper>
        <FormList>
          <Item>
            <FormData>
              <Title>
                氏名 
              </Title>
              <Body>
                <InputList>
                  <InputItem>
                    <Input type="text" placeholder="氏名" />
                  </InputItem>
                  <InputItem>
                    <Input type="text" placeholder="氏名（カナ）" />
                  </InputItem>
                </InputList>
              </Body>
            </FormData>
          </Item>
          <Item>
            <FormData>
              <Title>性別</Title>
              <Body>
                <RadioGroup>
                  <ItemRadio>
                    <Radio text={'男性'} name={'test2'} />
                  </ItemRadio>
                  <ItemRadio>
                    <Radio text={'女性'} name={'test2'} />
                  </ItemRadio>
                </RadioGroup>
              </Body>
            </FormData>
          </Item>
          <Item>
            <FormData>
              <Title>生年月日</Title>
              <Body>
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
              </Body>
            </FormData>
          </Item>
          <Item>
            <FormData>
              <TitleTop>勤務状況</TitleTop>
              <Body>
                <RadioList>
                  <ItemRadioList>
                    <Radio text={'会社員'} name={'test5'} />
                  </ItemRadioList>
                  <ItemRadioList>
                    <FormInputWrapper>
                      <InputLimit placeholder="会社名" maxLength={30}/>
                      <LimitTextWrapper>
                        <Limit>0</Limit>/30
                      </LimitTextWrapper>
                    </FormInputWrapper>
                  </ItemRadioList>
                  <ItemRadioList>
                    <Radio text={'会社員ではない'} name={'test5'} />
                  </ItemRadioList>
                </RadioList>
              </Body>
            </FormData>
          </Item>
          <Item>
            <FormData>
              <Title>
              郵便番号 
              </Title>
              <Body>
                <Input type="text" placeholder="例）9876543" maxLength={7} />
              </Body>
            </FormData>
          </Item>
          <Item>
            <FormData>
              <Title>
              都道府県 
              </Title>
              <Body>
                <Input type="text" placeholder="都道府県" readOnly/>
              </Body>
            </FormData>
          </Item>
          <Item>
            <FormData>
              <Title>
              現住所 
              </Title>
              <Body>
              <InputList>
                <InputItem>
                  <Input type="text" placeholder="市区町村" readOnly/>
                </InputItem>
                <InputItem>
                  <Input type="text" placeholder="番地•ビル名" readOnly/>
                </InputItem>
              </InputList>
              </Body>
            </FormData>
          </Item>
          <Item>
            <FormData>
              <Title>
              電話番号 
              </Title>
              <Body>
                <Input type="text" placeholder="00000000" />
              </Body>
            </FormData>
          </Item>
        </FormList>
      </FormListWrapper>
      <SubmitWrapper>
        <ButtonSubmit type="submit" size={"w326_h48_f14"}>更新する</ButtonSubmit>
      </SubmitWrapper>
    </>
  );
};

export default EditTabInfo;