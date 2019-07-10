import React from 'react';
import Link from 'next/link';
import styled from "styled-components";

const Recommends = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const RecommendItem = styled.li`
  margin-left: 16px;
  &:nth-child(3n+1) {
    margin-left: 0;
  }
  &:nth-child(n+4) {
    margin-top: 16px;
  }
`;

const Recommend = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 248px;
  padding: 24px 0 18px;
  background: #FFF;
  box-shadow: #CCC 0 0 5px;
  border-radius: 5px;
`;

const RecommendHeader = styled.div`
  margin: 0 16px;
`;

const RecommendHeaderTitle = styled.div`
  height: 75px;
`;

const RecommendBody = styled.div`
  margin-top: 12px;
  border-top: 1px solid #E6E6E6;
`;

const RecommendTitleLink = styled.a`
  font-size: 16px;
  color: #1A94E0;
  font-weight: 600;
  line-height: 1.6;
  -webkit-box-orient: vertical;
  display: block;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const JobTypeList = styled.ul`
  display: flex;
  margin-top: 6px;
`;

const JobTypeItem = styled.li`
  &:not(:first-child) {
    margin-left: 4px;
  }
`;

const JobType = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const JobTypeLink = styled.a`
  margin: 0 4px;
  color: #1A94E0;
  font-weight: normal;
`;

const RecommendList = styled.div`
  margin: 12px 0 0 16px;
`;

const RecommendListItem = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #E52C39;
  margin-left: 8px;
`;

const RecommendTitle = styled.span`
  display: flex;
  align-items: center;
  color: #999;
`;

const RecommendListItemDate = styled.span`
  margin-left: 16px;
  font-size: 16px;
  font-weight: bold;
`;

const RecommendListItemText = styled.span`
  font-size: 12px;
`;

const Profile = styled.div`
  display: flex;
  margin-top: 8px;
`;

const Thumbnail = styled.div`
  width: 40px;
`;

const ProfileInfo = styled.div`
  flex: 1;
  margin-left: 12px;
`;

const ProfileName = styled.div`
  margin-top: 6px;
  font-size: 12px;
  font-weight: bold;
`;


const RecommendCard = ({result}) => {
  return (
    <>
      <Recommends>
        <RecommendItem>
          <Recommend>
            <RecommendHeader>
              <RecommendHeaderTitle>
                <Link href="/"><RecommendTitleLink>案件名が入ります。【リモートワーカーエンジニア集！】アジア最大級のソーシャルメ</RecommendTitleLink></Link>
              </RecommendHeaderTitle>
              <JobTypeList>
                <JobTypeItem>
                  <JobType>
                    [<Link href="/"><JobTypeLink>職種が入ります</JobTypeLink></Link>]
                  </JobType>
                </JobTypeItem>
              </JobTypeList>
            </RecommendHeader>
            <RecommendBody>
            <RecommendList>
              <RecommendListItem>
                <RecommendTitle>報酬</RecommendTitle>
                <Price>¥ 00,000 〜 00,000</Price>
              </RecommendListItem>
              <RecommendListItem>
                <RecommendTitle>期限</RecommendTitle>
                <RecommendListItemDate>00</RecommendListItemDate>
                <RecommendListItemText>日</RecommendListItemText>
                <RecommendListItemText>（2018/00/00まで）</RecommendListItemText>
              </RecommendListItem>
              <RecommendListItem>
              <Profile>
                <Thumbnail>
                  <img src="/static/img/test_img.png" width="40" height="40" alt="" />
                </Thumbnail>
                <ProfileInfo>
                  <ProfileName>名前名前名前</ProfileName>
                </ProfileInfo>
              </Profile>
            </RecommendListItem>
            </RecommendList>
          </RecommendBody>
          </Recommend>
        </RecommendItem>
      </Recommends>
    </>   
  )
};

export default RecommendCard;