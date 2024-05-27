/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import AppInput from '../../Common/AppInput';
import AppButton from '../../Common/AppButton';
import { Checkbox, Box, Text, HStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import AppCenterLayout from '../../Common/AppCenterLayout';
import { Colors, FontSizes } from '../../Common/Utils/Constants';
import AppFooter from '../../Common/AppFooter';
import AppCheckbox from '../../Common/AppCheckbox';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigation = useNavigation();

  function handleLogin() {
    console.log('login');
    console.log('Remember Me:', rememberMe);
    navigation.navigate('Home');
  }
  function handleSignUp() {
    console.log('SignUp');
    console.log('Remember Me:', rememberMe);
    navigation.navigate('Signup');
  }

  return (
    <AppCenterLayout>
      <Box
        backgroundColor={'white'}
        width={'100%'}
        h={'100%'}
        mt={20}
        p={30}>
        <Text fontSize={FontSizes.xlarge} color={Colors.title} textAlign={'center'}>
          LOGIN
        </Text>
        <Box mt={10}>
          <Text fontSize={FontSizes.medium} color={Colors.gray} my={2}>Email ID</Text>
          <AppInput
            placeholder="Enter your email"
            value={email}
            setValue={setEmail}
            secureTextEntry={true}
          />
          <Text fontSize={FontSizes.medium} color={Colors.gray} my={2}>Password</Text>
          <AppInput
            placeholder="Enter your password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />

          <HStack justifyContent="space-between" alignItems="center" mb={4}>
            <HStack space={2} alignItems="center" flex={1}>
              <AppCheckbox
                isChecked={rememberMe}
                onChange={value => setRememberMe(value)}
                label="Remember me"
              />
            </HStack>
            <Text fontSize={FontSizes.small} color={Colors.dark}
              underline onPress={() => navigation.navigate('Forgot')}>
              Forgot password?
            </Text>
          </HStack>
        </Box>


        <AppFooter>
          <Box>
            <AppButton onPress={handleLogin} title="Login" mt={60} />

            <HStack mb={4} mt={2} justifyContent={'center'}>
              <Text color={Colors.dark} fontSize={FontSizes.medium}>Don't have an account? </Text>
              <Text underline color={Colors.primary} fontSize={FontSizes.medium} onPress={handleSignUp}>Register Now</Text>
            </HStack>
          </Box>
        </AppFooter>

      </Box>
    </AppCenterLayout>
  );
};

const containerStyle = {
  backgroundColor: 'white',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 30,
};

export default Login;
