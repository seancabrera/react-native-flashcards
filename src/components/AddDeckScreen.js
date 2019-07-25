import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Platform, StatusBar} from 'react-native';

export default class AddDeckScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Test Add Screen!</Text>
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
  }
});
