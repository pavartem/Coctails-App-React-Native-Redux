import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {reducer} from './reducer';
import logger from 'redux-logger';

const initialState = {
  drinks: {},
  loading: false,
  filters: [],
};

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunkMiddleware, logger),
);
