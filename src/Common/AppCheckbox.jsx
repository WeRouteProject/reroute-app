import React from 'react';
import { Checkbox, Text } from 'native-base';
import { Colors, FontSizes } from './Utils/Constants';

export default function AppCheckbox({
  label,
  value,
  isChecked = false,
  onChange,
}) {
  return (
    <Checkbox
      value={value}
      isChecked={isChecked}
      onChange={onChange}
      accessibilityLabel={label}
      size="sm"
      _checked={{
        bgColor: Colors.ButtonColorLight,
        borderColor: Colors.ButtonColorLight,
      }}
      _unchecked={{
        borderColor: Colors.ButtonColorDark,
      }}>
      <Text ml={1} color={Colors.gray} fontSize={FontSizes.small}>
        {label}
      </Text>
    </Checkbox>
  );
}
