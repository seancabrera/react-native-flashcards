import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as DataAPI from './DataAPI';

export default class AddCardScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      answer: ''
    };

    this.onQuestionChanged = this.onQuestionChanged.bind(this);
    this.onAnswerChanged = this.onAnswerChanged.bind(this);
    this.submitNewCard = this.submitNewCard.bind(this);
  }

  onQuestionChanged(question) {
    this.setState({
      question
    });
  }

  onAnswerChanged(answer) {
    this.setState({
      answer
    });
  }

  submitNewCard() {
    const deckTitle = this.props.navigation.getParam('deckTitle');
    const card = {
      question: this.state.question,
      answer: this.state.answer
    };

    DataAPI.addCardToDeck({
      deckTitle,
      card
    }).then(() => {
      this.props.navigation.goBack();
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          onChangeText={this.onQuestionChanged}
          value={this.state ? this.state.question : ''}
          label={'Question'}
        />

        <Input
          labelStyle={styles.answerInput}
          onChangeText={this.onAnswerChanged}
          value={this.state ? this.state.answer : ''}
          label={'Answer'}
        />

        <Button
          buttonStyle={styles.submitButton}
          title="Submit"
          onPress={this.submitNewCard}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  answerInput: {
    marginTop: 30
  },
  submitButton: {
    marginTop: 50
  }
});