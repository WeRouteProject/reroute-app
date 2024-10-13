/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors, FontSizes } from '../Common/Utils/Constants';
import ManagedService from '../Pages/Services/ManagedService/Index';
import CloudService from '../Pages/CloudService/Index';
import Icon from 'react-native-vector-icons/Ionicons';
import NetworkIntegrationService from '../Pages/Services/NetworkInteService/Index';

const Tab = createMaterialTopTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const iconName = route.name === 'managed-service'
                    ? isFocused ? 'cloud' : 'cloud-outline'
                    : route.name === 'consult-service'
                        ? isFocused ? 'settings' : 'cog'
                        : isFocused ? 'arrow-forward-circle' : 'arrow-forward-circle-outline';
                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={[styles.tabButton, isFocused ? styles.activeTab : styles.inactiveTab]}
                    >
                        <Icon name={iconName} size={24} color={isFocused ? Colors.primary : Colors.grey} />
                        <Text style={{ color: isFocused ? Colors.white : Colors.black, marginLeft: 5, fontSize: FontSizes.small }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const AppTabNav = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                tabBarStyle: { height: 0 },
            }}
            style={styles.navigator}
        >
            <Tab.Screen
                name="managed-service"
                component={ManagedService}
                options={{ tabBarLabel: 'Managed Services' }}
            />
            <Tab.Screen
                name="consult-service"
                component={NetworkIntegrationService}
                options={{ tabBarLabel: 'Consulting Services' }}
            />
            {/* <Tab.Screen
                name="cloud-service"
                component={CloudService}
                options={{ tabBarLabel: 'Network Integration' }}
            /> */}
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    navigator: {
        flex: 1,
        minHeight: 450, // Increased minimum height to accommodate content
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 8,
        borderRadius: 50,
        marginHorizontal: 8,
        marginBottom: 8,
    },
    tabButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    activeTab: {
        backgroundColor: Colors.ButtonColorDark,
    },
    inactiveTab: {
        backgroundColor: Colors.ButtonColorLight,
    },
});

export default AppTabNav;