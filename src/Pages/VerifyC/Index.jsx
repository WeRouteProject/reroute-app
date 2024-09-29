/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'; // Import useEffect from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Box, HStack } from 'native-base';
import AppButton from '../../Common/AppButton';
import AppHeader from '../../Common/AppHeader';
import { Colors, FontSizes } from '../../Common/Utils/Constants';
import AppInput from '../../Common/AppInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';

const VerifyCode = ({ navigation }) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [email, setEmail] = useState('');  // Initialize state for email
    const route = useRoute();

    // Retrieve email from route.params
    useEffect(() => {
        if (route.params?.email) {
            setEmail(route.params.email);  // Set the email passed from the previous screen
        }
    }, [route.params?.email]);

    const handleCodeChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    };

    const handleVerify = async () => {
        const otp = code.join('');  // Join the OTP array into a single string
        const apiUrl = 'https://backend-sec-weroute.onrender.com/backend_sec/User/verify-otp';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp }),  // Pass email and the concatenated OTP
            });
            const result = await response.json();
            console.log('Response Status:', response.status);
            console.log('Response Body:', result);

            if (response.ok) {
                console.log('OTP verified successfully');
                // Navigate to change password screen, passing the token
                navigation.navigate('change-password', { token: result.token });
                Alert.alert('Success', 'OTP verified successfully!');
            } else {
                console.log('OTP verification failed');
                Alert.alert('Error', result?.message || 'Invalid OTP');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };

    const handleResend = async () => {
        const apiUrl = 'https://backend-sec-weroute.onrender.com/backend_sec/User/otp-generate';
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const result = await response.json();
            console.log('Response Status:', response.status);
            console.log('Response Body:', result);
            if (response.ok) {
                Alert.alert('Success', 'OTP resent successfully!');
            } else {
                console.log('not-ok');
                Alert.alert('Error', result?.message || 'Unable to resend OTP.');
            }
        } catch (error) {
            console.error('Error resending OTP:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };


    return (
        <View style={styles.container}>
            <AppHeader navigation={navigation} title="VERIFY OTP" />
            <Box style={styles.sub_container}>
                <Text style={styles.subtitle}>
                    Enter the verification OTP we just sent you on your email address
                </Text>
                <Box mt={5}>
                    <Text fontSize={FontSizes.medium} color={Colors.gray} my={2}>
                        Your registered email
                    </Text>

                    {/* Display email as non-editable */}
                    <AppInput
                        placeholder="Enter your Email Address"
                        value={email}
                        setValue={setEmail}
                        editable={false}  // Make the email field non-editable
                        icon={<Icon name="envelope" size={20} color="red" />}  // Icon next to the email input
                    />
                </Box>
                <HStack space={2} justifyContent="center" mt={5}>
                    {code.map((digit, index) => (
                        <Box
                            key={index}
                            w={10}
                            h={12}
                            borderWidth={1}
                            borderColor="gray.300"
                            borderRadius="md"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <TextInput
                                style={styles.codeText}
                                value={digit}
                                onChangeText={(text) => handleCodeChange(text, index)}
                                maxLength={1}
                                keyboardType="default"
                            />
                        </Box>
                    ))}
                </HStack>
                <TouchableOpacity onPress={handleResend}>
                    <Text style={styles.resendText}>
                        Did not receive an OTP? <Text style={styles.resendLink}>Resend.</Text>
                    </Text>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <AppButton title="Verify" onPress={handleVerify} />
                </View>
            </Box>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    sub_container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.white,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3366CC',
        marginTop: 40,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    codeText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    resendText: {
        marginTop: 20,
        color: '#666',
        textAlign: 'center',
    },
    resendLink: {
        color: Colors.primary,
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        paddingLeft: 30,
    },
});

export default VerifyCode;
