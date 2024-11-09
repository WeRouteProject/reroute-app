/* eslint-disable no-return-assign */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Box, HStack } from 'native-base';
import AppButton from '../../Common/AppButton';
import AppHeader from '../../Common/AppHeader';
import { Colors, FontSizes } from '../../Common/Utils/Constants';
import AppInput from '../../Common/AppInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

const VerifyCode = ({ navigation }) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [email, setEmail] = useState('');
    const route = useRoute();

    const inputRefs = useRef([...Array(6)].map(() => React.createRef()));

    useEffect(() => {
        if (route.params?.email) {
            setEmail(route.params.email);
        }
    }, [route.params?.email]);

    const handleCodeChange = (text, index) => {
        // Only allow numbers and letters
        const sanitizedText = text.replace(/[^0-9A-Za-z]/g, '').toUpperCase();

        const newCode = [...code];
        newCode[index] = sanitizedText;
        setCode(newCode);

        // If a value is entered and there is a next input, focus it
        if (sanitizedText !== '' && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        // Handle backspace
        if (e.nativeEvent.key === 'Backspace') {
            if (code[index] === '' && index > 0) {
                inputRefs.current[index - 1].focus();
                const newCode = [...code];
                newCode[index - 1] = '';
                setCode(newCode);
            } else {
                const newCode = [...code];
                newCode[index] = '';
                setCode(newCode);
            }
        }
    };

    const focusInput = (index) => {
        inputRefs.current[index].focus();
    };

    const handleVerify = async () => {
        const otp = code.join('');
        if (otp.length !== 6) {
            showMessage({
                message: 'Please enter valid otp.',
                type: 'danger',
            });
            return;
        }

        const apiUrl = 'https://backend-sec-weroute.onrender.com/backend_sec/User/verify-otp';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp }),
            });
            const result = await response.json();
            console.log('Response Status:', response.status);
            console.log('Response Body:', result);

            if (response.ok) {
                showMessage({
                    message: 'OTP verified successfully!',
                    type: 'success',
                });
                navigation.navigate('change-password', { token: result.token });
            } else {
                showMessage({
                    message: 'Invalid otp. Please enter valid otp.',
                    type: 'danger',
                });
            }
        } catch (error) {
            showMessage({
                message: 'Internal server error, please check your internet connectivity and try again',
                type: 'danger',
            });
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
                setCode(['', '', '', '', '', '']);
                inputRefs.current[0].focus();

                showMessage({
                    message: 'Re-sent otp on your registered email id',
                    type: 'success',
                });
            } else {
                showMessage({
                    message: 'User not found with provided email id, please enter registered email id',
                    type: 'danger',
                });
            }
        } catch (error) {
            showMessage({
                message: 'Internal server error, please check your internet connectivity',
                type: 'danger',
            });
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
                    <AppInput
                        placeholder="Enter your Email Address"
                        value={email}
                        setValue={setEmail}
                        editable={false}
                        icon={<Icon name="envelope" size={20} color="red" />}
                    />
                </Box>
                <HStack space={2} justifyContent="center" mt={5}>
                    {code.map((digit, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => focusInput(index)}
                            activeOpacity={0.7}
                        >
                            <Box
                                w={10}
                                h={12}
                                borderWidth={1}
                                borderColor={inputRefs.current[index]?.isFocused?.() ? Colors.primary : 'gray.300'}
                                borderRadius="md"
                                alignItems="center"
                                justifyContent="center"
                                backgroundColor="white"
                            >
                                <TextInput
                                    ref={el => inputRefs.current[index] = el}
                                    style={styles.codeText}
                                    value={digit}
                                    onChangeText={(text) => handleCodeChange(text, index)}
                                    onKeyPress={(e) => handleKeyPress(e, index)}
                                    maxLength={1}
                                    keyboardType="numeric"
                                    autoCapitalize="characters"
                                    selectTextOnFocus
                                />
                            </Box>
                        </TouchableOpacity>
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
        width: '100%',
        height: '100%',
        paddingHorizontal: 5,
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
