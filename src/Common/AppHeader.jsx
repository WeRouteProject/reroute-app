import {Box, HStack, IconButton, Pressable, Text} from 'native-base';
import React from 'react';
import AppIcon from './AppIcon';
import {colors, fontSize} from '../../utils/constants';
import {NavigationProp} from '@react-navigation/native';

export default function AppHeader({
  navigation,
  title,
  showBack = false,
  showTickMark = false,
  onTickPress,
  onBackPress,
  rightSection,
}) {
  return (
    <HStack h={66} alignItems="center">
      <Box flex={1} alignItems={'flex-start'}>
        {showBack && (
          <IconButton
            icon={
              <AppIcon
                name={'keyboard-arrow-left'}
                size={35}
                color={colors.primary}
              />
            }
            onPress={onBackPress ? onBackPress : () => navigation.goBack()}
          />
        )}
      </Box>
      <Box flex={2} alignItems="center">
        <Text
          fontSize={fontSize.large}
          color={colors.primary}
          fontWeight={'semibold'}
          letterSpacing={0.5}
          textTransform={'uppercase'}>
          {title}
        </Text>
      </Box>
      <Box flex={0.9} alignItems={'flex-end'} pr={2}>
        {showTickMark && (
          <IconButton
            icon={<AppIcon name={'check'} size={25} color={colors.primary} />}
            onPress={onTickPress}
          />
        )}
        {rightSection}
      </Box>
    </HStack>
  );
}
