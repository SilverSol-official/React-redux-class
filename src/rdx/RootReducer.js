import { combineReducers } from 'redux';
import { reducer as taskReducer } from './items/reducer';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  tasks: taskReducer,
  // users: userReducer, TO BE CONTINUE
});
