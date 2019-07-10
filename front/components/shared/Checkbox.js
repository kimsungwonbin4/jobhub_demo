import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-flex;
  align-items: center;
`

const CheckboxStyle = styled.input.attrs({ type: 'checkbox'})`
  display: none;
  +i {
    &:before {
      content: "";
      display: inline-block;
      background-image: url(/static/img/inputs/checkoff.png);
      width: 16px;
      height: 16px;
      background-size: 16px 16px;
    }
  }
  &:checked {
    +i {
      &:before {
        content: "";
        display: inline-block;
        background-image: url(/static/img/inputs/checkon.png);
        width: 16px;
        height: 16px;
        background-size: 16px 16px;
      }
    }
  }
`

const Icon = styled.i`
  margin-right: 10px;
  height: 16px;
`

const Checkbox = ({text}) => {
  return (
    <>
      <Label>
        <CheckboxStyle/><Icon/>{text}
      </Label>
    </>
  )
}

export default Checkbox;