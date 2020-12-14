import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/components/HomeScreen";
import AddCardScreen from "./src/components/AddCardScreen";
import AddDeckScreen from "./src/components/AddDeckScreen";
import DeckDetails from "./src/components/DeckDetails";
import QuizView from "./src/components/QuizView";


const StackNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
  DeckDetails: DeckDetails,
  QuizView: QuizView,
  AddCardScreen: AddCardScreen,
  AddDeckScreen: AddDeckScreen
});

export default createAppContainer(StackNavigator);
