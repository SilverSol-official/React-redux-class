import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './RootReducer';

const logger = (store) => (next) => (action) => {
  // eslint-disable-next-line no-console
  console.log('dispatching', action);
  const result = next(action);
  // eslint-disable-next-line no-console
  console.log('next state', store.getState());
  return result;
};

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
