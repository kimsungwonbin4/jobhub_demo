import styled, { css } from 'styled-components';

const sizes = {
  w308_h38_f12: { width: '308px', height: '38px', fontSize: '12px' },
  w64_h38_f12: { width: '64px', height: '38px', fontSize: '12px' },
}

const SelectStyle = css`
  width: 100%;
  box-sizing: border-box;
  padding: 7px 10px;
  line-height: 1;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  color: #333;
  border-radius: 5px;
  border: 1px solid #CCC;
  background: url(/static/img/icons/down.png), #FFF;
  background-size: 8px 5px, 100% 100%;
  background-position: right 8% center;
  background-repeat: no-repeat;
`;

export const Select = styled.select`
  ${SelectStyle}
  width: ${(props) => sizes[props.size]['width']};
  height: ${(props) => sizes[props.size]['height']};
  font-size: ${(props) => sizes[props.size]['fontSize']};
`;