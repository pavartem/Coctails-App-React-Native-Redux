import * as types from './types';

export function reducer(state, {type, payload}) {
  switch (type) {
    case types.START_FETCH_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case types.SUCCESS_FETCH_CATEGORIES:
      return {
        ...state,
        loading: false,
        filters: payload,
      };

    case types.TOGGLE_CATEGORY:
      return {
        ...state,
        filters: state.filters.map((filter) =>
          filter.title === payload
            ? {...filter, checked: !filter.checked}
            : filter,
        ),
      };

    case types.START_FETCH_ITEMS:
      return {
        ...state,
        loading: true,
      };
    case types.SUCCESS_FETCH_ITEMS:
      return {
        ...state,
        loading: false,
        drinks: {...payload.items},
        filters: state.filters.map((filter) =>
          filter.title === payload.query
            ? {...filter, loaded: true}
            : {...filter, loaded: false},
        ),
      };

    case types.FETCH_ADDITIONAL_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        drinks: {...state.drinks, ...payload.items},
        filters: state.filters.map((filter) =>
          filter.title === payload.query ? {...filter, loaded: true} : filter,
        ),
      };
    default:
      return {
        ...state,
      };
  }
}
