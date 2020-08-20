// where we select italian, american, chinese,...
import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import { CATEGORIES } from '../data/dummy-data';
// import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
  // console.log(props);
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
    );
  }

  return (
    // <View style={styles.screen}>
    //   <Text>The Categories Screen</Text>
    //   <Button title="Go to Meals!" onPress={() => {
    //     props.navigation.navigate({ routeName: 'CategoryMeals' });
    //   }} />
    // </View>
    <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
}

// add propoerties to function, which is an object
// official docs for comprehensive list of properties
CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Menu'
        iconName='ios-menu'
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
    // headerStyle: {
    //   backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    // },
    // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  };
};

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
// });

export default CategoriesScreen;