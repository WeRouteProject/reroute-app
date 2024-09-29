/* eslint-disable prettier/prettier */
import React from 'react';
import { Input, InputRightElement } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icons from react-native-vector-icons

const AppInput = ({ value, setValue, placeholder, secureTextEntry, iconName, editable }) => {
  return (
    <Input
      borderRadius="lg"
      borderWidth="1"
      borderColor="#c8eaf3"
      // color={'#0e1c63'}
      // focusBorderColor="#0e1c63"
      bgColor="#f0f0f0"
      mb={14}
      placeholder={placeholder}
      value={value}
      onChangeText={setValue} // Use onChangeText instead of setValue for NativeBase Input component
      secureTextEntry={secureTextEntry}
      editable={editable}
    >
      {iconName && ( // Render icon if provided
        <InputRightElement>
          <Icon name={iconName} color="gray" size={20} />
        </InputRightElement>
      )}
    </Input>
  );
};

export default AppInput;
