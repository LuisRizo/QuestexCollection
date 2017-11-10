import React, {Component} from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Article from './Article'
import MiniArticle from './MiniArticle'
import ArticleWeb from './ArticleWeb'
import { registerScreens } from './index'

// TODO: Configure react-native-navigation on Xcode https://wix.github.io/react-native-navigation/#/installation-ios

registerScreens(); // this is where you register all of your app's screens


const tabs = [{
  label: 'Navigation',
  screen: 'questex.MiniArticle',
  icon: require('../img/icon.png'),
  title: 'Navigation Types',
}, {
  label: 'Actions',
  screen: 'questex.MiniArticle',
  icon: require('../img/icon.png'),
  title: 'Navigation Actions',
}];


if (Platform.OS === 'android') {
  tabs.push({
    label: 'Transitions',
    screen: 'questex.MiniArticle',
    icon: require('../img/icon.png'),
    title: 'Navigation Transitions',
  });
}

// start the app
Navigation.startTabBasedApp({
  tabs,
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
  tabsStyle: {
    tabBarBackgroundColor: '#003a66',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    tabFontFamily: 'BioRhyme-Bold',
  },
  appStyle: {
    tabBarBackgroundColor: '#003a66',
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#003a66',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
  },
});


// export default class app extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render(){
//     return(
//         <View style={styles.container}>
//           <Navigator
//             initialRoute = {{id: 'MiniArticle'}}
//             renderScene = {this._navigatorRenderScene}
//           />
//         </View>
//     )
//   }
//
//   _navigatorRenderScene(route, navigator) {
//     _navigator = navigator;
//     switch (route.id) {
//       case 'MiniArticle':
//         return ( <MiniArticle navigator = {navigator} /> );
//         break;
//       case 'ArticleWeb':
//         return ( <ArticleWeb url = {route.url} navigator = {navigator} /> );
//         break;
//       default:
//
//     }
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent:'flex-start',
//     alignItems:'stretch'
//   },
// });
