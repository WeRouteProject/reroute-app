/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Box, Text, Divider, HStack, Pressable, VStack } from 'native-base';
import { Avatar } from 'react-native-elements';
import { Colors } from './Utils/Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawerContent = props => {
    const [profilePicture, setProfilePicture] = useState('');

    const navigation = useNavigation();

    return (
        <VStack flex={1}>
            <DrawerContentScrollView {...props}>
                <Box
                    ml={3}
                    mb={5}
                >
                    <Pressable onPress={() => navigation.closeDrawer()} ml={'80%'} p={2}>
                        <Icon2 name='cross' color={'white'} size={25} />
                    </Pressable>
                    <HStack alignItems={'center'} space={5}>
                        <Box>
                            <Icon name='user-circle' color="white" size={65}
                            />
                        </Box>
                        <Box>
                            <Text color={Colors.white}>User Name</Text>
                            <Text fontSize={12} color={Colors.white}>
                                user@example.com
                            </Text>
                        </Box>
                    </HStack>
                </Box>

                <Divider
                    w={250}
                    alignSelf={'center'}
                    //mt={4}
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                />

                <Box mt={4} ml={2}>
                    <Pressable onPress={() => navigation.navigate('Home')}>
                        <HStack alignItems={'center'} space={5} ml={3} mt={8}>
                            <Icon name='home' color="white" size={20} />
                            <Text color={Colors.white} fontSize={16}>
                                Home
                            </Text>
                        </HStack>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('About')}>
                        <HStack alignItems={'center'} space={5} ml={3} mt={8}>
                            {/* <AppIcon isCustom name={'login'} color={colors.white} size={23} /> */}
                            <MaterialCommunityIcons name='account-edit' color="white" size={20} />
                            <Text color={Colors.white} fontSize={16}>
                                About Us
                            </Text>
                        </HStack>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('user-profile')}>
                        <HStack alignItems={'center'} space={5} ml={3} mt={8}>
                            <MaterialCommunityIcons name='account-edit' color="white" size={20} />
                            <Text color={Colors.white} fontSize={16}>
                                Account Info
                            </Text>
                        </HStack>
                    </Pressable>


                    <Pressable onPress={() => navigation.navigate('change-password')}>
                        <HStack alignItems={'center'} space={5} ml={3} mt={8}>
                            {/* <AppIcon isCustom name={'login'} color={colors.white} size={23} /> */}
                            <MaterialCommunityIcons name='key-alert' color="white" size={20} />
                            <Text color={Colors.white} fontSize={16}>
                                Change Password
                            </Text>
                        </HStack>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Form')}>
                        <HStack alignItems={'center'} space={5} ml={3} mt={8}>
                            {/* <AppIcon isCustom name={'login'} color={colors.white} size={23} /> */}
                            <Icon name='home' color="white" size={20} />
                            <Text color={Colors.white} fontSize={16}>
                                New Requirement
                            </Text>
                        </HStack>
                    </Pressable>
                </Box>
            </DrawerContentScrollView>
            <VStack mb={5}>
                <Divider
                    w={250}
                    alignSelf={'center'}
                    mt={12}
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                />

                <HStack space={5} ml={3}>
                    {/* <AppIcon isCustom name={'logout'} color={colors.white} size={25} /> */}
                    <Box mt={4}><MaterialIcon name='logout' color={Colors.light} size={20} /></Box>
                    <Text color={Colors.white} fontSize={16} mt={3}>
                        Logout
                    </Text>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default CustomDrawerContent;