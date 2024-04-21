/* eslint-disable prettier/prettier */
import React from 'react';
import { Box } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import { SafeAreaView } from 'react-native';
export default function AppLayout({ children, showLoader = false }) {
  return (
    <SafeAreaView flex={1}>
      <Box h={'100%'} bgColor={'#fff'}>
        <Spinner visible={showLoader} />
        {children}
      </Box>
    </SafeAreaView>
  );
}
