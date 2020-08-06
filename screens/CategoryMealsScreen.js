import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Button title='Go to Meal Detail!' onPress={() => {
        props.navigation.navigate('MealDetail');
      }} />
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;