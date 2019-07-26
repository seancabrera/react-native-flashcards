import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Platform, StatusBar } from 'react-native';

export default class DeckDetails extends React.Component {

  constructor(props) {
    super(props);

    this.addNewCard = this.addNewCard.bind(this);
  }

  addNewCard() {
    this.props.navigation.navigate('AddCardScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Add Card"
          onPress={this.addNewCard}
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