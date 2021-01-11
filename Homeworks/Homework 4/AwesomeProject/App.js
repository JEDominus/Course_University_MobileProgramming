import React, {Component} from 'react';
import LoginView from "./src/LoginView";
import HomeView from "./src/HomeView";
import Details from "./src/Details";
import {Actions, Scene, Router} from "react-native-router-flux";

const scenes = Actions.create(  
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar/>
    <Scene key="home" component={HomeView} title="Artistas"/>
    <Scene key="deta" component={Details} title="Detalles"/>
  </Scene>
)

export default class App extends Component {
   render(){
     return <Router scenes={scenes}/>
  }
}