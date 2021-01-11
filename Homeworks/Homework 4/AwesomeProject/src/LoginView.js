import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch, Alert } from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class LoginView extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  getLogin = () => {
    Actions.home()
  }
  render() {
    return (
      <View style={styles.container}>
         <Button
          onPress={this.getLogin}
          title="Ir a la lista"
          color="#720"
          accessibilityLabel="Login button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});