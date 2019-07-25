import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Platform, StatusBar } from 'react-native';

export default class AddDeckScreen extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      newDeckTitle: ''
    });

    this.onInputChanged = this.onInputChanged.bind(this);
    this.submitNewDeck = this.submitNewDeck.bind(this);
  }

  onInputChanged(title) {
    this.setState({
      newDeckTitle: title
    });
  }

  submitNewDeck() {
    // TODO submit to AsyncStorage

    this.props.navigation.navigate('Decks');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>What is the title of your new deck?</Text>
        <Input
          onChangeText={this.onInputChanged}
        />
        <Button
          buttonStyle={styles.submitButton}
          title="Submit"
          onPress={this.submitNewDeck}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitButton: {
    marginTop: 50
  }
});