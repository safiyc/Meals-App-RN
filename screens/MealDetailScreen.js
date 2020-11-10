import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'; // useSelector to grab slice of data from store
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
}

const MealDetailScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = props.navigation.getParam('mealIdTest');

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  // to grab meal title to display on header via navigationOptions
  // when selectedMeal changes, will prompt useEffect to grab updated title
  // not a good way to pass data to header in navigationOptions bc useEffect loads after componentDidMount, so a slight delay for meal title to display when page renders
  // better to load meal title prior in MealList.js
  // useEffect(() => {
  //   props.navigation.setParam({mealTitle: selectedMeal.title})
  // }, [selectedMeal]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details} >
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient =>
        <ListItem key={ingredient}>{ingredient}</ListItem>
      )}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step =>
        <ListItem key={step}>{step}</ListItem>
      )}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  // to display meal info on header, can't use useSelector hook inside navigationOptions
  // better to pass meal title to navigation params in MealList.js, so info is available here
  // const mealId = navigationData.navigation.getParam('mealIdTest');
  // const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const mealTitle = navigationData.navigation.getParam('mealTitle');


  return {
    headerTitle: mealTitle,
    headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Favorite'
        iconName='ios-star'
        onPress={() => {
          console.log('Mark as fav')
        }}
      />
    </HeaderButtons>
  }
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailScreen;