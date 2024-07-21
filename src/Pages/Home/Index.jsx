import {Box} from 'native-base';
import React from 'react';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, TouchableOpacity} from 'react-native';

const Home = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    // Try using dispatch with DrawerActions
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <Box ml={2} mt={2}>
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="menu" color="black" size={24} />
      </TouchableOpacity>
      <Text style={{fontSize: 30}}>Home</Text>
    </Box>
  );
};

export default Home;
