import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Platform, StatusBar} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import * as DataAPI from './DataAPI';

export default class DeckList extends React.Component {

  constructor(props) {
    super(props);

    this.fetchDecks = this.fetchDecks.bind(this);
    this.onSelectDeck = this.onSelectDeck.bind(this);

    this.state = {
      decks: []
    };
  }

  componentDidMount() {
    this.fetchDecks();
  }

  fetchDecks() {
    DataAPI.getDecks()
      .then(decksObject => {
        const decksArray = [];
        Object.keys(decksObject).forEach(deckId => {
          decksArray.push(decksObject[deckId]);
        });

        this.setState({
          decks: decksArray,
          noDecks: false
        });

        if(decksArray.length === 0) {
          this.setState({
            noDecks: true
          });
        }
      });
  }

  onSelectDeck() {
    this.props.navigation.navigate('DeckDetails');
  }

  render() {
    const decks = this.state.decks.map((deck, i) => (
      <ListItem
        containerStyle={{ borderBottomColor: 'black' }}
        style={styles.listItem}
        key={i}
        title={deck.title}
        titleNumberOfLines={1}
        badge={{value: deck.questions.length}}
        rightIcon={{name: 'chevron-right'}}
        onPress={this.onSelectDeck}
        bottomDivider={true}
      />
    ));

    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={this.fetchDecks}
        />

        {decks}

        {this.state.noDecks &&
          <Text style={styles.noDecksText}>
              No decks have been added.
          </Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  listItem: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomStartRadius: 1
  },
  noDecksText: {
    marginTop: 25
  }
});
