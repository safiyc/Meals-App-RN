import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {
  // return (
  //   <View style={styles.screen}>
  //     <Text>The Favorites Screen!</Text>
  //   </View>
  // );
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'My Favorites'
};

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

export default FavoritesScreen;