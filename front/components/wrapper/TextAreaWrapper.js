import React from 'react';
import styled from 'styled-components';

const FormTextareaWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 12px 12px 20px 12px;
  border: 1px solid #CCC;
  border-radius: 5px;
  background: #FFF;
`;

const TextAreaWrapper = ({ children }) => {
  return (
    <>
      <FormTextareaWrapper>
        { children }
      </FormTextareaWrapper>
    </>
  );
};


export default TextAreaWrapper;