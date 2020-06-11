import React, { Component } from 'react';
import { Container, Right,Header, Content, Button, Text } from 'native-base';
import TabScreen from './screens/TabScreen'
import { YellowBox, ScrollView } from 'react-native';

export default class App extends Component {
  
  render() {
    console.disableYellowBox = true;
    //YellowBox.ignoreWarnings(['Remote debugger']);
    return (
      <TabScreen/>
      
    );
  }
}