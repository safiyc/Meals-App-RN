import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealScreen = props => {
  const renderMealItem = itemdData => {
    return (<View><Text>{itemdData.item.title}</Text></View>);
  };

  const catId = props.navigation.getParam('categoryId');

  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem} />

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
    </View>
  );
}

CategoryMealScreen.navigationOptions = navigationData => {
  // console.log(navigationData);
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;