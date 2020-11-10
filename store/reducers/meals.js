// meals.js manages logic for marking favorite meals and for managing filters

import { MEALS } from '../../data/dummy-data';

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
  return state;
}

export default mealsReducer;