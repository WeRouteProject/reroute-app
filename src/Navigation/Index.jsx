/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../Pages/Login/Index';
import Signup from '../Pages/Signup/Index';
import Home from '../Pages/Home/Index';
import Form from '../Pages/Form/Index';
import Forgot from '../Pages/Forgotpw';
import VerifyCode from '../Pages/VerifyC/Index';
import { Colors } from '../Common/Utils/Constants';
import { Avatar } from 'react-native-elements';
import CustomDrawerContent from '../Common/CustomDrawerContent';
import About from '../Pages/About/Index';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: Colors.primary,
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
        },
        drawerLabelStyle: {
          color: Colors.white,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Avatar
              icon={{
                name: 'person-outline',
                type: 'material',
                color: Colors.danger,
                size: 50,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Avatar
              icon={{
                name: 'person-outline',
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
        {/* <Stack.Screen name="About" component={About} /> */}
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;


























// /* eslint-disable prettier/prettier */
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from '../Pages/Login/Index';
// import Signup from '../Pages/Signup/Index';
// import Home from '../Pages/Home/Index';
// import Form from '../Pages/Form/Index';
// import Forgot from '../Pages/Forgotpw';
// import VerifyCode from '../Pages/VerifyC/Index';
// import About from '../Pages/About/Index';

// const Navigation = () => {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Signup" component={Signup} />
//         <Stack.Screen name="Form" component={Form} />
//         <Stack.Screen name="Forgot" component={Forgot} />
//         <Stack.Screen name="VerifyCode" component={VerifyCode} />
//         <Stack.Screen name="About" component={About} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;
