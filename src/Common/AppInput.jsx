/* eslint-disable prettier/prettier */
import React from 'react';
import { Input } from 'native-base';
import { TextInput } from 'react-native';

const AppInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <Input
      borderRadius="lg"
      borderWidth="1"
      borderColor="#c8eaf3"
      bgColor="#f0f0f0"
      mb={14}
      placeholder={placeholder}
      value={value}
      setValue={setValue}
      secureTextEntry={secureTextEntry}
    // style={inputStyle}
    />
  );
};

const containerStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const inputStyle = {
  backgroundColor: '#f0f0f0',
  width: '100%',
  borderColor: '#c8eaf3',
  borderRadius: 12,
  borderWidth: 2,
  paddingHorizontal: 15,
  //marginVertical: 5,
};

export default AppInput;
