import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class Details extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const detailsImage = this.props.navigation.state.params.image;
        const detailsName = this.props.navigation.state.params.name;

        return(
            <View style={styles.artistBox}>
              <Image style={styles.image} source={{uri: detailsImage}}/>
              <View style={styles.info}>
                <Text style={styles.name}>{detailsName}</Text>
              </View>
            </View>
        )
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