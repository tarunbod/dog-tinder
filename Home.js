import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import DogCard from './dog-card-component';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import randomColor from 'randomcolor';

import getDogs from './dog-source';

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      dogs: getDogs()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CardStack style={styles.content} verticalSwipe={false} renderNoMoreCards={() => <Text style={{ color: 'gray', fontSize: 24 }}>End</Text>} ref={swiper => { this.swiper = swiper }}>
          {this.state.dogs.map((dog, i) => {
            return <Card onSwipedRight={() => { this.handleSwipe(dog); }} key={dog.id}><DogCard name={dog.name} source={dog.source} location={dog.location} randomColor={randomColor({ luminosity: 'light' })} /></Card>
          })}
        </CardStack>

        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.red]} onPress={() => { this.swiper.swipeLeft(); }}>
              <Image source={require('./assets/sad_dog.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => { this.swiper.goBackFromLeft(); }}>
              <Image source={require('./assets/back.png')} resizeMode={'contain'} style={{ height: 32, width: 32, borderRadius: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.green]} onPress={() => { this.swiper.swipeRight(); }}>
              <Image source={require('./assets/happy_dog.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  handleSwipe(dog) {
    this.props.navigation.navigate('Details', {
      dog: dog
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 55,
    fontFamily: 'System',
    color: 'black',
    backgroundColor: 'transparent',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
  },
  orange: {
    borderColor: 'rgb(246,190,66)',
  },
  green: {
    borderColor: '#01df8a',
  },
  red: {
    borderColor: '#fd267d',
  }
});
