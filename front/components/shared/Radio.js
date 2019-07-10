import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-flex;
  align-items: center;
`

const RadioStyle = styled.input.attrs({ type: 'radio'})`
  display: none;
  +i {
    &:before {
      content: "";
      display: inline-block;
      background-image: url(/static/img/inputs/selectoff.png);
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
        background-image: url(/static/img/inputs/selecton.png);
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

const LabelUse = styled.label`
  display: flex;
  align-items: center;
  width: 337px;
  height: 60px;
  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 24px;
  background: #FBFBFB;
`

export const Radio = ({text, name}) => {
  return (
    <>
      <Label>
        <RadioStyle name={name}/><Icon/>{text}
      </Label>
    </>
  )
}

export const RadioLabel = ({text, name}) => {
  return (
    <>
      <LabelUse>
        <RadioStyle name={name}/><Icon/>{text}
      </LabelUse>
    </>
  )
}
