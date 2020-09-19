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

    default:
      return {
        ...state,
      };
  }
}
