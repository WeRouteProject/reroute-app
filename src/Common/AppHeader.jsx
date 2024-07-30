/* eslint-disable prettier/prettier */
import { Box, HStack, Pressable, Text } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon
import { NavigationProp } from '@react-navigation/native';
import { Colors, FontSizes } from './Utils/Constants';

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
          <Pressable onPress={onBackPress ? onBackPress : () => navigation.goBack()}>
            <Icon name="caretleft" size={24} color={Colors.primary} />
          </Pressable>
        )}
      </Box>
      <Box flex={2} alignItems="center">
        <Text
          fontSize={FontSizes.large}
          color={Colors.primary}
          fontWeight={'semibold'}
          letterSpacing={0.5}
          textTransform={'uppercase'}>
          {title}
        </Text>
      </Box>
      <Box flex={0.9} alignItems={'flex-end'} pr={2}>
        {rightSection}
      </Box>
    </HStack>
  );
}
