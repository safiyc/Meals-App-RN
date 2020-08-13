// where we select italian, american, chinese,...
import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
// import Colors from '../constants/Colors';

const CategoriesScreen = props => {
  // console.log(props);
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.gridItem} onPress={() => {
        props.navigation.navigate({
          routeName: 'CategoryMeals', params: {
            categoryId: itemData.item.id
          }
        });
      }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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
CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  // headerStyle: {
  //   backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  // },
  // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;