/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Box, VStack } from 'native-base';
import AppCustomCard from '../../../Common/AppCustomCard';
import { Colors } from '../../../Common/Utils/Constants';
import { useNavigation } from '@react-navigation/native';

const ManagedService = () => {

    const navigation = useNavigation();

    const handleImagePress = () => {
        navigation.navigate('ManagedServiceDetails', {
            // image: require('../../../Common/Utils/assets/images/services/manageds.png'),
        });
    };
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#f5f5f5',
            padding: 10,
            height: '100%',
        }}>
            <View style={{
                flex: 0.6,
                marginBottom: 5,
            }}>
                <TouchableOpacity onPress={handleImagePress}>
                    <AppCustomCard
                        image={require('../../../Common/Utils/assets/images/services/manageds.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 0.4,
                justifyContent: 'space-between',
                paddingVertical: 10,
            }}>
                <Text style={{
                    fontSize: 14,
                    color: '#333',
                    textAlign: 'center',
                    paddingHorizontal: 15,
                    lineHeight: 20,
                    marginBottom: 15,
                }}>
                    NGN helps clients align infrastructure costs with business processes, drive innovative management strategies, and leverage partnerships for optimal outcomes.
                </Text>

                <TouchableOpacity
                    style={{
                        backgroundColor: Colors.ButtonColorDark,
                        paddingVertical: 10,
                        paddingHorizontal: 25,
                        borderRadius: 20,
                        alignSelf: 'center',
                    }}
                    onPress={handleImagePress}
                >
                    <Text style={{
                        color: '#fff',
                        fontWeight: '500',
                    }}>
                        Know More
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ManagedService;
