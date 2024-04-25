/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//import { Center } from 'native-base';
//import React, { useState } from "react";

//import { View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
// import AppInput from './src/Common/AppInput';
// import AppButton from "./src/Common/AppButton";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/Pages/Login/Index';
import { StyleSheet, View } from 'react-native';
import Signup from './src/Pages/Signup/Index';
function App(): React.JSX.Element {

  // const [mobileno, setMobileno] = useState('');

  // function handleLogin() {
  //   console.log('login');
  // }
  return (
    <NativeBaseProvider >
      <SafeAreaProvider>
        <View style={styles.main}>
          {/* <AppInput
          placeholder="Mobile no."
          value={mobileno}
          setValue={setMobileno}
          secureTextEntry={undefined} />
        <AppButton
          onPress={handleLogin}
          title="Login"
        /> */}
          {/* <Login /> */}
          <Signup />
        </View>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    // padding: 20,

    // backgroundColor: 'black',
    justifyContent: 'center',
  }

})

export default App;
