import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
  headerTitle: 'This placeholder title is replaced when specified',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
    // navigationOptions: {
    //   headerStyle: {
    //     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    //   },
    //   headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    // }
  },
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
})

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor  // tabBarColor is for android and shifting set to true
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'MyFavorites',
      tabBarIcon: (tabInfo) => { // tabInfo from tabBarOptions
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeColor: 'white',
      shifting: true
    })
    : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        activeTintColor: Colors.accentColor
      }
    });

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
});

const MainNavigator = createDrawerNavigator({
  MealsFavs: MealsFavTabNavigator,
  Filters: FiltersNavigator
});

// export default createAppContainer(MealsNavigator);
export default createAppContainer(MainNavigator);