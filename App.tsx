import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {StyleSheet} from 'react-native';
import React from 'react';
import Navigation from './src/Navigation/Index';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   main: {
//     alignItems: 'center',
//     // padding: 20,

//     // backgroundColor: 'black',
//     justifyContent: 'center',
//   },
// });

export default App;
