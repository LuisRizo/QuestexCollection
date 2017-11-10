import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Article from './Article'

export default class app extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Article/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
