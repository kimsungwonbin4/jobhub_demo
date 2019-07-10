import React from 'react';
import styled from 'styled-components';

const FormActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const FormTextareaWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 12px 12px 20px 12px;
  border: 1px solid #CCC;
  border-radius: 5px;
  background: #FFF;
`;

const Upload = styled.div`
  display: inline-flex;
  align-items: center;
`;

const LabelUpload = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 122px;
  height: 18px;
  font-size: 10px;
  background: linear-gradient(#fbfbfb, #e6e6e6);
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #999;
`;

const InputUpload = styled.input`
  display: none;
`;

const UploadText = styled.div`
  margin-left: 12px;
  font-size: 10px;
`;

export const ActionWrapper = ({ children }) => {
  return (
    <>
      <FormActionWrapper>
        { children }
      </FormActionWrapper>
    </>
  );
};

export const TextAreaWrapper = ({ children }) => {
  return (
    <>
      <FormTextareaWrapper>
        { children }
      </FormTextareaWrapper>
    </>
  );
};

export const UploadWrapper = () => {
  return (
    <>
      <Upload>
        <LabelUpload>ファイルを選択
          <InputUpload type="file"/>
        </LabelUpload>
        <UploadText>選択されていません</UploadText>
      </Upload>
    </>
  );
};