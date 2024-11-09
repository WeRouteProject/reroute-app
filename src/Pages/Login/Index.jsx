/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import AppInput from '../../Common/AppInput';
import AppButton from '../../Common/AppButton';
import { StyleSheet } from 'react-native';
import { Box, Text, HStack, Image } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import AppCenterLayout from '../../Common/AppCenterLayout';
import { Colors, FontSizes } from '../../Common/Utils/Constants';
import AppFooter from '../../Common/AppFooter';
import AppCheckbox from '../../Common/AppCheckbox';
import { useAuth } from '../../Context/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../Common/Utils/assets/images/light-logo-removebg.png';
import { showMessage } from 'react-native-flash-message';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');


  useEffect(() => {
    const getRememberedUser = async () => {
      const credentials = await AsyncStorage.getItem('credentials');
      if (credentials) {
        const { email, password, name } = JSON.parse(credentials);
        setEmail(email);
        setPassword(password);
        setName(name);
        setRememberMe(true);
      }
    };

    getRememberedUser();
  }, []);

  const validateInput = () => {
    if (!email?.trim() || !password?.trim()) {
      showMessage({
        message: 'Please fill all the fields carefully',
        type: 'warning',
      });
      return false;
    }
    return true;
  };

  const saveUserData = async (token, userName, userEmail) => {
    try {
      await Promise.all([
        AsyncStorage.setItem('userToken', token),
        AsyncStorage.setItem('userName', userName),
        AsyncStorage.setItem('emailId', userEmail),
      ]);
    } catch (error) {
      console.error('Error saving user data:', error);
      throw new Error('Failed to save user data');
    }
  };

  const handleLogin = async () => {
    if (!validateInput()) { return; }

    setIsLoading(true);
    const apiUrl = 'https://backend-sec-weroute.onrender.com/backend_sec/User/signIn';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });

      let result;
      const textResponse = await response.text();

      try {
        result = textResponse ? JSON.parse(textResponse) : {};
      } catch (parseError) {
        console.error('Response parsing error:', parseError, 'Raw response:', textResponse);
        throw new Error('Invalid server response');
      }

      if (response.ok && result?.accessToken) {
        await saveUserData(result.accessToken, result.name, result.Email);
        await login(result, rememberMe);

        navigation.navigate('Drawer');
        showMessage({
          message: 'You’re logged in! Great to see you again!',
          type: 'success',
        });
      } else {
        showMessage({
          message: 'Invalid credentials. Please check your email and password.',
          type: 'danger',
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      showMessage({
        message: 'Internal server error, please check your internet connectivity and try again',
        type: 'danger',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = () => {
    console.log('Signup');
    console.log('Remember Me:', rememberMe);
    navigation.navigate('Signup');
  };

  return (
    <AppCenterLayout>
      <Box backgroundColor={'white'} width={'100%'} h={'100%'} mt={10} p={30}>
        <Image
          source={Logo}
          style={styles.logo}
          resizeMode="contain"
          alt="WeRoute logo"
        />
        <Text
          mt={3}
          fontSize={FontSizes.xlarge}
          color={Colors.title}
          textAlign={'center'}>
          LOGIN
        </Text>
        <Box mt={10}>
          <Text fontSize={FontSizes.medium} color={Colors.gray} my={2} ml={0.5}>
            Email ID
          </Text>
          <AppInput
            placeholder="Enter your Email Address"
            value={email}
            setValue={setEmail}
            iconName="email-outline"
            iconLibrary="MaterialCommunityIcons"
          />

          <Text fontSize={FontSizes.medium} color={Colors.gray} my={2} ml={0.5}>
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
            <AppButton onPress={handleLogin} title={isLoading ? 'Logging in...' : 'Login'} mt={40} />

            <HStack mb={4} mt={2} justifyContent={'center'}>
              <Text color={Colors.dark} fontSize={FontSizes.medium}>
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

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 40,
  },
  chartContainer: {
    padding: 10,
    backgroundColor: Colors.ButtonColorLight,
  },
});

export default Login;
