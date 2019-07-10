import React from 'react';
import Link from 'next/link';
import styled from "styled-components";


const SnsBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 186px;
  height: 48px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  &.Facebook {
    color: #FFF;
    background: url(/static/img/icons/facebook.png) #4774BA no-repeat 20px center;
    background-size: 9px, 20px;
  }
  &.Google＋ {
    color: #333;
    background: url(/static/img/icons/google.png) #FFF no-repeat 16px center;
    background-size: 17px, 17px;
    border: 1px solid #333;
  }
  &.Twitter {
    color: #FFF;
    background: url(/static/img/icons/twitter.png) #3FACD5 no-repeat 16px center;
    background-size: 21px, 17px;
  }
  &.Yahoo {
    color: #FFF;
    background: url(/static/img/icons/yahoo.png) #D62825 no-repeat 16px center;
    background-size: 17px, 16px;
  }
  &.GitHub {
    color: #FFF;
    background: url(/static/img/icons/github.png) #474646 no-repeat 12px center;
    background-size: 27px, 21px;
  }
`;

// const SnsFacebook = styled(SnsBtn)`
  
// `;

// const SnsGoogle = styled(SnsBtn)`
  

// `;

// const SnsTwitter = styled(SnsBtn)`
  
// `;

// const SnsYahoo = styled(SnsBtn)`
 
// `;

// const SnsGitHub = styled(SnsBtn)`
//   color: #FFF;
//   background: url(/static/img/icons/github.png) #474646 no-repeat 12px center;
//   background-size: 27px, 21px;
// `;

const SnsBtnStyle = ({title, link}) => {
  return (
    <>
      <Link href={link}>
        <SnsBtn className={title}>{title}</SnsBtn>
      </Link>
    </>
  )
}

export default SnsBtnStyle;