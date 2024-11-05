/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Box, Text, HStack, Image, Select } from 'native-base';
import {
  Alert, StyleSheet, SafeAreaView,
  ScrollView,
} from 'react-native';
import AppInput from '../../Common/AppInput';
import AppButton from '../../Common/AppButton';
import { useNavigation } from '@react-navigation/native';
import AppCenterLayout from '../../Common/AppCenterLayout';
import { Colors, FontSizes } from '../../Common/Utils/Constants';
import Logo from '../../Common/Utils/assets/images/light-logo-removebg.png';
import { showMessage } from 'react-native-flash-message';
import countryData from '../../data/country_code.json';
import CountryCodeDropdown from '../../Common/CustomCountryDropDown';


const Signup = () => {
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('');

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
        body: JSON.stringify({ mobileno: mobile, email, Name: name, password }),
      });
      const result = await response.json();

      console.log('Response Status:', response.status);
      console.log('Response Body:', result);

      if (response.ok) {
        navigation.navigate('Login');
        showMessage({
          message: 'Successfully Registered!',
          type: 'success',
        });
      } else {
        showMessage({
          message: 'Register Failed! Please fill all the fields carefully.',
          type: 'danger',
        });
      }
    } catch (error) {
      showMessage({
        message: 'Something went wrong, please check your internet connectivity.',
        type: 'danger',
      });
    }
  };

  useEffect(() => {
    // Set the default country code
    const defaultCountryCode = countryData.countries[0].code; // Assuming you want the first country code
    setCountryCode(defaultCountryCode);
  }, []);

  const renderSelectItems = () => {
    return countryData.countries.map((country, index) => (
      <Select.Item label={country.name} value={country.code} key={index} />
    ));
  };

  return (
    <AppCenterLayout>
      <Box
        backgroundColor={Colors.white}
        h={'100%'}
        width={'100%'}
        mt={8}
        padding={30}>
        <SafeAreaView>
          <ScrollView>
            <Image
              source={Logo}
              style={styles.logo}
              resizeMode="contain"
              alt="WeRoute logo"
            />
            <Text fontSize={FontSizes.xlarge} color={Colors.title} textAlign={'center'} mt={3}>
              REGISTRATION
            </Text>
            <Box mt={8}>
              <Text fontSize={FontSizes.medium} color={Colors.gray} my={1} ml={0.5}>
                Mobile Number
              </Text>

              <Box mr="3%">
                <HStack space={2} alignItems="center">
                  <Box width="32%">
                    <CountryCodeDropdown
                      value={countryCode}
                      onChange={setCountryCode}
                    />
                  </Box>
                  <Box width="68%">
                    <AppInput
                      placeholder="Enter your Mobile number"
                      value={mobile}
                      setValue={setMobile}
                      iconName="mobile-phone"
                      iconLibrary="FontAwesome"
                    />
                  </Box>
                </HStack>
              </Box>
              <Text fontSize={FontSizes.medium} color={Colors.gray} my={1} ml={0.5}>
                Email ID
              </Text>

              <AppInput
                placeholder="Enter your Email Address"
                value={email}
                setValue={setEmail}
                iconName="email-outline"
                iconLibrary="MaterialCommunityIcons"
              />
              <Text fontSize={FontSizes.medium} color={Colors.gray} my={1} ml={0.5}>
                Name
              </Text>
              <AppInput
                placeholder={'Enter your Name'}
                value={name}
                setValue={setName}
                secureTextEntry={false}
                iconName="person"
              />
              <Text fontSize={FontSizes.medium} color={Colors.gray} my={1} ml={0.5}>
                Password
              </Text>
              <AppInput
                placeholder={'Enter your password'}
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
              />
            </Box>
            <AppButton title={'Create an account'} onPress={handleSignup} mt={60} />

            <HStack mb={4} mt={2} justifyContent={'center'}>
              <Text color={Colors.dark} fontSize={FontSizes.medium}>Already have an account? </Text>
              <Text underline color={Colors.primary} onPress={handleLogin}>Login</Text>
            </HStack>
          </ScrollView>
        </SafeAreaView>
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
  },
});

export default Signup;
