/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Box, Text } from 'native-base';
import { Alert } from 'react-native';
import AppCenterLayout from '../../Common/AppCenterLayout';
import AppInput from '../../Common/AppInput';
import { Colors, FontSizes } from '../../Common/Utils/Constants';
//import lock from 'react-native-vector-icons/AntDesign';
import AppFooter from '../../Common/AppFooter';
import AppButton from '../../Common/AppButton';
import { useNavigation } from '@react-navigation/native';


const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setconfirmNewPassword] = useState('');

    // function handleChangePassword() {
    //     console.log('change password');
    // }

    const navigation = useNavigation();

    const handleChangePassword = async () => {
        const apiUrl = 'https://backend-sec-weroute.onrender.com/backend_sec/User/update-pass';
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newPassword, confirmNewPassword }),
            });
            const result = await response.json();
            console.log('Response Status:', response.status);
            console.log('Response Body:', result);
            if (response.ok) {
                // console.log('ok');
                navigation.navigate('Change Password');
                Alert.alert('password changed successfully');
            } else {
                console.log('not-ok');
                Alert.alert('User not found with provided email id', result?.message || 'Invalid Credientials');
            }
        } catch (error) {
            Alert.alert('Error');
        }
    };

    return (
        <AppCenterLayout>
            <Box
                backgroundColor={'white'}
                width={'100%'}
                h={'100%'}
                mt={20}
                p={30}>
                <Text fontSize={FontSizes.xlarge} color={Colors.title} textAlign={'center'}>
                    Change Your Password</Text>
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
                        <AppButton onPress={handleChangePassword} title="Change Password" mt={20} />
                    </Box>
                </AppFooter>
            </Box>
        </AppCenterLayout>
    );
};

export default ChangePassword;