import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'Cabrera:flashcards';


/*
The data model looks like the following:
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
*/


export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(results => JSON.parse(results));
}

export function getDeck(title) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(results => {
      const decks = JSON.parse(results);
      return decks[title];
    });
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }));
}

export function addCardToDeck(deckTitle, card) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(results => {
      const decks = JSON.parse(results);
      decks[deckTitle].questions.push(card);
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
    });
}