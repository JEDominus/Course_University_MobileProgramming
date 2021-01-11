import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class ArtistBox extends Component{
  constructor(props){
    super(props)
  }  

  render() {
    const {image, name} = this.props.artist

    goDetails = () => {
      Actions.deta({image , name})
    }

    return (
      <View style={styles.artistBox}>
        <Image style={styles.image} source={{uri: image}} onPress={goDetails}/>
        <View style={styles.info}>
          <Text style={styles.name} onPress={goDetails}>{name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  artistBox: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .1,
    shadowOffset: {
        height: 1,
        width: -2
    },
    elevation: 2
  },
  image: {
      width: 150,
      height: 150
  },
  info: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  },
  name: {
      fontSize: 20,
      marginTop: 10,
      color: '#333'
  }
});