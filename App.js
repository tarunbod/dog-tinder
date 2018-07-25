import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Home';
import DetailsScreen from './Details';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}
