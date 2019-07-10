import React from 'react';
import styled from "styled-components";
import SnsBtnStyle from '../components/SnsBtnStyle';

const SnsWrapper = styled.div`
  position: relative;
  flex: 1;
  border-left: 1px dotted #999;
  margin-left: 62px;
  padding-left: 52px;
  &:before {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0;
    box-sizing: border-box;
    content: "or";
    width: 40px;
    height: 40px;
    margin-top: -20px;
    margin-left: -20px;
    font-size: 16px;
    color: #999;
    border-radius: 50%;
    border: 2px solid #999;
    background: #FFF;
`;

const SnsTitle = styled.div`
  font-size: 16px;
`;

const SnsList = styled.ul`
  margin-top: 20px;
`;

const Item = styled.li`
  &:not(:first-child) {
    margin-top: 16px;
  }
`;



const dummy = [
  {
    id: 1,
    title: 'Facebook',
    url: '',
  },
  {
    id: 2,
    title: 'Google＋',
    url: '',
  },
  {
    id: 3,
    title: 'Twitter',
    url: '',
  },
  {
    id: 4,
    title: 'Yahoo',
    url: '',
  },
  {
    id: 5,
    title: 'GitHub',
    url: '',
  }
];

const SnsBtnList = () => {
  return (
    <>
      <SnsWrapper>
        <SnsTitle>外部サイトIDで登録</SnsTitle>
        <SnsList>
          {dummy.map((result, i) => {
            return (
              <Item>
                <SnsBtnStyle title={result.title} link={result.url}></SnsBtnStyle>
              </Item>
            )
          })}
        </SnsList>
      </SnsWrapper>
    </>
  )
}

export default SnsBtnList;