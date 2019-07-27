import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default class QuizResults extends React.Component {


  render() {
    let quizResultsPercentage = this.props.numCorrect / this.props.totalCards * 100;
    quizResultsPercentage = Math.round(quizResultsPercentage * 10) / 10;

    return (
      <View style={styles.container}>
        <View style={styles.quizResultsContainer}>
          <Text style={styles.quizResultsText}>{this.props.numCorrect} / {this.props.totalCards}</Text>
          <Text style={styles.quizResultsPercentage}>{quizResultsPercentage + '%'}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.buttonStyle}
            title="Back to Deck"
            onPress={this.props.goBackToDeck}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            title="Restart Quiz"
            onPress={this.props.restartQuiz}
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
  quizResultsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quizResultsText: {
    fontSize: 48
  },
  quizResultsPercentage: {
    fontSize: 18,
    color: 'grey'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  buttonStyle: {
    width: 200,
    marginBottom: 10
  }
});