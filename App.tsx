import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {StyleSheet} from 'react-native';
import React from 'react';
import Navigation from './src/Navigation/Index';
import Signup from './src/Pages/Signup/Index';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
<<<<<<< HEAD
        <Navigation style={styles.main}>
          <Login />
          <Signup />
        </Navigation>
=======
        <Navigation />
>>>>>>> a8cab54391fa9250f88cfc4a1acfdd8351eaeffb
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
