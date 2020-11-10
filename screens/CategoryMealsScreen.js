import React from 'react';
import { useSelector } from 'react-redux'; // useSelector to grab slice of data from store
// import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
// import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import mealsReducer from '../store/reducers/meals';

const CategoryMealScreen = props => {
  // const renderMealItem = itemData => {
  //   return (
  //     <MealItem
  //       title={itemData.item.title}
  //       image={itemData.item.imageUrl}
  //       duration={itemData.item.duration}
  //       complexity={itemData.item.complexity}
  //       affordability={itemData.item.affordability}
  //       onSelectMeal={() => {
  //         props.navigation.navigate({
  //           routeName: 'MealDetail',
  //           params: {
  //             mealIdTest: itemData.item.id
  //           }
  //         })
  //       }
  //       } />
  //   );
  // };

  const catId = props.navigation.getParam('categoryId');

  // 'meals' is from rootReducer found in App.js
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  // const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
  // return (
  // <View style={styles.screen}>
  //   <FlatList
  //     data={displayedMeals}
  //     keyExtractor={(item, index) => item.id}
  //     renderItem={renderMealItem}
  //     style={{ width: '100%' }} />
  {/* <Text>The Category Meal Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title='Go to Meal Detail!' onPress={() => {
        props.navigation.navigate('MealDetail');
      }} /> */}
  {/* <Button title='Go to same page with new content' onPress={() => {
        props.navigation.push('MealDetail');
      }} /> */}
  {/* <Button title='Go Back!' onPress={() => {
        props.navigation.goBack();
      }} />
      <Button title='Go Back!' onPress={() => {
        props.navigation.pop();
      }} />
      <Button title='Go Back to Parent page!' onPress={() => {
        props.navigation.popToTop();
      }} />
      <Button title='Replace Page!' onPress={() => {
        props.navigation.replace('CategoryMeals');
      }} /> */}
  {/* </View> */ }
  // );
}

CategoryMealScreen.navigationOptions = navigationData => {
  // console.log(navigationData);
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  }
};

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 15
//   }
// });

export default CategoryMealScreen;