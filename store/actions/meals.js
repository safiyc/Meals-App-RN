// this val is stored in an identifier constant to avoid typos
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

// action creater func
export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id }
};