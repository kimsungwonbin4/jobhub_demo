import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { HIDDEN_MODAL, HIDDEN_MODAL_SIGNUP } from '../../reducers/modal';

const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.8);
`;


const ModalBg = () => {

  const dispatch = useDispatch();
  // Modal
  const onModalClose = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: HIDDEN_MODAL,
    })
    dispatch({
      type: HIDDEN_MODAL_SIGNUP,
    })
  }, []);

  return (
    <>
     <ModalBack onClick={onModalClose}/>
    </>
  )
}

export default ModalBg;