import React from 'react';
import styled from 'styled-components';
import MessagePopup from './MessagePopup';
import NotificationPopup from './NotificationPopup';
import SetupPopup from './SetupPopup';

const PopupWrapper = styled.div`
  display: flex;
`;

const PopupBtns = ({}) => {
  const test = () => {
    
  }
  return (
    <>
     <PopupWrapper>
        <MessagePopup onClick={test}/>
        <NotificationPopup />
        <SetupPopup />
     </PopupWrapper>
    </>
  )
}

export default PopupBtns;