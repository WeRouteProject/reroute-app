/* eslint-disable no-lone-blocks */
/* eslint-disable prettier/prettier */
import { NativeBaseProvider } from 'native-base';
// import AppInput from './src/Common/AppInput';
// import AppButton from "./src/Common/AppButton";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/Pages/Login/Index';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Navigation from './src/Navigation/Index';
import Signup from './src/Pages/Signup/Index';

function App(): React.JSX.Element {
  // const [mobileno, setMobileno] = useState('');
  // function handleLogin() {
  //   console.log('login');
  // }

  const [selectedValue, setSelectedValue] = useState('');
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // Add more options as needed
  ];

  // const handleChange = (newValue: any) => {
  //   setSelectedValue(newValue);
  // };
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
    // padding: 20,

    // backgroundColor: 'black',
    justifyContent: 'center',
  },
});

export default App;



// {/* <AppInput
//           placeholder="Mobile no."
//           value={mobileno}
//           setValue={setMobileno}
//           secureTextEntry={undefined} />
//         <AppButton
//           onPress={handleLogin}
//           title="Login"
//         /> */}

// {/* <Signup /> */ }
// {/* <AppDropDown
//             label="Select an option"
//             value={selectedValue}
//             onChange={handleChange}
//             renderSelectItems={() => (
//               options.map(option => (
//                 <Select.Item key={option.value} label={option.label} value={option.value} />
//               ))
//             )}
//             errorMessage="Please select an option"
//           /> */}