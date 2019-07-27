import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Platform, StatusBar} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import * as DataAPI from './DataAPI';

export default class DeckList extends React.Component {

  constructor(props) {
    super(props);

    this.fetchDecks = this.fetchDecks.bind(this);
    this.onSelectDeck = this.onSelectDeck.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
    this.renderListItem = this.renderListItem.bind(this);

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

  keyExtractor(item, index) {
    return index.toString()
  }

  renderListItem({ item }) {
    return (
      <ListItem
        style={styles.listItem}
        key={item.title}
        title={item.title}
        titleNumberOfLines={1}
        badge={{value: item.questions.length}}
        rightIcon={{name: 'chevron-right'}}
        onPress={this.onSelectDeck}
        bottomDivider={true}
      />
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={this.fetchDecks}
        />

        <FlatList
          style={styles.flatList}
          keyExtractor={this.keyExtractor}
          data={this.state.decks}
          renderItem={this.renderListItem}
        />

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
  flatList: {
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
