import styled, { css } from 'styled-components';

const sizes = {
  h100: { height: '100px' },
}

const InputStyle = css`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  font-size: 16px;
  padding: 0 14px;
  border-radius: 5px;
  border: 1px solid #CCC;
  color: #333;
  appearance: none;
  outline: none;
  :-webkit-input-placeholder {
    color: #B3B3B3;
  }
  
  :-moz-placeholder {
    color: #B3B3B3;
  }
  
  :-ms-input-placeholder {
    color: #B3B3B3;
  }
  &:focus {
    outline: 0;
    border: 1px solid #1A94E0;
  }
  &.isError {
    border-color: #E52C39;
  }
`;

const TextAreaStyle = css`
  width: 100%;
  height: 290px;
  border: 0;
  font-size: 16px;
  line-height: 1.4;
  vertical-align: top;
  resize: none;
  outline: none;
`;


export const Input = styled.input`
  ${InputStyle}
`;

export const InputLimit = styled.input`
  ${InputStyle}
  padding-right: 50px;
`;

export const TextAreaLimit = styled.textarea`
  ${TextAreaStyle}
`;

export const TextArea = styled.textarea`
  ${TextAreaStyle}
  height: ${(props) => sizes[props.size]['height']};
`;
