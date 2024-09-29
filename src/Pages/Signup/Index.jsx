/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Box, Text, HStack, Image } from 'native-base';
import { Alert, StyleSheet } from 'react-native';
import AppInput from '../../Common/AppInput';
import AppButton from '../../Common/AppButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AppCenterLayout from '../../Common/AppCenterLayout';
import { Colors, FontSizes } from '../../Common/Utils/Constants';
import Logo from '../../Common/Utils/assets/images/light-logo-removebg.png';

const Signup = () => {
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  //const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  function handleLogin() {
    console.log('Register');
    navigation.navigate('Login');
  }
  const handleSignup = async () => {
    const apiUrl = 'https://backend-sec-weroute.onrender.com/backend_sec/User/signUp';
    if (!mobile || !email || !name || !password) {
      Alert.alert('Please fill in all required fields.');
      return;
    }
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ mobile, email, name, password }),
        body: JSON.stringify({ mobileno: mobile, email, Name: name, password }),
      });
      const result = await response.json();

      console.log('Response Status:', response.status);
      console.log('Response Body:', result);

      if (response.ok) {
        navigation.navigate('Login');
        Alert.alert('Successfully Registered');
      } else {
        Alert.alert('Register Failed', result?.message || 'Filled all the fields carefully');
      }
    } catch (error) {
      Alert.alert('Error');
    }
  };
  return (
    <AppCenterLayout>
      <Box
        backgroundColor={Colors.white}
        h={'100%'}
        width={'100%'}
        mt={8}
        padding={30}>
        <Image
          source={Logo}
          style={styles.logo}
          resizeMode="contain"
          alt="WeRoute logo"
        />
        <Text fontSize={FontSizes.xlarge} color={Colors.title} textAlign={'center'} mt={3}>
          REGISTRATION
        </Text>
        <Box mt={10}>
          <Text fontSize={FontSizes.medium} color={Colors.gray} my={2}>
            Mobile Number
          </Text>

          <AppInput
            placeholder="Enter your Mobile number"
            value={mobile}
            setValue={setMobile}
            icon={<Icon name="heart" size={20} color="red" />}
          />
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
            secureTextEntry={false}
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
        </Box>

        <AppButton title={'Create an account'} onPress={handleSignup} mt={36} />

        <HStack mb={4} mt={2} justifyContent={'center'}>
          <Text color={Colors.dark} fontSize={FontSizes.medium}>Already have an account? </Text>
          <Text underline color={Colors.primary} onPress={handleLogin}>Login</Text>
        </HStack>
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
    //backgroundColor: Colors.logo
  },
});

export default Signup;
