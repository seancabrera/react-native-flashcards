import AddDeckScreen from "./AddDeckScreen";
import DeckList from "./DeckList";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator({
    Decks: DeckList,
    'Add Deck': AddDeckScreen,
});

const TabNavigatorContainer = createAppContainer(TabNavigator);

TabNavigatorContainer.navigationOptions = {
    title: 'Flash Cards'
};

export default TabNavigatorContainer;
