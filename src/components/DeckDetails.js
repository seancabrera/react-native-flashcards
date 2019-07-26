import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Platform, StatusBar } from 'react-native';

export default class DeckDetails extends React.Component {

  constructor(props) {
    super(props);

    this.addNewCard = this.addNewCard.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
    this.deleteDeck = this.deleteDeck.bind(this);
  }

  addNewCard() {
    this.props.navigation.navigate('AddCardScreen');
  }

  startQuiz() {
  }

  deleteDeck() {
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.deckInfoContainer}>
            <Text style={styles.deckName}>Deck Name</Text>
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
    fontSize: 48
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
