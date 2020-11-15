// meals.js manages logic for marking favorite meals and for managing filters
import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

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

    // the point here is to update filteredMeals arr
    case SET_FILTERS:
      // extract filters set by user from action appliedFilters obj
      const appliedFilters = action.filters;
      // filter func always brings a new arr; new arr updatedFilteredMeals
      const updatedFilteredMeals = state.meals.filter(meal => {
        // if appliedFilters obj has glutenFree key and is not glutenFree, them meal is dropped in updatedFilteredMeals
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }

        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }

        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }

        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }

        // if a meal matches all filter checks, return meal true
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };
    // default is initial load > initialState
    default:
      return state;
  }
  return state;
}

export default mealsReducer;