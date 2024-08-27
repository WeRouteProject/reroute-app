/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import AppInput from '../../Common/AppInput';
import AppButton from '../../Common/AppButton';
import { Alert } from 'react-native';
import { Box, Text, HStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import AppCenterLayout from '../../Common/AppCenterLayout';
import { Colors, FontSizes } from '../../Common/Utils/Constants';
import AppFooter from '../../Common/AppFooter';
import AppCheckbox from '../../Common/AppCheckbox';
import { useAuth } from '../../Context/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();
  const { login } = useAuth();
  useEffect(() => {
    const getRememberedUser = async () => {
      const credentials = await AsyncStorage.getItem('credentials');
      if (credentials) {
        const { email, password } = JSON.parse(credentials);
        setEmail(email);
        setPassword(password);
        setRememberMe(true);
      }
    };

    getRememberedUser();
  }, []);

  const handleLogin = async () => {
    const apiUrl =
      'https://backend-sec-weroute.onrender.com/backend_sec/User/signIn';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      console.log('Response Status:', response.status);
      console.log('Response Body:', result);
      if (response.ok) {
        await login(result, rememberMe);
        navigation.navigate('Drawer');
        Alert.alert('Login Successfully', result.message);
      } else {
        console.log('not-ok');
        Alert.alert('Login Failed', result?.message || 'Invalid Credentials');
      }
    } catch (error) {
      console.log('Error:', error);
      Alert.alert('Error', 'Something went wrong, please try again later.');
    }
  };

  const handleSignUp = () => {
    console.log('Signup');
    console.log('Remember Me:', rememberMe);
    navigation.navigate('Signup');
  };

  return (
    <AppCenterLayout>
      <Box backgroundColor={'white'} width={'100%'} h={'100%'} mt={20} p={30}>
        <Text
          fontSize={FontSizes.xlarge}
          color={Colors.title}
          textAlign={'center'}>
          LOGIN
        </Text>
        <Box mt={10}>
          <Text fontSize={FontSizes.medium} color={Colors.gray} my={2}>
            Email ID
          </Text>
          <AppInput
            placeholder="Enter your email"
            value={email}
            setValue={setEmail}
            secureTextEntry={false}
          />
          <Text fontSize={FontSizes.medium} color={Colors.gray} my={2}>
            Password
          </Text>
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
            <Text
              fontSize={FontSizes.small}
              color={Colors.dark}
              underline
              onPress={() => navigation.navigate('Forgot')}>
              Forgot password?
            </Text>
          </HStack>
        </Box>

        <AppFooter>
          <Box>
            <AppButton onPress={handleLogin} title="Login" mt={40} />

            <HStack mb={4} mt={2} justifyContent={'center'}>
              <Text color={Colors.dark} fontSize={FontSizes.small}>
                Don't have an account?{' '}
              </Text>
              <Text
                underline
                color={Colors.primary}
                fontSize={FontSizes.small}
                onPress={handleSignUp}>
                Register Now
              </Text>
            </HStack>
          </Box>
        </AppFooter>
      </Box>
    </AppCenterLayout>
  );
};

export default Login;
