import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {reducer} from './reducer';
import logger from 'redux-logger';

export type drinksType = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

export type filterType = {
  title: string;
  checked: boolean;
  loaded: boolean;
};

export type typeStore = {
  drinks: drinksType;
  loading: boolean;
  filters: Array<filterType>;
};

export type CategoryType = {
  strCategory: string;
};

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
