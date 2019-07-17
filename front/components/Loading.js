import React from 'react';
import styled from "styled-components";

const LoadingBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;
  background: rgba(0, 0, 0, 0.8);
`;

const LoadingWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99999999;
  margin-top: -21px;
  margin-left: -21px;
`;

const Loader = styled.div`
  width:43px;
  height:43px;
  animation: cssload-animball_two 2.2s infinite;
`;

const LoaderInternal = styled.div`
  width: 43px;
  height: 43px;
  position: absolute;
`;

const LoaderInternalBallColor = styled.div`
  width: 19px;
  height: 19px;
  border-radius: 50%;
  position: absolute;
  animation: cssload-animball_one 2.2s infinite ease;
  &.BallColor1 {
    background-color: rgb(229,44,56);
    top: 0; 
    left: 0;
  }
  &.BallColor2 {
    background-color: rgb(246,217,54);
    top: 0;
    left: 23px;
  }
  &.BallColor3 {
    background-color: rgb(26,148,224);
    top:23px;
    left:0;
  }
  &.BallColor4 {
    background-color: rgb(14,184,173);
    top: 23px;
    left: 23px; 
  }


  @keyframes cssload-animball_one {
    0%{ position: absolute;}
    50%{top:12px; left:12px; position: absolute;opacity:0.5;}
    100%{ position: absolute;}
  }
  
  @keyframes cssload-animball_two {
    0%{transform:rotate(0deg) scale(1);}
    50%{transform:rotate(360deg) scale(1.3);}
    100%{transform:rotate(720deg) scale(1);}
  }

`;

const Loading = () => {
  return (
    <>
      <LoadingWrapper>
        <Loader>
          <LoaderInternal>
            <LoaderInternalBallColor className="BallColor1" />
          </LoaderInternal>
          <LoaderInternal>
            <LoaderInternalBallColor className="BallColor2" />
          </LoaderInternal>
          <LoaderInternal>
            <LoaderInternalBallColor className="BallColor3" />
          </LoaderInternal>
          <LoaderInternal>
            <LoaderInternalBallColor className="BallColor4" />
          </LoaderInternal>
        </Loader>
      </LoadingWrapper>
      <LoadingBg />
    </>
  )
}

export default Loading;