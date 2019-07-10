export const initialState = {
  modalIsOpen: false,
  modalSignUpIsOpen: false,
};

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDDEN_MODAL = 'HIDDEN_MODAL';

export const SHOW_MODAL_SIGNUP = 'SHOW_MODAL_SIGNUP';
export const HIDDEN_MODAL_SIGNUP = 'HIDDEN_MODAL_SIGNUP';


export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      return {
        ...state,
        modalIsOpen: true
      }
    }
    case HIDDEN_MODAL: {
      return {
        ...state,
        modalIsOpen: false
      }
    }
    case SHOW_MODAL_SIGNUP: {
      return {
        ...state,
        modalSignUpIsOpen: true
      }
    }
    case HIDDEN_MODAL_SIGNUP: {
      return {
        ...state,
        modalSignUpIsOpen: false
      }
    }


    default: {
      return {
        ...state,
      }
    }
  }
};