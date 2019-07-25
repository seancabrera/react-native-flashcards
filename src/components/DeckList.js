import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem } from "react-native-elements";

export default class DeckList extends React.Component {
  constructor(props) {
    super(props);

    this.test = [
    {
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
    {
      title: 'JavaScript',
      questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
      ]
    }
    ]


  }

  onPress() {
    console.log('press');
  }

  render() {
    const cards = this.test.map((card, i) => (
      <ListItem
        containerStyle={{ borderBottomColor: 'black' }}
        style={styles.listItem}
        key={i}
        title={card.title}
        titleNumberOfLines={1}
        badge={{value: card.questions.length}}
        rightIcon={{name: 'chevron-right'}}
        onPress={this.onPress}
        bottomDivider={true}
      />
    ));

    return (
      <View style={styles.container}>
        {cards}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  listItem: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomStartRadius: 1
  }
});
