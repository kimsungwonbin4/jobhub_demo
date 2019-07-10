import React from 'react';
import Link from 'next/link';
import styled from "styled-components";


const Content = styled.a`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 28px;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  width: 40px;
`;

const NotificationBody = styled.div`
  flex: 1;
  margin-left: 16px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #333;
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  font-size: 12px;
  color: #999;
`;

const NotificationCard = ({result}) => {
  return (
    <>
      <Link href="">
        <Content>
          <Thumbnail>
            <img src="/static/img/test_img.png" width="40" height="40" alt=""/>
          </Thumbnail>
          <NotificationBody>
            <Title>{result.name}{result.title}</Title>
            <Date>{result.writeDate}</Date>
          </NotificationBody>
        </Content>
      </Link>
    </>
  );
};

export default NotificationCard;

