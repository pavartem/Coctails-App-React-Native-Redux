import * as types from './types';
import {CategoryType, drinksType} from './store';
import {PayloadObject} from './reducer';

export const startFetchCategories = () => ({
  type: types.START_FETCH_CATEGORIES,
});

export const successFetchCategories = (categories: Array<string>) => ({
  type: types.SUCCESS_FETCH_CATEGORIES,
  payload: categories,
});

export const fetchCategories = () => {
  return (dispatch: Function) => {
    dispatch(startFetchCategories());
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json())
      .then((res) =>
        res.drinks.map((el: CategoryType) => {
          return {title: el.strCategory, checked: false, loaded: false};
        }),
      )
      .then((categories) => dispatch(successFetchCategories(categories)));
  };
};

export const toggleCategory = (category: string) => ({
  type: types.TOGGLE_CATEGORY,
  payload: category,
});

export const startFetchItems = () => ({
  type: types.START_FETCH_ITEMS,
});

export const successFetchItems = (payload: {
  query: string;
  items: {[p: string]: PayloadObject};
}) => ({
  type: types.SUCCESS_FETCH_ITEMS,
  payload,
});

export const fetchItems = (query = 'Ordinary Drink') => {
  return (dispatch: Function) => {
    dispatch(startFetchItems());
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURI(
        query,
      )}`,
    )
      .then((response) => response.json())
      .then((res) => {
        return {[query]: res.drinks.map((el: drinksType) => el)};
      })
      .then((items) => dispatch(successFetchItems({items, query})));
  };
};

export const successFetchAdditionalItems = (items: {
  query: string;
  items: {[p: string]: PayloadObject};
}) => ({
  type: types.FETCH_ADDITIONAL_ITEMS_SUCCESS,
  payload: items,
});

export const fetchAdditionalItems = (query = 'Ordinary Drink') => {
  return (dispatch: Function) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURI(
        query,
      )}`,
    )
      .then((response) => response.json())
      .then((res) => {
        return {[query]: res.drinks.map((el: drinksType) => el)};
      })
      .then((items) => {
        console.log({items, query});
        return items;
      })
      .then((items) => dispatch(successFetchAdditionalItems({items, query})));
  };
};
