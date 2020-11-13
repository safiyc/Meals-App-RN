import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'; // useSelector to grab slice of data from store
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
// import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {
  // return (
  //   <View style={styles.screen}>
  //     <Text>The Favorites Screen!</Text>
  //   </View>
  // );

  // 'meals' is from rootReducer found in App.js; favMeals is array
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  // const favMeals = availableMeals.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found.</DefaultText>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Favorite Meals",
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Menu'
        iconName='ios-menu'
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;