import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AddDeckScreen from "./src/components/AddDeckScreen";
import DeckList from "./src/components/DeckList";
import DeckListNavigation from "./src/components/DeckListNavigation";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  Decks: DeckListNavigation,
  'Add Deck': AddDeckScreen,
});

export default createAppContainer(TabNavigator);