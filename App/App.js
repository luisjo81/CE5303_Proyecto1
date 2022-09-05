import { 
  StatusBar 
} from 'expo-status-bar';

import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

import {
  createAppContainer
} from 'react-navigation';

import {
  createStackNavigator
} from 'react-navigation-stack'

//Screen Components
import HomeScreen from './src/screens/home';
import LoginScreen from './src/screens/login';
import SignalsScreen from './src/screens/signals';
import CameraScreen from './src/screens/camera';

//Stack Navigator
const MainNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
  Signals: { screen: SignalsScreen },
  Camera: { screen: CameraScreen}
});

const App = createAppContainer(MainNavigator);
export default App