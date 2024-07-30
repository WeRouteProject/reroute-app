/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/Navigation/Index';
import Login from './src/Pages/Login/Index';
import Signup from './src/Pages/Signup/Index';
// Make sure to create this file in the correct location

function App(): React.JSX.Element {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <Navigation style={styles.main}>
          <Login />
          <Signup />
        </Navigation>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartContainer: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;