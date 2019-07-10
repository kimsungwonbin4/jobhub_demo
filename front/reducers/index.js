import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import modal from './modal';

const rootReducer = combineReducers({
  user,
  post,
  modal,
});

export default rootReducer;
