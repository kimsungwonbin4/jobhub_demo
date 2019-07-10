import React from 'react';
import styled from 'styled-components';

const FormActionWrapper = styled.div`
  margin-top: 20px;
`;

const FormActionWrapper = ({ children }) => {
  return (
    <>
      <FormActionWrapper>
        { children }
      </FormActionWrapper>
    </>
  );
};


export default TextAreaWrapper;