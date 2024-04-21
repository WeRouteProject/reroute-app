import {Box} from 'native-base';
import React from 'react';

export default function AppCenterLayout({children}) {
  return <Box alignItems={'center'}>{children}</Box>;
}
