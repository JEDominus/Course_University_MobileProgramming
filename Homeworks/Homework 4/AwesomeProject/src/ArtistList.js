import React, { Component } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListView from 'deprecated-react-native-listview'
import ArtistBox from './ArtistBox'

export default class ArtistList extends Component{
  constructor(props){
    super(props)
  }

  render() {
    const renderArtist = ({item}) =>(
      <ArtistBox artist={item} name={item.name} image={item.image}/>
    )

    return (
        <SafeAreaView style={styles.container}>     
            <FlatList 
                data = {this.props.artists}
                renderItem = {renderArtist}
            />
        </SafeAreaView>
    //   <ListView
    //     enableEmptySections = {true}
    //     dataSource = {this.state.dataSource}
    //     renderRow = {(artist) => {
    //       return (
    //         <ArtistBox artist={artist}/>
    //       )
    //     }}
    //   />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#720'
  }
});