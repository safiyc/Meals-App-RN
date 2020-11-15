// this val is stored in an identifier constant to avoid typos
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET-FILTERS';

// action creater func
export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id }
};

// filterSettings obj contains all T or F values of different filters
export const setFilters = filterSettings => {
  return { type: SET_FILTERS, filters: filterSettings };
};