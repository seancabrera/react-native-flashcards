import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./src/components/HomeScreen";
import AddCardScreen from "./src/components/AddCardScreen";
import AddDeckScreen from "./src/components/AddDeckScreen";
import DeckDetails from "./src/components/DeckDetails";


const StackNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
  DeckDetails: DeckDetails,
  AddCardScreen: AddCardScreen,
  AddDeckScreen: AddDeckScreen
});

export default createAppContainer(StackNavigator);
