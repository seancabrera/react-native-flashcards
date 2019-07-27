import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as DataAPI from './DataAPI';

export default class AddDeckScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      newDeckTitle: ''
    };

    this.onInputChanged = this.onInputChanged.bind(this);
    this.submitNewDeck = this.submitNewDeck.bind(this);
  }

  onInputChanged(title) {
    this.setState({
      newDeckTitle: title
    });
  }

  submitNewDeck() {
    DataAPI.saveDeckTitle(this.state.newDeckTitle)
      .then(() => {
        this.setState({
          newDeckTitle: ''
        });
        this.props.navigation.navigate('Decks');
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>What is the title of your new deck?</Text>
        <Input
          onChangeText={this.onInputChanged}
          value={this.state ? this.state.newDeckTitle : ''}
        />
        <Button
          buttonStyle={styles.submitButton}
          title="Create Deck"
          onPress={this.submitNewDeck}
        />
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
  submitButton: {
    marginTop: 50,
    width: 200
  }
});