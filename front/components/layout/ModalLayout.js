import React from 'react';

import styled from 'styled-components';


const ModalWrapper = styled.div`
  position: absolute;
  top: 126px;
  left: 50%;
  z-index: 9999;
  box-sizing: border-box;
  width: 796px;
  margin-left: -398px;
  margin-bottom: 200px;
  padding: 24px 20px 54px;
  background: #FFF;
  border-radius: 5px;
`;

const ModalTitle = styled.div`
  margin-top: 32px;
  font-size: 20px;
  text-align: center;
  line-height: 1.6;
`;

const ModalBody = styled.div`
  margin-top: 32px;
`;


const ModalLayout = ({ title, children }) => {
  return (
    <>
      <ModalWrapper>
        <ModalTitle>{title}</ModalTitle>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalWrapper>
    </>
  )
}

export default ModalLayout;