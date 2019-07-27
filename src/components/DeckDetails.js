import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Platform, StatusBar } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import * as DataAPI from './DataAPI';

export default class DeckDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      deck: {
        title: '',
        questions: []
      }
    };

    this.addNewCard = this.addNewCard.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
    this.deleteDeck = this.deleteDeck.bind(this);
    this.fetchDeckDetails = this.fetchDeckDetails.bind(this);
  }

  componentDidMount() {
    this.fetchDeckDetails();
  }

  fetchDeckDetails() {
    const deckTitle = this.props.navigation.getParam('deckTitle');
    DataAPI.getDeck(deckTitle)
      .then(deck => {
        this.setState({
          deck
        });
      });
  }

  addNewCard() {
    this.props.navigation.navigate('AddCardScreen', {
      deckTitle: this.props.navigation.getParam('deckTitle')
    });
  }

  startQuiz() {
  }

  deleteDeck() {
  }

  render() {
    const deckTitle = this.state.deck.title;
    const numCards = this.state.deck.questions.length;

    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={this.fetchDeckDetails}
        />

        <View style={styles.deckInfoContainer}>
          <Text style={styles.deckName}>{deckTitle}</Text>
          <Text style={styles.numCards}>{numCards + ' cards'}</Text>
        </View>

        <View style={styles.actionButtonContainer}>
          <Button
            buttonStyle={styles.buttonStyle}
            title="Add Card"
            onPress={this.addNewCard}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            title="Start Quiz"
            onPress={this.startQuiz}
          />
        </View>

        <View style={styles.deleteButtonContainer}>
          <Button
              buttonStyle={styles.deleteButtonStyle}
              title="Delete Deck"
              onPress={this.deleteDeck}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  deckInfoContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  deckName: {
    fontSize: 56
  },
  numCards: {
    fontSize: 18,
    color: 'grey'
  },
  actionButtonContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  deleteButtonContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonStyle: {
    marginTop: 10
  },
  deleteButtonStyle: {
    marginBottom: 25,
    backgroundColor: 'red'
  }
});
