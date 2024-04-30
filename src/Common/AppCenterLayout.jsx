import {Box} from 'native-base';
import React from 'react';
import {Colors} from './Utils/Constants';

export default function AppCenterLayout({children}) {
  return (
    <Box alignItems={'center'} bgColor={Colors.white} flex={1}>
      {children}
    </Box>
  );
}
