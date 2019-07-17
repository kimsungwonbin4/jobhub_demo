import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import modal from './modal';
import loading from './loading';

const rootReducer = combineReducers({
  user,
  post,
  modal,
  loading,
});

export default rootReducer;
