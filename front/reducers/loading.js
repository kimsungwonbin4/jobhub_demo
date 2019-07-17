export const initialState = {
  isLoading: false
};

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDDEN_LOADING = 'HIDDEN_LOADING';

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }
    case HIDDEN_LOADING: {
      return {
        ...state,
        isLoading: false
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
};