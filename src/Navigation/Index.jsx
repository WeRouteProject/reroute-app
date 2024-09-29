/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors } from '../Common/Utils/Constants';
import { Avatar } from 'react-native-elements';
import CustomDrawerContent from '../Common/CustomDrawerContent';
import Login from '../Pages/Login/Index';
import Signup from '../Pages/Signup/Index';
import Form from '../Pages/Form/Index';
import Forgot from '../Pages/Forgotpw';
import VerifyCode from '../Pages/VerifyC/Index';
import Feedback from '../Pages/Feedback/Index';
import UserProfile from '../Pages/User-Profile/Index';
import BottomNav from '../Common/BottomNav';
import About from '../Pages/About/Index';
import LinearGradient from 'react-native-linear-gradient';
import ChangePasswordScreen from '../Pages/ChangePassword/Index';
import Starter from '../Pages/Starter/Index';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <LinearGradient
          colors={['#182B3A', '#1E3B70']}
          style={{ flex: 1, borderTopRightRadius: 12, borderBottomRightRadius: 12 }}
        >
          <CustomDrawerContent {...props} />
        </LinearGradient>
      )}
      screenOptions={{
        drawerStyle: {
          // backgroundColor: Colors.primary,
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
        },
        drawerLabelStyle: {
          color: Colors.white,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={BottomNav}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Avatar
              icon={{
                name: 'home',
                type: 'material',
                color: Colors.danger,
                size: 50,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Avatar
              icon={{
                name: 'info',
                type: 'material',
                color: Colors.danger,
                size: 50,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Avatar
              icon={{
                name: 'lock',
                type: 'material',
                color: Colors.danger,
                size: 50,
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="VerifyOtp" component={VerifyCode} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="user-profile" component={UserProfile} />
        <Stack.Screen name="change-password" component={ChangePasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
