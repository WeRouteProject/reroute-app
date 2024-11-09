/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Input, Icon, Pressable } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from './Utils/Constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconLibraries = {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
};

const AppInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  iconName,
  iconLibrary = 'MaterialIcons',
  editable,
  maxLength,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getIconComponent = (library) => {
    return IconLibraries[library] || MaterialIcons;
  };

  const renderRightElement = () => {
    const IconComponent = getIconComponent(iconLibrary);
    if (secureTextEntry) {
      return (
        <Pressable onPress={togglePasswordVisibility}>
          <Icon
            as={Ionicons}
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={5}
            mr={2}
            color="gray.400"
          />
        </Pressable>
      );
    }
    if (iconName) {
      return (
        <Icon
          as={IconComponent}
          name={iconName}
          size={5}
          mr={2}
          color="gray.400"
        />
      );
    }
    return null;
  };

  return (
    <Input
      borderRadius="lg"
      borderWidth="1"
      // ml={2}
      // mr={2}
      borderColor={Colors.ButtonColorLight}
      bgColor="#f0f0f0"
      mb={4}
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      secureTextEntry={secureTextEntry && !showPassword}
      editable={editable}
      maxLength={maxLength}
      _focus={{
        borderColor: Colors.ButtonColorDark || '#000',
      }}
      InputRightElement={renderRightElement()}
    />
  );
};

export default AppInput;
