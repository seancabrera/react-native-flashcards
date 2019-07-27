import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default class QuizCard extends React.Component {

  render() {
    const card = this.props.card;
    const questionOrAnswerText =
      this.props.showQuestionOrAnswer === 'question' ?
        card.question :
        card.answer;
    const showQuestionOrAnswerButtonText =
      this.props.showQuestionOrAnswer === 'question' ?
        'Show Answer' :
        'Show Question';

    return (
      <View style={styles.container}>
          <View style={styles.questionAnswerContainer}>
              <Text style={styles.questionAnswerText}>{questionOrAnswerText}</Text>

              <Button
                buttonStyle={styles.showQuestionAnswerButton}
                title={showQuestionOrAnswerButtonText}
                type='clear'
                onPress={this.props.toggleQuestionAnswer}
              />
          </View>

          <View style={styles.correctIncorrectContainer}>
            <Button
              buttonStyle={styles.correctButton}
              title='Correct'
              onPress={this.props.markCorrect}
            />
            <Button
              buttonStyle={styles.incorrectButton}
              title='Incorrect'
              onPress={this.props.markIncorrect}
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
  questionAnswerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  correctIncorrectContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  questionAnswerText: {
    fontSize: 24,
    marginLeft:10,
    marginRight:10
  },
  progressText: {
    fontSize: 18
  },
  correctButton: {
    backgroundColor: 'green',
    width: 200
  },
  incorrectButton: {
    backgroundColor: 'red',
    marginTop: 20,
    width: 200
  }
});