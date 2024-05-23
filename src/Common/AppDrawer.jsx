import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Pages/Home/Index';
import About from '../Pages/About/Index';


const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={Home} />
      <Drawer.Screen name="AboutScreen" component={About} />
    </Drawer.Navigator>
  );
};
export default AppDrawer;
