import React, { useState } from 'react';
// import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';

enableScreens();

// combineReducers useful when app has many reducers and can merge to rootReducer; for this app, can directly do createStore(mealsReducers)
// 'meals' can be any other name
const rootReducer = combineReducers({
  meals: mealsReducer
});


// createStore takes a reducer, then store is provided to app via 'provider'
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  // once setFontLoaded === true, then return:
  // Provider wraps around root component so redux can interact with all screens/components of app
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
  // return <MealsNavigator />;
}