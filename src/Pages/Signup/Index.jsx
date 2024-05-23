/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Box, Text, HStack } from 'native-base';
import AppInput from '../../Common/AppInput';
import AppButton from '../../Common/AppButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AppCenterLayout from '../../Common/AppCenterLayout';
import { Colors, FontSizes } from '../../Common/Utils/Constants';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  function handleSignup() {
    console.log('Register');
    navigation.navigate('Login');
  }
  return (
    <AppCenterLayout>
      <Box
        backgroundColor={Colors.white}
        h={'100%'}
        width={'100%'}
        mt={20}
        padding={30}>
        <Text fontSize={FontSizes.xlarge} color={Colors.title} textAlign={'center'}>
          REGISTRATION
        </Text>
        <Box mt={10}>
          <Text fontSize={FontSizes.medium} color={Colors.gray} my={2}>
            Email ID
          </Text>

          <AppInput
            placeholder="Enter your Email Address"
            value={email}
            setValue={setEmail}
            icon={<Icon name="heart" size={20} color="red" />}
          />
          <Text fontSize={FontSizes.medium} color={Colors.gray} my={2}>
            Name
          </Text>
          <AppInput
            placeholder={'Enter your Name'}
            value={name}
            setValue={setName}
            secureTextEntry={true}
          />
          <Text fontSize={FontSizes.medium} color={Colors.gray} my={2}>
            Password
          </Text>
          <AppInput
            placeholder={'Enter your password'}
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <Text fontSize={FontSizes.medium} color={Colors.gray} my={2}>
            Confirm Password
          </Text>
          <AppInput
            placeholder={'Confirm your password'}
            value={confirmPassword}
            setValue={setConfirmPassword}
            secureTextEntry={true}
          />
        </Box>

        <AppButton title={'Create an account'} onPress={handleSignup} mt={36} />

        <HStack mb={4} mt={6} justifyContent={'center'}>
          <Text color={Colors.dark} fontSize={FontSizes.medium}>Already have an account? </Text>
          <Text underline color={Colors.primary} onPress={handleSignup}>Login</Text>
        </HStack>
      </Box>
    </AppCenterLayout>
  );
};

export default Signup;
