/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text} from 'native-base';
import {Colors, FontSizes} from './Utils/Constants';

const AppButton = ({onPress, title, width, mt}) => {
  const buttonStyle = {
    backgroundColor: Colors.ButtonColor,
    width: width || '100%',
    borderRadius: 16,
    marginTop: mt || 0,
  };

  return (
    <Button style={buttonStyle} onPress={onPress}>
      <Text color={Colors.white} fontSize={FontSizes.large} fontWeight="bold" fontFamily="Poppins-Bold">{title}</Text>
    </Button>
  );
};

export default AppButton;
