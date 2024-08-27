/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, FontSizes } from './Utils/Constants';

const AppButton = ({ onPress, title, width, mt }) => {
  const buttonStyle = {
    width: width || '100%',
    borderRadius: 16,
    marginTop: mt || 0,
  };

  return (
    <LinearGradient
      colors={['#1E3B70', '#6996b1']}
      style={buttonStyle}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Button style={{ backgroundColor: 'transparent', borderRadius: 16 }} onPress={onPress}>
        <Text color={Colors.white} fontSize={FontSizes.large} fontWeight="bold" fontFamily="Poppins-Bold">
          {title}
        </Text>
      </Button>
    </LinearGradient>
  );
};

export default AppButton;





















// /* eslint-disable prettier/prettier */
// import React from 'react';
// import { Button, Text } from 'native-base';
// import { Colors, FontSizes } from './Utils/Constants';

// const AppButton = ({ onPress, title, width, mt }) => {
//   const buttonStyle = {
//     backgroundColor: Colors.ButtonColor,
//     width: width || '100%',
//     borderRadius: 16,
//     marginTop: mt || 0,
//   };

//   return (
//     <Button style={buttonStyle} onPress={onPress}>
//       <Text color={Colors.white} fontSize={FontSizes.large} fontWeight="bold" fontFamily="Poppins-Bold">{title}</Text>
//     </Button>
//   );
// };

// export default AppButton;
