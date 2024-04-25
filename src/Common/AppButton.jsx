/* eslint-disable prettier/prettier */
// MyButton.js
import React from 'react';
import { Button, Text } from 'native-base';
//import { color } from 'react-native-reanimated';

const AppButton = ({ onPress, title }) => {
  return (
    <Button
      color="#2895bc"
      width="100%"
      borderRadius={16}
      //justifyContent="flex-end"
      //position="absolute"
      //display="flex"
      onPress={onPress}>
      <Text
        color={'white'}
        fontSize={15}>
        {title}</Text>
    </Button>
  );
};

const buttonStyle = {
  // color: ,
  width: '100%',
  padding: 20,
  borderRadius: 16,
};

const textStyle = {
  color: 'white', fontSize: 20,
};

export default AppButton;
