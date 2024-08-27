/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Box, Text } from 'native-base';
import { Alert, StyleSheet } from 'react-native';
import AppCenterLayout from '../../Common/AppCenterLayout';
import AppInput from '../../Common/AppInput';
import { Colors, FontSizes } from '../../Common/Utils/Constants';
//import lock from 'react-native-vector-icons/AntDesign';
import AppFooter from '../../Common/AppFooter';
import AppButton from '../../Common/AppButton';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


const ChangePasswordScreen = () => {
    //const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setconfirmNewPassword] = useState('');

    const navigation = useNavigation();

    const route = useRoute();
    // const { token } = route.params?.token;

    // const handleChangePassword = async () => {

    //     if (!newPassword || !confirmNewPassword) {
    //         Alert.alert('Error', 'Please fill in both password fields.');
    //         return;
    //     }

    //     if (newPassword !== confirmNewPassword) {
    //         Alert.alert('Error', 'Passwords do not match.');
    //         return;
    //     }

    //     const apiUrl = 'https://backend-sec-weroute.onrender.com/backend_sec/User/update-pass';
    //     try {
    //         const response = await fetch(apiUrl, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`,
    //             },
    //             body: JSON.stringify({ newPassword, confirmNewPassword }),
    //         });
    //         const result = await response.json();
    //         console.log('Response Status:', response.status);
    //         console.log('Response Body:', result);
    //         if (response.ok) {
    //             Alert.alert('Success', 'Password changed successfully.');
    //             navigation.navigate('Login');
    //         } else {
    //             console.log('not-ok');
    //             Alert.alert('User not found with provided email id', result?.message || 'Invalid Credientials');
    //         }
    //     } catch (error) {
    //         Alert.alert('Error');
    //     }
    // };

    return (

        <AppCenterLayout>
            <Box
                backgroundColor={'white'}
                width={'100%'}
                h={'100%'}
                mt={20}
                p={30}>
                <Text style={styles.subtitle}>
                    Enter the verification otp we just sent you on your email address
                </Text>
                <Box mt={10}>
                    {/* <Text fontSize={FontSizes.small} color={Colors.gray} my={2}>Old Password</Text> */}
                    {/* <AppInput
                        placeholder="Enter Old password"
                        value={oldPassword}
                        setValue={setOldPassword}
                        secureTextEntry={true}
                    /> */}
                    <Text fontSize={FontSizes.small} color={Colors.gray} my={2}>New Password</Text>
                    <AppInput
                        placeholder="Enter New password"
                        value={newPassword}
                        setValue={setNewPassword}
                        secureTextEntry={true}
                    // iconName={lock}
                    />
                    <Text fontSize={FontSizes.small} color={Colors.gray} my={2}>Confirm Password</Text>
                    <AppInput
                        placeholder="Re-enter your password"
                        value={confirmNewPassword}
                        setValue={setconfirmNewPassword}
                        secureTextEntry={true}
                    />
                </Box>
                <AppFooter>
                    <Box>
                        <AppButton title="Change Password" mt={20} />
                    </Box>
                </AppFooter>
            </Box>
        </AppCenterLayout>
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
        color: "#000"
    },
    resendText: {
        marginTop: 20,
        color: '#666',
        textAlign: 'center'
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


export default ChangePasswordScreen;