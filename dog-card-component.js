import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class DogCard extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, { backgroundColor: this.props.randomColor }]}>
          <Text style={styles.headerText}>{this.props.name}</Text>
        </View>
        <Image source={this.props.source} style={styles.image} />
        <View style={[styles.footer, { backgroundColor: this.props.randomColor }]}>
          <Text style={styles.footerText}>{this.props.location}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 500,
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: 'white'
  },
  header: {
    flex: 0.6,
    backgroundColor: '#cec',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  headerText: {
    fontSize: 36,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 15,
    marginLeft: 15
  },
  image: {
    flex: 3,
    width: 300
  },
  footer: {
    flex: 0.5,
    backgroundColor: '#cec',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  footerText: {
    fontSize: 24,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 15,
    marginRight: 15
  }
});
