import {NativeBaseProvider, Select} from 'native-base';
// import AppInput from './src/Common/AppInput';
// import AppButton from "./src/Common/AppButton";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from './src/Pages/Login/Index';
import {StyleSheet, View} from 'react-native';
import Signup from './src/Pages/Signup/Index';
import AppDropDown from './src/Common/AppDropDown';
import React, {useState} from 'react';
import Navigation from './src/Navigation/Index';

function App(): React.JSX.Element {
  // const [mobileno, setMobileno] = useState('');

  // function handleLogin() {
  //   console.log('login');
  // }

  const [selectedValue, setSelectedValue] = useState('');
  const options = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    // Add more options as needed
  ];

  const handleChange = (newValue: any) => {
    setSelectedValue(newValue);
  };
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <Navigation style={styles.main}>
          {/* <AppInput
          placeholder="Mobile no."
          value={mobileno}
          setValue={setMobileno}
          secureTextEntry={undefined} />
        <AppButton
          onPress={handleLogin}
          title="Login"
        /> */}
          <Login />
          {/* <Signup /> */}
          {/* <AppDropDown
            label="Select an option"
            value={selectedValue}
            onChange={handleChange}
            renderSelectItems={() => (
              options.map(option => (
                <Select.Item key={option.value} label={option.label} value={option.value} />
              ))
            )}
            errorMessage="Please select an option"
          /> */}
        </Navigation>
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
  },
});

export default App;
