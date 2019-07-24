import React from 'react';
import { StyleSheet, View} from 'react-native';
import DeckList from "./src/components/DeckList";

export default function App() {
  return (

    <View style={styles.container}>
      <View style={styles.empty}></View>
      <DeckList></DeckList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  empty: {
    height: 50
  }
});
