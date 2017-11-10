import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import articleJson from '../data/SampleArticle.json'

import HtmlText from 'react-native-html-to-text'

export default class MiniArticle extends Component {
  render(){
    let {title, author, content, summary, url, image, tags, primaryTaxonomy, date} = articleJson[0];
    return(
      <TouchableOpacity onPress={this._OpenArticle} style={styles.MainContainer}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText}>{title}</Text>
        </View>
        <View style={styles.ImageAndText}>
          <View style={styles.ImageContainer}>
            <Image style={styles.Image} source={{uri: image}}/>
            {/* <View style={styles.Image}></View> */}
          </View>
          <View style={styles.SummaryContainer}>
            <HtmlText style={styles.SummaryText} html={summary}></HtmlText>
          </View>
        </View>
        <View style={styles.ContentSource}>
          <Text style={styles.Source}>{url}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  _OpenArticle(data){
    console.log(data);
    this.props.navigator.push({
      id: 'ArticleWeb',
      url: 'http://www.travelagentcentral.com/running-your-business/asta-kicks-off-first-china-summit'
    });
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex:1,
    margin:10,
    padding:10,
    maxHeight: 220,
    alignItems:'stretch',
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'lightgrey'
  },
  TitleRow:{
  },
  TitleText:{
    fontWeight:'bold',
    fontSize: 16,
  },
  ImageAndText:{
    flex:1,
    marginTop:5,
    flexDirection:'row',
    alignItems:'stretch',
    alignContent:'stretch',
    justifyContent:'space-between',
    alignSelf:'stretch'
  },
  ImageContainer:{
    flex:1,
    flexGrow:1,
    flexShrink:1,
    flexBasis:'auto',
    marginRight:5,
    alignSelf:'stretch',
  },
  SummaryContainer:{
    flexGrow:1,
    flex:2,
    alignSelf:'stretch',
  },
  SummaryText:{
    fontWeight: "200",
    fontSize: 15
  },
  Image:{
    flex:1,
    backgroundColor:'black'
  },
  ContentSource:{
  },
  Source:{
    color:'grey',
    fontSize:12,
  }
})
