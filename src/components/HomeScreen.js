import React from 'react';
import AddDeckScreen from "./AddDeckScreen";
import DeckList from "./DeckList";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
    Decks: DeckList,
    'Add Deck': AddDeckScreen,
});

const TabNavigatorContainer = createAppContainer(TabNavigator);

TabNavigatorContainer.navigationOptions = {
    title: 'Flash Cards'
};

export default TabNavigatorContainer;
