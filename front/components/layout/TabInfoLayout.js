import React from 'react';

import styled from 'styled-components';

const TabInfoWrapper = styled.div`
  box-sizing: border-box;
  padding: 40px;
  background: #FFF;
`;


const TabInfoLayout = ({ children }) => {
  return (
    <>
      <TabInfoWrapper>
        { children }
      </TabInfoWrapper>
    </>
  )
}

export default TabInfoLayout;