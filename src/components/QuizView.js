import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as DataAPI from './DataAPI';
import QuizCard from './QuizCard';
import QuizResults from './QuizResults';
import * as NotificationsAPI from './NotificationsAPI';

export default class QuizView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      initialized: false,
      showQuestionOrAnswer: 'question'
    };

    this.toggleQuestionAnswer = this.toggleQuestionAnswer.bind(this);
    this.markCorrect = this.markCorrect.bind(this);
    this.markIncorrect = this.markIncorrect.bind(this);
    this.goBackToDeck = this.goBackToDeck.bind(this);
    this.restartQuiz = this.restartQuiz.bind(this);
  }

  componentDidMount() {
    // The user is studying.. clear the notification
    NotificationsAPI.clearLocalNotification();

    this.fetchDeckDetails();
  }

  fetchDeckDetails() {
    const deckTitle = this.props.navigation.getParam('deckTitle');
    DataAPI.getDeck(deckTitle)
      .then(deck => {
        this.setState({
          deck,
          cardIndex: 0,
          initialized: true,
          numCorrect: 0
        });
      });
  }

  toggleQuestionAnswer() {
    if(this.state.showQuestionOrAnswer === 'question') {
      this.setState({
        showQuestionOrAnswer: 'answer'
      });
    } else {
      this.setState({
        showQuestionOrAnswer: 'question'
      });
    }
  }

  markCorrect() {
    const isLastCard = this.state.cardIndex === this.state.deck.questions.length - 1;

    if(isLastCard) {
      this.setState(previousState => {
        return {
          showResults: true,
          numCorrect: previousState.numCorrect + 1
        }
      });
    } else {
      this.setState(previousState => {
        return {
          cardIndex: previousState.cardIndex + 1,
          numCorrect: previousState.numCorrect + 1,
          showQuestionOrAnswer: 'question'
        };
      });
    }
  }

  markIncorrect() {
    const isLastCard = this.state.cardIndex === this.state.deck.questions.length - 1;

    if(isLastCard) {
      this.setState(previousState => {
        return {
          showResults: true
        }
      });
    } else {
      this.setState(previousState => {
        return {
          cardIndex: previousState.cardIndex + 1,
          showQuestionOrAnswer: 'question'
        };
      });
    }
  }

  goBackToDeck() {
    this.props.navigation.goBack();
  }

  restartQuiz() {
    this.setState({
      cardIndex: 0,
      showResults: false,
      numCorrect: 0,
      showQuestionOrAnswer: 'question'
    });
  }

  render() {
    const card = this.state.deck ?
      this.state.deck.questions[this.state.cardIndex] :
      {};

    const showResults = this.state.showResults;

    const progressText = this.state.deck ?
      '' + (this.state.cardIndex + 1) + '/' + this.state.deck.questions.length :
      '';

    return (
      <View style={styles.container}>
        {!card &&
          <Text>Unable to take quiz. This deck has no cards.</Text>
        }

        {!showResults && card && (
          <View style={styles.container}>
            <View>
              <Text style={styles.progressText}>{progressText}</Text>
            </View>
            <QuizCard
              card={card}
              showQuestionOrAnswer={this.state.showQuestionOrAnswer}
              toggleQuestionAnswer={this.toggleQuestionAnswer}
              markCorrect={this.markCorrect}
              markIncorrect={this.markIncorrect}
            />
          </View>
        )}

        {showResults && (
          <QuizResults
            numCorrect={this.state.numCorrect}
            totalCards={this.state.deck.questions.length}
            goBackToDeck={this.goBackToDeck}
            restartQuiz={this.restartQuiz}
          />
        )}
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
    fontSize: 48
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
