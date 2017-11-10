import React, {Component} from 'react';
import { Text, View, StyleSheet, WebView } from 'react-native';

export default class ArticleWeb extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <View style={styles.container}>
          <WebView
            source={{uri: this.props.url}}
            style={{marginTop: 20}}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'flex-start',
    alignItems:'stretch'
  },
});
