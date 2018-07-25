import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import call from 'react-native-phone-call';

export default class DetailsScreen extends Component {

  static navigationOptions = {
    title: 'View Dog'
  };

  dog = this.props.navigation.getParam('dog', {});

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText1}>{ this.dog.name }</Text>
          <Text style={styles.headerText2}>{ this.dog.location }</Text>
        </View>
        <View style={styles.imageView}>
          <Image style={{width: '100%', height: '100%'}} source={ this.dog.source } resizeMode="contain"/>
        </View>
        <View style={styles.descriptionView}>
          <Text>{ this.dog.description }</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={()=>{}}>
            <Text onPress={this.askToCall} style={styles.buttonText}>Contact!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  askToCall() {
    call({ number: '1800DOGPOUND', prompt: true }).catch(console.error);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 75
  },
  headerText1: {
    fontSize: 32,
    fontFamily: 'Arial',
    fontWeight: 'bold'
  },
  headerText2: {
    fontSize: 24,
    fontFamily: 'Arial'
  },
  imageView: {
    height: 400
  },
  descriptionView: {
    paddingBottom: 15
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 45,
    padding: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  }
});
