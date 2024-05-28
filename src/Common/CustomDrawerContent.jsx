/* eslint-disable prettier/prettier */
import React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Box, Text, Divider, HStack, Pressable } from 'native-base';
import { Avatar } from 'react-native-elements';
import { Colors } from './Utils/Constants';

const CustomDrawerContent = props => {
    const navigation = useNavigation();

    return (
        <DrawerContentScrollView {...props}>
            <Box ml={3} mb={5}>
                <Pressable onPress={() => navigation.closeDrawer()} ml={'80%'} p={2}>
                    <Avatar
                        icon={{
                            name: 'person-outline',
                            type: 'material',
                            color: Colors.danger,
                            size: 50,
                        }}
                    />
                </Pressable>
                <HStack alignItems={'center'} space={5}>
                    <Box>
                        <Avatar
                            icon={{
                                name: 'person-outline',
                                type: 'material',
                                color: Colors.danger,
                                size: 50,
                            }}
                        />
                    </Box>
                    <Box>
                        <Text color={Colors.white}>User Name</Text>
                        <Text fontSize={10} color={Colors.white}>
                            user@example.com
                        </Text>
                    </Box>
                </HStack>
            </Box>

            <Divider
                w={250}
                alignSelf={'center'}
                mt={4}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            />

            <Box mt={4} ml={2}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <HStack alignItems={'center'} space={8} ml={3} mt={8}>
                        <Avatar
                            icon={{
                                name: 'person-outline',
                                type: 'material',
                                color: Colors.danger,
                                size: 50,
                            }}
                        />
                        <Text color={Colors.white} fontSize={16}>
                            Home
                        </Text>
                    </HStack>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <HStack alignItems={'center'} space={8} ml={3} mt={8}>
                        {/* <AppIcon isCustom name={'login'} color={colors.white} size={23} /> */}
                        <Text color={Colors.white} fontSize={16}>
                            Login
                        </Text>
                    </HStack>
                </Pressable>
            </Box>

            <Divider
                w={250}
                alignSelf={'center'}
                mt={12}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            />

            <HStack space={8} ml={5}>
                {/* <AppIcon isCustom name={'logout'} color={colors.white} size={25} /> */}
                <Text color={Colors.white} fontSize={16}>
                    Logout
                </Text>
            </HStack>
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;