// meals.js manages logic for marking favorite meals and for managing filters
import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

// initial state when app launches
// at app relaunch, app begins with empty fav meals; need to connect to server and db if want to preserve state
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

// 2 arguments: 'state' is current state; reducer func decides on what to do with state depending on 'action'
// first redux execution at app launch, state is initialState
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      // if meal exists as favorite, then return favoriteMeals updated without this meal
      if (existingIndex >= 0) {
        // copy of favoriteMeals array
        const updatedFavMeals = [...state.favoriteMeals];
        // remove meal at existingIndex and only that meal
        updatedFavMeals.splice(existingIndex, 1);
        // only the portion about favoriteMeals of state is updated
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        // concat returns a new array with additional meal
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    // default is initial load > initialState
    default:
      return state;
  }
  return state;
}

export default mealsReducer;