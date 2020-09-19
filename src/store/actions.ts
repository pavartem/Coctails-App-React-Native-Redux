import * as types from './types';

export const startFetchCategories = () => ({
  type: types.START_FETCH_CATEGORIES,
});

export const successFetchCategories = (categories) => ({
  type: types.SUCCESS_FETCH_CATEGORIES,
  payload: categories,
});

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(startFetchCategories());
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json())
      .then((res) =>
        res.drinks.map((el) => {
          return {title: el.strCategory, checked: false};
        }),
      )
      .then((categories) => dispatch(successFetchCategories(categories)));
  };
};

export const toggleCategory = (category) => ({
  type: types.TOGGLE_CATEGORY,
  payload: category,
});
