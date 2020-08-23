import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Home from './pages/Home';

import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <>
        <SafeAreaView style={{flex: 1, backgroundColor: '#cecece'}}>
          <Routes />
        </SafeAreaView>
      </>
    </NavigationContainer>
  );
}
