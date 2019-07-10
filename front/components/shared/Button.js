import styled, { css } from 'styled-components';

const types = {
  action: { borderColor: '#9F1D27', bg: '#E52C39', borderShadow: 'inset 0 1px 0 #F4A6AC', border: '1px solid #9F1D27' },
  login: { color: '#333', fontSize: '16px', display: 'inline-flex'},
  submit: { borderColor: '#9F1D27', bg: '#E52C39', borderShadow: 'inset 0 1px 0 #F4A6AC', border: '1px solid #9F1D27' },
  edit: { color: '#333', borderColor: '#999', bg: 'linear-gradient(#FBFBFB, #E6E6E6)', border: '1px solid #999'},
  circle: { bg: '#FBFBFB', border: '1px solid #F2F2F2', borderRadius: '50%' }
}


const sizes = {
  w160_h38_f16: {width: '160px', height: '38px', fontSize: '16px'},
  w326_h48_f14: {width: '326px', height: '48px', fontSize: '14px'},
  w306_h48_f14: {width: '306px', height: '48px', fontSize: '14px'},
  w50_h28_f12: {width: '50px', height: '28px', fontSize: '12px'},
  w36_h36_f12: {width: '36px', height: '36px', fontSize: '12px'},
  w102_h28_f12: {width: '102px', height: '28px', fontSize: '12px'},
  inline: {width: 'auto', height: 'auto'}
}

const ButtonStyle = css`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  color: #FFF;
  &:hover {
    opacity: .8;
    backface-visibility: hidden;
  }
  &:visited {
    color: inherit;
  }
  &.isDisable {
    opacity: .3;
    cursor: default;
  }
`

export const ButtonLink = styled.a.attrs({
  // href: props => props.href,
  // target: props => (props.target === '_new' ? props.target : '_self')
})`
  ${ButtonStyle}
  width: ${(props) => sizes[props.size]['width']};
  height: ${(props) => sizes[props.size]['height']};
  font-size: ${(props) => sizes[props.size]['fontSize']};

  background: ${(props) => types[props.type]['bg']};
  box-shadow: ${(props) => types[props.type]['borderShadow']};
  border: ${(props) => types[props.type]['border']};
  border-radius: ${(props) => types[props.type]['borderRadius']};
  color: ${(props) => types[props.type]['color']};
  display: ${(props) => types[props.type]['display']};
  font-size: ${(props) => types[props.type]['fontSize']};
`

export const ButtonSubmit = styled.button.attrs({
  // href: props => props.href,
  // target: props => (props.target === '_new' ? props.target : '_self')
})`
  ${ButtonStyle}
  width: ${(props) => sizes[props.size]['width']};
  height: ${(props) => sizes[props.size]['height']};
  font-size: ${(props) => sizes[props.size]['fontSize']};

  background: ${(props) => types[props.type]['bg']};
  box-shadow: ${(props) => types[props.type]['borderShadow']};
  border: ${(props) => types[props.type]['border']};
  color: ${(props) => types[props.type]['color']};
  display: ${(props) => types[props.type]['display']};
  font-size: ${(props) => types[props.type]['fontSize']};
`