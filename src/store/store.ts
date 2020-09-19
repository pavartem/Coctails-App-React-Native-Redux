import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {reducer} from './reducer';
import logger from 'redux-logger';

const initialState = {
  coctails: [
    {
      id: 1,
      name: 'BMW 320',
      description: 'tedggfdgdgf',
      added: false,
    },
    {
      id: 2,
      name: 'BMW X5',
      description: 'tedggfdgdgf2',
      added: true,
    },
  ],
  loading: false,
  filters: [],
};

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunkMiddleware, logger),
);
