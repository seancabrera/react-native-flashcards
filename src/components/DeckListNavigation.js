import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DeckDetails from "./DeckDetails";
import DeckList from "./DeckList";
import { createStackNavigator, createAppContainer } from 'react-navigation';

const DeckListNavigation = createStackNavigator({
  Decks: DeckList,
  DeckDetails: DeckDetails,
});

export default createAppContainer(DeckListNavigation);