import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DeckList from "./src/components/DeckList";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class DeckListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList></DeckList>
      </View>
    );
  }
}

class AddDeckScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Deck</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Decks: DeckListScreen,
  'Add': AddDeckScreen,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  empty: {
    height: 50
  }
});

export default createAppContainer(TabNavigator);